"""Normalize the newer GER004 export without discarding dated payment history."""
from __future__ import annotations

import copy
import csv
import re
import unicodedata
from collections import defaultdict
from datetime import datetime
from decimal import Decimal
from pathlib import Path

FIELDS = {
    'nome da cedente': 'Nome Cedente', 'nome sacado': 'Nome Sacado',
    'tipo de titulo': 'Tipo do Ativo', 'data de emissao': 'Data Emissão',
    'data de vencimento': 'Data Vencimento', 'data de cessao': 'Data Cessão',
    'data de aprovacao de cessao': 'Data Aprovação', 'tipo de operacao': 'Tipo de Operação',
    'status do titulo': 'Situação do Ativo', 'status do pagamento': 'Status de Pagamento',
    'data do pagamento': 'Data Pagamento',
}
MONEY = {'valor face': 'Valor Nominal', 'valor aquisicao': 'Valor Aquisição',
         'valor presente': 'Valor Aberto', 'valor pago': 'Valor Pago'}
REQUIRED = {'Veículo', 'Lastro', 'Taxa Cessão', 'Taxa Efetiva', 'Base de Dias', *FIELDS.values(), *MONEY.values()}


def decimal_br(value):
    text = str(value or '').strip().replace('R$', '').strip()
    if not text or text == '-':
        return Decimal(0)
    if ',' in text:
        text = text.replace('.', '').replace(',', '.')
    number = Decimal(text)
    if not number.is_finite():
        raise ValueError(f'Numero nao finito: {value!r}')
    return number


def canonical(raw, line):
    match = re.fullmatch(r'(\d+)ª\s*-?\s*CRA Carteira', raw['Veículo'].strip(), re.I)
    lastro = raw['Lastro'].strip()
    if not match or not lastro.isdigit():
        raise ValueError(f'Linha {line}: veiculo/lastro invalido')
    key = (int(match.group(1)), lastro)
    row = {target: raw[source].strip() for target, source in FIELDS.items()}
    row.update({target: str(decimal_br(raw[source])) for target, source in MONEY.items()})
    row.update({'nome cra': f'{key[0]}ª - CRA Carteira', 'lastro': lastro, 'source_line': line,
                'taxa desconto': str(decimal_br(raw['Taxa Cessão']) * 100),
                'taxa efetiva': str(decimal_br(raw['Taxa Efetiva']) * 100),
                'validacao do titulo': '', 'residuo': row['valor presente']})
    base = re.fullmatch(r'(252|360) dias (?:úteis|corridos)', raw['Base de Dias'].strip())
    if not base:
        raise ValueError(f'Linha {line}: base de dias nao suportada: {raw["Base de Dias"]!r}')
    row['base de dias'] = base.group(1)
    for field in ('data de emissao', 'data de vencimento', 'data de cessao', 'data de aprovacao de cessao', 'data do pagamento'):
        if row[field]:
            datetime.strptime(row[field], '%d/%m/%Y')
    return key, row


def payment_rows(master, previous, issues, key):
    old = [(row['data do pagamento'], decimal_br(row['valor pago'])) for row in previous
           if row.get('data do pagamento') and decimal_br(row.get('valor pago')) > 0]
    if not old:
        return [master]
    latest = max(datetime.strptime(day, '%d/%m/%Y') for day, _ in old)
    total = sum((value for _, value in old), Decimal(0))
    new_total = decimal_br(master['valor pago'])
    new_day = datetime.strptime(master['data do pagamento'], '%d/%m/%Y') if master['data do pagamento'] else None
    if new_day and new_day > latest and new_total >= total:
        if new_total > total:
            old.append((master['data do pagamento'], new_total - total))
    elif new_total != total:
        issues.append(dict(cra=key[0], lastro=key[1], type='pagamentos_agregados_divergentes',
            valorAnterior=str(total), valorNovo=str(new_total), dataNova=master['data do pagamento'],
            acao='Historico datado anterior preservado; agregado novo nao substitui baixas sem rateio.'))
    result = [dict(master, **{'valor pago': '0'})]
    for day, value in old:
        stub = dict(master, **{'valor face': '0', 'valor aquisicao': '0', 'valor presente': '0',
            'residuo': '0', 'valor pago': str(value), 'data do pagamento': day, 'status do titulo': 'LIQUIDADO'})
        result.append(stub)
    return result


