(() => {
  "use strict";

  const API_BASE = "http://127.0.0.1:8790/api";
  const KEY_STORAGE = "lamina_github_pages_publisher_key_v1";
  const STATE_KEY = "lamina_prod_operacional_state_v1";
  const queue = [];

  const $ = (selector) => document.querySelector(selector);

  function defaultCommitMessage() {
    return `Atualiza lamina ${new Date().toLocaleDateString("pt-BR")}`;
  }

  function formatDate(value) {
    if (!value) return "";
    const [year, month, day] = value.split("-");
    return `${day}/${month}/${year}`;
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
    queue.splice(0, queue.length, ...(Array.isArray(state.queue) ? state.queue : []));
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
      body.innerHTML = `<tr><td colspan="5">Nenhum arquivo importado nesta sessao.</td></tr>`;
      return;
    }

    body.innerHTML = queue
      .map(
        (item, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${item.cra}</td>
            <td>${item.kind}</td>
            <td>${formatDate(item.dateKey)}</td>
            <td>${item.name}</td>
          </tr>
        `
      )
      .join("");
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
      result.files.forEach((file) => queue.push({ ...base, name: file.name }));
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
      setStatus(job.message || "Publicado no GitHub Pages.", "ok");
      await refreshGitStatus();
    } catch (error) {
      setStatus(friendlyError(error), "error");
    } finally {
      setBusy("#publish-github", false, "Publicar no GitHub Pages", "Publicando...");
    }
  }

  function bind() {
    restoreState();

    const keyInput = $("#publisher-key");
    const messageInput = $("#commit-message");
    if (keyInput) keyInput.value = getKey();
    if (messageInput && !messageInput.value) messageInput.value = defaultCommitMessage();

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
    $("#op-cra")?.addEventListener("change", () => saveState());
    $("#op-kind")?.addEventListener("change", () => saveState());
    $("#op-date")?.addEventListener("change", () => saveState());

    renderQueue();
    renderChanges();
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
