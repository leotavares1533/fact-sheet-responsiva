(() => {
  "use strict";

  const API_BASE = "http://127.0.0.1:8790/api";
  const KEY_STORAGE = "lamina_github_pages_publisher_key_v1";

  const $ = (selector) => document.querySelector(selector);

  function defaultCommitMessage() {
    const now = new Date();
    const stamp = now.toLocaleDateString("pt-BR");
    return `Atualiza lamina ${stamp}`;
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

  function setBusy(isBusy) {
    const button = $("#publish-github");
    if (!button) return;
    button.disabled = isBusy;
    button.textContent = isBusy ? "Publicando..." : "Publicar no GitHub Pages";
  }

  function friendlyError(error) {
    const message = String(error?.message || error || "");
    if (/failed to fetch|networkerror|load failed/i.test(message)) {
      return "Publicador local nao esta ativo. Abra scripts\\Iniciar-Publicador-GitHub-Pages.cmd no clone do projeto e tente novamente.";
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

  function renderChanges(changes = []) {
    const body = $("#git-files-body");
    if (!body) return;
    if (!changes.length) {
      body.innerHTML = `<tr><td colspan="2">Nenhuma alteracao pendente.</td></tr>`;
      return;
    }

    body.innerHTML = changes
      .map((item) => {
        const status = item.status || "";
        const file = item.file || "";
        return `<tr><td>${status}</td><td>${file}</td></tr>`;
      })
      .join("");
  }

  async function checkServer() {
    try {
      const data = await api("/ping");
      setStatus(`Publicador ativo. Repositorio: ${data.repository || "nao identificado"}.`, "ok");
      if (getKey()) await refreshGitStatus();
    } catch (error) {
      setStatus(friendlyError(error), "warn");
    }
  }

  async function refreshGitStatus() {
    if (!getKey()) {
      setStatus("Informe a chave local do publicador antes de consultar o Git.", "warn");
      return;
    }

    try {
      const data = await api("/status", { method: "POST", body: {} });
      renderChanges(data.changes || []);
      const branch = data.branch ? `Branch ${data.branch}. ` : "";
      const remote = data.remote ? `Remoto ${data.remote}. ` : "";
      const pending = data.changes?.length ? `${data.changes.length} alteracao(oes) pendente(s).` : "Sem alteracoes pendentes.";
      setStatus(`${branch}${remote}${pending}`, data.changes?.length ? "warn" : "ok");
    } catch (error) {
      setStatus(friendlyError(error), "error");
    }
  }

  async function pollJob(jobId) {
    for (;;) {
      await new Promise((resolve) => setTimeout(resolve, 2500));
      const data = await api(`/job?id=${encodeURIComponent(jobId)}`, { method: "POST", body: {} });
      const job = data.job || {};
      setStatus(job.message || "Publicacao em andamento...", job.status === "failed" ? "error" : "info");
      if (["completed", "failed"].includes(job.status)) return job;
    }
  }

  async function publishGithub() {
    if (!getKey()) {
      setStatus("Informe e salve a chave local do publicador antes de publicar.", "warn");
      return;
    }

    const message = ($("#commit-message")?.value || "").trim() || defaultCommitMessage();
    const confirmText = [
      "Publicar no GitHub Pages?",
      "",
      `Commit: ${message}`,
      "",
      "Isso ira adicionar os arquivos permitidos, criar commit se houver alteracao e fazer push para a branch atual.",
    ].join("\n");
    if (!window.confirm(confirmText)) {
      setStatus("Publicacao cancelada.", "warn");
      return;
    }

    setBusy(true);
    setStatus("Iniciando publicacao no GitHub Pages...", "info");
    try {
      const started = await api("/publish", { body: { message } });
      const job = await pollJob(started.job.id);
      if (job.status === "failed") throw new Error(job.message || "Publicacao falhou.");
      setStatus(job.message || "Publicado no GitHub Pages. Aguarde alguns minutos para o Pages atualizar.", "ok");
      await refreshGitStatus();
    } catch (error) {
      setStatus(friendlyError(error), "error");
    } finally {
      setBusy(false);
    }
  }

  function bind() {
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
    $("#refresh-git-status")?.addEventListener("click", refreshGitStatus);
    $("#publish-github")?.addEventListener("click", publishGithub);
    renderChanges();
    checkServer();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
