from __future__ import annotations

import argparse
import copy
import importlib.util
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def module(name, filename):
    spec = importlib.util.spec_from_file_location(name, ROOT/'scripts'/filename)
    result = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(result)
    return result


continuity = module('pu56_59_continuity', 'reconcile-funding-continuity.py')
terms56 = module('pu56_59_terms', 'reconcile-cra46-56-terms.py')
engine = continuity.engine
VERSION = 'pu56-59-20261112'
TARGETS = {'cra-carteira-56': 'CRA026000RT', 'cra-carteira-59': 'CRA026000S7'}


def ledger(cota):
    return [(e.get('dataIso'), e.get('tipo'), e.get('quantidade'),
             e.get('valorEventoReais'), e.get('valor')) for e in cota.get('eventosAplicados', [])]


def reconcile(through, output, apply=False):
    output.mkdir(parents=True, exist_ok=True)
    registry = json.loads(continuity.terms.REGISTRY.read_text('utf-8'))
    holidays = set(registry['businessCalendar']['holidays'])
    assert {'2026-04-03', '2026-04-21'} <= holidays
    rates = engine.parse_di_rates()
    manifest_path = ROOT/'data/cra-manifest.js'
    manifest = engine.load_json_assignment(manifest_path)
    changes, updates, dates = [], {}, {}
    for item in manifest:
        cra = item['craId']
        if cra not in TARGETS:
            continue
        for entry in item['dates']:
            key = entry['dateKey']
            if key > through or key < ('2026-03-11' if cra.endswith('-56') else '2026-10-28'):
                continue
            path = ROOT/f'data/cras/{cra}/{key}.js'
            original = engine.load_snapshot(path, cra, key)
            snapshot = copy.deepcopy(original)
            for i, cota in enumerate(snapshot['passivo']['cotas']):
                if cota.get('ifCodigo') != TARGETS[cra] or not cota.get('quantidade'):
                    continue
                if cra.endswith('-56'):
                    new = terms56.replay(cota, cra, key, holidays, rates)
                    snapshot['metadata']['businessCalendar'] = copy.deepcopy(registry['businessCalendar'])
                else:
                    new = continuity.repair_continuity(cota, key, holidays, rates)
                    new['usarMotorFundingContratual'] = True
                assert ledger(new) == ledger(cota), f'Financial event changed: {cra}/{key}'
                new['revisaoErrosPu'] = dict(versao=VERSION, calendarioCompleto2026=True,
                    carteiraPreservada=True, caixaPreservado=True, valoresPagosPreservados=True)
                snapshot['passivo']['cotas'][i] = new
                changes.append(dict(cra=cra, date=key, code=TARGETS[cra], oldPu=cota['pu'],
                    newPu=new['pu'], quantity=new['quantidade'], deltaFunding=new['valor']-cota['valor']))
            if snapshot == original:
                continue
            continuity.residual(snapshot)
            assert snapshot['ativo'] == original['ativo'] and snapshot['caixa'] == original['caixa']
            assert snapshot.get('carteira') == original.get('carteira')
            snapshot['metadata'].update(revisionId=f'{key.replace("-", "")}-{VERSION}-{cra}',
                                        fundingErrorRevision=VERSION)
            updates[path] = snapshot
            dates.setdefault(key, {})[cra] = snapshot
            entry.update(revisionId=snapshot['metadata']['revisionId'], funding=snapshot['passivo']['fundingTotal'])
            for field, source in [('subordinada', 'subordinadaTotal'), ('puSub', 'subordinadaPuResidual')]:
                if field in entry:
                    entry[field] = snapshot['passivo'].get(source)

    for key, changed in sorted(dates.items()):
        path = ROOT/f'data/cras/cras-carteira-overview/{key}.js'
        if not path.exists():
            continue
        original = engine.load_snapshot(path, 'cras-carteira-overview', key)
        overview = copy.deepcopy(original)
        if original['metadata'].get('portfolioConsolidado'):
            snapshots = {r['craId']: changed.get(r['craId']) or
                         engine.load_snapshot(ROOT/f'data/cras/{r["craId"]}/{key}.js', r['craId'], key)
                         for r in original['portfolioOverview']['assetRows']}
            overview = engine.build_overview(key, snapshots, original['metadata']['assetImport'])
            overview['metadata'] = copy.deepcopy(original['metadata'])
            overview['sources'] = original['sources']
        else:
            cotas = {c['ifCodigo']: c for s in changed.values() for c in s['passivo']['cotas'] if c.get('ifCodigo')}
            for row in overview['portfolioOverview']['rows']:
                if cota := cotas.get(row.get('ifCodigo')):
                    row.update(puAtual=cota['pu'], valorAtual=cota['valor'])
            for row in overview.get('fundingCashVehicles', []):
                if snapshot := changed.get(row['craId']):
                    row['funding'] = snapshot['passivo']['fundingTotal']
            delta = math.fsum(s['passivo']['fundingTotal']-engine.load_snapshot(
                ROOT/f'data/cras/{cra}/{key}.js', cra, key)['passivo']['fundingTotal']
                for cra, s in changed.items())
            overview['passivo']['fundingTotal'] += delta
        assert overview['ativo'] == original['ativo'] and overview['caixa'] == original['caixa']
        overview['metadata'].update(revisionId=f'{key.replace("-", "")}-{VERSION}-overview',
                                    fundingErrorRevision=VERSION)
        updates[path] = overview
        entry = next(e for item in manifest if item['craId'] == 'cras-carteira-overview'
                     for e in item['dates'] if e['dateKey'] == key)
        entry.update(revisionId=overview['metadata']['revisionId'], funding=overview['passivo']['fundingTotal'])
        for field, source in [('subordinada', 'subordinadaTotal'), ('puSub', 'subordinadaPuResidual')]:
            if field in entry:
                entry[field] = overview['passivo'].get(source)

    totals = {p.stem:s['passivo'].get('subordinadaTotal') for p,s in updates.items()
              if p.parent.name == 'cras-carteira-overview' and not s['metadata'].get('fundingCashOnly')}
    for path, snapshot in updates.items():
        if path.parent.name != 'cras-carteira-overview':
            continue
        for row in snapshot['portfolioOverview'].get('subHistory', []):
            if row['dateKey'] in totals:
                row['subordinadaTotal'] = totals[row['dateKey']]
                row['rendimentoSubDia'] = None

    if apply:
        for path, snapshot in updates.items():
            backup = output/'before'/path.relative_to(ROOT)
            backup.parent.mkdir(parents=True, exist_ok=True)
            if not backup.exists():
                backup.write_bytes(path.read_bytes())
            engine.write_snapshot(path, snapshot['metadata']['craId'], path.stem, snapshot)
        backup_manifest = output/'before/data/cra-manifest.js'
        backup_manifest.parent.mkdir(parents=True, exist_ok=True)
        if not backup_manifest.exists():
            backup_manifest.write_bytes(manifest_path.read_bytes())
        engine.write_manifest(manifest_path, manifest)
    report = dict(version=VERSION, through=through, applied=apply, changes=changes,
                  files=[str(p.relative_to(ROOT)) for p in updates])
    (output/'reconciliation.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), 'utf-8')
    print(json.dumps(dict(applied=apply, snapshots=len(updates), changes=len(changes),
                         latest=[next(r for r in reversed(changes) if r['cra']==cra) for cra in TARGETS]), indent=2))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Corrige os erros internos de calendario/continuidade dos CRAs 56 e 59.')
    parser.add_argument('--through', default='2026-11-11')
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    reconcile(args.through, args.output, args.apply)