def read_export(path: Path, previous=None):
    previous = previous or {}
    groups, source, issues = {}, {}, []
    with path.open(encoding='utf-8-sig', newline='') as stream:
        reader = csv.DictReader(stream, delimiter=';')
        if not REQUIRED.issubset(reader.fieldnames or []):
            raise ValueError(f'Colunas ausentes: {sorted(REQUIRED-set(reader.fieldnames or []))}')
        for line, raw in enumerate(reader, 2):
            excess = raw.pop(None, [])
            if any(value.strip() for value in excess) or any(value is None for value in raw.values()):
                raise ValueError(f'Linha {line}: numero de colunas inesperado')
            key, row = canonical(raw, line)
            if key in groups:
                raise ValueError(f'Lastro repetido: {key}')
            groups[key] = payment_rows(row, previous.get(key, []), issues, key)
            source[key] = raw
    return groups, source, issues


def preserve_missing(groups, previous, active_positions):
    preserved = []
    for key, position in active_positions.items():
        if key in groups:
            continue
        if key not in previous:
            raise ValueError(f'Memoria anterior ausente para o titulo preservado: {key}')
        groups[key] = copy.deepcopy(previous[key])
        preserved.append(dict(cra=key[0], **position))
    return preserved


def identity(value):
    text = unicodedata.normalize('NFKD', str(value or '')).encode('ascii', 'ignore').decode()
    return ''.join(text.casefold().split())


def preserve_migrated_contracts(groups, source, previous, active_positions):
    """Keep one approved contract, not both it and the export's replacement parcels."""
    by_number, by_assignment, by_party = defaultdict(set), defaultdict(set), defaultdict(set)
    masters = {}
    for key, rows in previous.items():
        master = max(rows, key=lambda r: (decimal_br(r['valor aquisicao']), decimal_br(r['valor face'])))
        masters[key] = master
        number = master.get('numero nf', '')
        suffix = '-' + master.get('parcela', '')
        if suffix != '-' and number.endswith(suffix):
            number = number[:-len(suffix)]
        party = identity(master.get('nome da cedente'))
        by_number[(key[0], identity(number), party)].add(key)
        assignment = identity(master.get('nome de cessao'))
        if assignment:
            by_assignment[(key[0], assignment, party)].add(key)
        if key in active_positions:
            by_party[(key[0], party, identity(master.get('tipo de titulo')))].add(key)
    links = []
    for key, raw in source.items():
        if key in previous:
            continue
        party = identity(raw['Nome Cedente'])
        candidates = by_number.get((key[0], identity(raw['Número do Ativo']), party), set())
        method = 'Numero do contrato e cedente coincidentes; parcelas novas nao somadas ao contrato anterior'
        if not candidates:
            candidates = by_assignment.get((key[0], identity(raw['Nome Cessão']), party), set())
            method = 'Cessao e cedente coincidentes; parcelas novas nao somadas ao contrato anterior'
        if not candidates:
            candidates = by_party.get((key[0], party, identity(raw['Tipo do Ativo'])), set())
            method = 'Possivel reidentificacao: mesmo cedente e tipo; preservar memoria anterior ate conciliacao'
        if len(candidates) != 1:
            continue
        old_key = next(iter(candidates))
        # Only replacement records for an omitted legacy contract may be suppressed.
        if old_key in source:
            continue
        acquisition = groups[key][0]['data de cessao']
        previous_date = active_positions.get(old_key, {}).get('dataAquisicaoIso', '')
        if method.startswith('Possivel') and previous_date and acquisition:
            if datetime.strptime(acquisition, '%d/%m/%Y').date().isoformat() > previous_date:
                continue
        del groups[key]
        groups[old_key] = copy.deepcopy(previous[old_key])
        links.append(dict(cra=key[0], lastroNovo=key[1], lastroAnterior=old_key[1],
            numeroNovo=raw['Número do Ativo'].strip(), parcela=raw['Parcela do Ativo'].strip(),
            cedente=raw['Nome Cedente'], sacado=raw['Nome Sacado'], tipo=raw['Tipo do Ativo'],
            dataCessao=raw['Data Cessão'], vencimento=raw['Data Vencimento'],
            aquisicao=float(decimal_br(raw['Valor Aquisição'])), face=float(decimal_br(raw['Valor Nominal'])),
            saldoFonte=float(decimal_br(raw['Valor Aberto'])), motivo=method))
    return links
