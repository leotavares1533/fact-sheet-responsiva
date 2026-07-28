(() => {
  "use strict";

  const API_BASE = "http://127.0.0.1:8790/api";
  const KEY_STORAGE = "lamina_github_pages_publisher_key_v1";
  const STATE_KEY = "lamina_prod_operacional_state_v1";
  const queue = [];
  let lastAutoCommitMessage = "";

  const $ = (selector) => document.querySelector(selector);

  function defaultCommitMessage() {
    const selected = selectedPayload();
    const cra = selected.cra || "lamina";
    const date = selected.dateKey ? formatDate(selected.dateKey) : new Date().toLocaleDateString("pt-BR");
    return `Atualiza ${cra} em ${date}`;
  }

  function formatDate(value) {
    if (!value) return "";
    const [year, month, day] = value.split("-");
    return `${day}/${month}/${year}`;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function queueItemId(item = {}) {
    return [item.cra, item.kind, item.dateKey, item.name].map((part) => String(part || "")).join("|");
  }

  function setStatus(message, type = "info") {
    const status = $("#op-status");
    if (!status) return;
    status.textContent = message;
    status.dataset.type = type;
  }

  function getKey() {
    return localStorage.getItem(KEY_STORAGE) || "";
  }

  function canOperate() {
    return Boolean(window.LAMINA_AUTH?.can("operate"));
  }

  function canPublish() {
    return Boolean(window.LAMINA_AUTH?.can("publish"));
  }

  function setBusy(id, isBusy, label, busyLabel) {
    const button = $(id);
    if (!button) return;
    button.disabled = isBusy;
    button.textContent = isBusy ? busyLabel : label;
  }

  function friendlyError(error) {
    const message = String(error?.message || error || "");
    if (/failed to fetch|networkerror|load failed/i.test(message)) {
      return "Publicador local nao esta ativo. Abra scripts\\Iniciar-Publicador-GitHub-Pages.cmd no clone do projeto e deixe a janela aberta.";
    }
    return message || "Erro operacional nao identificado.";
  }

  async function api(path, options = {}) {
    const headers = {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
    };
    const key = getKey();
    if (key) headers["X-Lamina-Publisher-Key"] = key;

    const response = await fetch(`${API_BASE}${path}`, {
      method: options.method || (options.body ? "POST" : "GET"),
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.message || `Falha HTTP ${response.status}`);
    return data;
  }

  function selectedPayload() {
    return {
      cra: $("#op-cra")?.value || "",
      kind: $("#op-kind")?.value || "",
      dateKey: $("#op-date")?.value || "",
    };
  }

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STATE_KEY) || "{}");
    } catch (_) {
      return {};
    }
  }

  function saveState(patch = {}) {
    const current = loadState();
    const next = {
      ...current,
      ...patch,
      selected: selectedPayload(),
      queue,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STATE_KEY, JSON.stringify(next));
    return next;
  }

  function restoreState() {
    const state = loadState();
    const selected = state.selected || {};

    if (selected.cra && $("#op-cra")) $("#op-cra").value = selected.cra;
    if (selected.kind && $("#op-kind")) $("#op-kind").value = selected.kind;
    if (selected.dateKey && $("#op-date")) $("#op-date").value = selected.dateKey;
    queue.splice(
      0,
      queue.length,
      ...(Array.isArray(state.queue)
        ? state.queue.map((item) => ({ ...item, status: item.status || "importado" }))
        : [])
    );
  }

  function selectedOrLastProcessed() {
    const selected = selectedPayload();
    const state = loadState();
    if (selected.cra && selected.dateKey) return selected;
    if (state.lastProcessed?.cra && state.lastProcessed?.dateKey) {
      return { ...state.lastProcessed, kind: state.lastProcessed.kind || selected.kind || "carteira" };
    }
    return selected;
  }

  function processTargetsFromQueue() {
    const selected = selectedPayload();
    const selectedDate = selected.dateKey;
    const groups = new Map();

    queue
      .filter((item) => !selectedDate || item.dateKey === selectedDate)
      .forEach((item) => {
        const key = `${item.cra}|${item.dateKey}`;
        if (!groups.has(key)) {
          groups.set(key, { cra: item.cra, dateKey: item.dateKey, kinds: new Set(), files: [] });
        }
        const group = groups.get(key);
        group.kinds.add(String(item.kind || "").toLowerCase());
        group.files.push(item.name);
      });

    const ready = Array.from(groups.values())
      .filter((group) => group.kinds.has("carteira") && group.kinds.has("caixa"))
      .map((group) => ({ cra: group.cra, kind: "batch", dateKey: group.dateKey, files: group.files }))
      .sort((a, b) => a.cra.localeCompare(b.cra) || a.dateKey.localeCompare(b.dateKey));

    if (ready.length) return ready;
    const fallback = selectedOrLastProcessed();
    return fallback.cra && fallback.dateKey ? [fallback] : [];
  }

  function renderQueue() {
    const body = $("#op-files-body");
    if (!body) return;

    if (!queue.length) {
      body.innerHTML = `<tr><td colspan="7">Nenhum arquivo importado nesta sessao.</td></tr>`;
      return;
    }

    body.innerHTML = queue
      .map(
        (item, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(item.cra)}</td>
            <td>${escapeHtml(item.kind)}</td>
            <td>${formatDate(item.dateKey)}</td>
            <td>${escapeHtml(item.name)}</td>
            <td><span class="op-queue-status" data-status="${escapeHtml(item.status || "importado")}">${escapeHtml(item.status || "importado")}</span></td>
            <td><button type="button" class="op-row-action" data-remove-queue="${index}">Excluir</button></td>
          </tr>
        `
      )
      .join("");

    body.querySelectorAll("[data-remove-queue]").forEach((button) => {
      button.addEventListener("click", () => removeQueuedFile(Number(button.dataset.removeQueue)));
    });
  }

  function renderChanges(changes = []) {
    const body = $("#git-files-body");
    if (!body) return;
    if (!changes.length) {
      body.innerHTML = `<tr><td colspan="2">Nenhuma alteracao pendente.</td></tr>`;
      return;
    }

    body.innerHTML = changes
      .map((item) => `<tr><td>${item.status || ""}</td><td>${item.file || ""}</td></tr>`)
      .join("");
  }

  function renderPublishLog(log = loadState().publishLog || []) {
    const body = $("#publish-log-body");
    if (!body) return;
    if (!log.length) {
      body.innerHTML = `<tr><td colspan="4">Nenhuma publicacao registrada neste navegador.</td></tr>`;
      return;
    }

    body.innerHTML = log
      .slice(0, 20)
      .map(
        (item) => `
          <tr>
            <td>${escapeHtml(new Date(item.publishedAt).toLocaleString("pt-BR"))}</td>
            <td>${escapeHtml(item.message)}</td>
            <td>${escapeHtml(item.commit || "-")}</td>
            <td>${escapeHtml(item.summary || "Publicado")}</td>
          </tr>
        `
      )
      .join("");
  }

  function addPublishLog(job, message) {
    const state = loadState();
    const entry = {
      publishedAt: new Date().toISOString(),
      message,
      commit: job.commit || "",
      summary: job.message || "Publicado no GitHub Pages.",
    };
    const publishLog = [entry, ...(state.publishLog || [])].slice(0, 20);
    saveState({ lastPublication: entry, publishLog });
    renderPublishLog(publishLog);
  }

  function updateCommitMessage(force = false) {
    const input = $("#commit-message");
    if (!input) return;
    const next = defaultCommitMessage();
    if (force || !input.value || input.value === lastAutoCommitMessage) {
      input.value = next;
    }
    lastAutoCommitMessage = next;
  }

  function clearQueue(message = "") {
    queue.splice(0, queue.length);
    const input = $("#op-files");
    if (input) input.value = "";
    renderQueue();
    saveState({ queueClearedAt: new Date().toISOString() });
    if (message) setStatus(message, "ok");
  }

  async function removeQueuedFile(index) {
    const item = queue[index];
    if (!item) return;

    const canRemoveLocal = item.status !== "processado";
    const confirmed = window.confirm(
      canRemoveLocal
        ? `Excluir "${item.name}" da fila e da area de importacao local?`
        : `Excluir "${item.name}" apenas da fila? A base ja foi processada e isso nao desfaz o snapshot.`
    );
    if (!confirmed) return;

    try {
      if (canRemoveLocal) {
        if (!canOperate()) {
          setStatus("Entre com usuario operacional para excluir importacoes.", "warn");
          return;
        }
        if (!getKey()) {
          setStatus("Informe a chave local do publicador antes de excluir importacoes.", "warn");
          return;
        }
        await api("/remove-import", { body: item });
      }
      queue.splice(index, 1);
      renderQueue();
      saveState({ lastQueueRemoval: { ...item, removedAt: new Date().toISOString() } });
      setStatus(canRemoveLocal ? "Arquivo removido da fila e da importacao local." : "Arquivo removido da fila.", "ok");
    } catch (error) {
      setStatus(friendlyError(error), "error");
    }
  }

  function readFileAsBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const raw = String(reader.result || "");
        resolve(raw.includes(",") ? raw.split(",")[1] : raw);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function terminalJobStatus(status) {
    return ["completed", "failed", "timeout"].includes(status);
  }

  function jobStatusLabel(job) {
    if (job?.status === "completed") return job.message || "Processamento concluido.";
    if (job?.status === "failed") return job.message || "Processamento falhou.";
    if (job?.status === "timeout") return job.message || "Processamento interrompido por timeout.";
    return job?.message || "Processando...";
  }

  async function pollJob(jobId) {
    for (;;) {
      await new Promise((resolve) => setTimeout(resolve, 2500));
      const data = await api(`/job?id=${encodeURIComponent(jobId)}`, { method: "POST", body: {} });
      const job = data.job || {};
      setStatus(jobStatusLabel(job), job.status === "failed" ? "error" : "info");
      if (terminalJobStatus(job.status)) return job;
    }
  }

  async function checkServer() {
    try {
      const data = await api("/ping");
      setStatus(`Publicador ativo. Repositorio: ${data.repository || "nao identificado"}.`, "ok");
      if (getKey() && canOperate()) await refreshGitStatus();
    } catch (error) {
      setStatus(friendlyError(error), "warn");
    }
  }

  async function refreshGitStatus() {
    if (!canOperate()) {
      setStatus("Entre com usuario operacional para consultar o Git.", "warn");
      return;
    }
    if (!getKey()) {
      setStatus("Informe a chave local do publicador antes de consultar o Git.", "warn");
      return;
    }

    try {
      const data = await api("/git-status", { body: {} });
      renderChanges(data.changes || []);
      const branch = data.branch ? `Branch ${data.branch}. ` : "";
      const pending = data.changes?.length ? `${data.changes.length} alteracao(oes) pendente(s).` : "Sem alteracoes pendentes.";
      setStatus(`${branch}${pending}`, data.changes?.length ? "warn" : "ok");
    } catch (error) {
      setStatus(friendlyError(error), "error");
    }
  }

  async function importFiles() {
    if (!canOperate()) {
      setStatus("Entre com usuario operacional para importar arquivos.", "warn");
      return;
    }
    if (!getKey()) {
      setStatus("Informe a chave local do publicador antes de importar.", "warn");
      return;
    }

    const input = $("#op-files");
    const files = Array.from(input?.files || []);
    const base = selectedPayload();
    if (!base.cra || !base.kind || !base.dateKey || !files.length) {
      setStatus("Preencha CRA, tipo, data-base e selecione ao menos um arquivo.", "warn");
      return;
    }

    setStatus("Importando arquivos para a area operacional local...", "info");
    try {
      const payloadFiles = [];
      for (const file of files) {
        payloadFiles.push({ name: file.name, dataBase64: await readFileAsBase64(file) });
      }
      const result = await api("/import", { body: { ...base, files: payloadFiles } });
      result.files.forEach((file) => queue.push({ ...base, name: file.name, status: "importado" }));
      renderQueue();
      saveState({ lastImport: { ...base, files: result.files, importedAt: new Date().toISOString() } });
      setStatus(`${result.files.length} arquivo(s) importado(s).`, "ok");
    } catch (error) {
      setStatus(friendlyError(error), "error");
    }
  }

  async function processFiles() {
    if (!canOperate()) {
      setStatus("Entre com usuario operacional para processar arquivos.", "warn");
      return;
    }
    if (!getKey()) {
      setStatus("Informe a chave local do publicador antes de processar.", "warn");
      return;
    }

    const targets = processTargetsFromQueue();
    if (!targets.length) {
      setStatus("Importe carteira e caixa ou selecione uma data-base para processar.", "warn");
      return;
    }

    setBusy("#op-process", true, "Processar arquivo", "Processando...");
    try {
      const processed = [];
      for (let index = 0; index < targets.length; index += 1) {
        const payload = targets[index];
        setStatus(`Processando ${index + 1}/${targets.length}: ${payload.cra} ${formatDate(payload.dateKey)}...`, "info");
        const started = await api("/process", { body: payload });
        const job = await pollJob(started.job.id);
        if (job.status !== "completed") throw new Error(job.message || "Processamento falhou.");
        processed.push({ ...payload, jobId: job.id, processedAt: new Date().toISOString() });
      }
      const processedIds = new Set(
        processed.flatMap((target) =>
          queue
            .filter((item) => item.cra === target.cra && item.dateKey === target.dateKey)
            .map(queueItemId)
        )
      );
      queue.forEach((item) => {
        if (processedIds.has(queueItemId(item))) item.status = "processado";
      });
      renderQueue();
      saveState({ lastProcessed: processed.at(-1), lastProcessedBatch: processed });
      setStatus(`Processamento concluido para ${processed.length} posicao(oes). Valide a lamina antes de publicar.`, "ok");
      await refreshGitStatus();
    } catch (error) {
      setStatus(friendlyError(error), "error");
    } finally {
      setBusy("#op-process", false, "Processar arquivo", "Processando...");
    }
  }

  async function publishGithub() {
    if (!canPublish()) {
      setStatus("Entre com usuario autorizado para publicar.", "warn");
      return;
    }
    if (!getKey()) {
      setStatus("Informe a chave local do publicador antes de publicar.", "warn");
      return;
    }
    const pendingImports = queue.filter((item) => item.status !== "processado");
    if (pendingImports.length) {
      setStatus(`Existem ${pendingImports.length} arquivo(s) importado(s) ainda nao processado(s). Exclua da fila ou processe antes de publicar.`, "warn");
      return;
    }

    const message = ($("#commit-message")?.value || "").trim() || defaultCommitMessage();
    const confirmText = [
      "Publicar no GitHub Pages?",
      "",
      `Commit: ${message}`,
      "",
      "Isso adiciona os arquivos permitidos, cria commit se houver alteracao e faz push para a branch main.",
    ].join("\n");
    if (!window.confirm(confirmText)) {
      setStatus("Publicacao cancelada.", "warn");
      return;
    }

    setBusy("#publish-github", true, "Publicar no GitHub Pages", "Publicando...");
    setStatus("Iniciando publicacao no GitHub Pages...", "info");
    try {
      const started = await api("/publish", { body: { message } });
      const job = await pollJob(started.job.id);
      if (job.status !== "completed") throw new Error(job.message || "Publicacao falhou.");
      clearQueue();
      addPublishLog(job, message);
      await refreshGitStatus();
      setStatus(job.message || "Publicado no GitHub Pages. Fila limpa para a proxima importacao.", "ok");
    } catch (error) {
      setStatus(friendlyError(error), "error");
    } finally {
      setBusy("#publish-github", false, "Publicar no GitHub Pages", "Publicando...");
    }
  }

  function bind() {
    restoreState();

    const keyInput = $("#publisher-key");
    if (keyInput) keyInput.value = getKey();
    updateCommitMessage(true);

    $("#save-key")?.addEventListener("click", () => {
      const key = (keyInput?.value || "").trim();
      localStorage.setItem(KEY_STORAGE, key);
      setStatus(key ? "Chave local salva neste navegador." : "Chave removida.", key ? "ok" : "warn");
    });
    $("#op-check-server")?.addEventListener("click", checkServer);
    $("#op-import")?.addEventListener("click", importFiles);
    $("#op-process")?.addEventListener("click", processFiles);
    $("#refresh-git-status")?.addEventListener("click", refreshGitStatus);
    $("#publish-github")?.addEventListener("click", publishGithub);
    $("#clear-queue")?.addEventListener("click", () => {
      if (!queue.length) {
        setStatus("A fila ja esta vazia.", "ok");
        return;
      }
      const pendingImports = queue.filter((item) => item.status !== "processado");
      if (pendingImports.length) {
        setStatus(`Existem ${pendingImports.length} arquivo(s) ainda nao processado(s). Exclua linha a linha para remover tambem da area local.`, "warn");
        return;
      }
      if (window.confirm("Limpar a fila da tela? Isso nao desfaz snapshots ja processados nem publicacoes.")) {
        clearQueue("Fila limpa na tela.");
      }
    });
    $("#op-cra")?.addEventListener("change", () => {
      updateCommitMessage();
      saveState();
    });
    $("#op-kind")?.addEventListener("change", () => saveState());
    $("#op-date")?.addEventListener("change", () => {
      updateCommitMessage();
      saveState();
    });

    renderQueue();
    renderChanges();
    renderPublishLog();
    window.addEventListener("lamina-auth-ready", () => {
      if (!canOperate()) setStatus("Entre com usuario operacional para liberar importacao e publicacao.", "warn");
    });
    checkServer();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
