(() => {
  "use strict";

  const USERS_KEY = "lamina_prod_access_users_v1";
  const SESSION_KEY = "lamina_prod_access_session_v1";
  const DEFAULT_PASSWORD = String.fromCharCode(67, 101, 114, 101, 115, 64, 50, 48, 50, 54);
  const ADMIN_EMAIL = "leonardo.silva@ceresinvestimentos.com";

  const defaultUsers = {
    "joao.souza@ceresinvestimentos.com": {
      name: "Joao Souza",
      role: "operator",
      password: DEFAULT_PASSWORD,
      mustChangePassword: true,
    },
    [ADMIN_EMAIL]: {
      name: "Leonardo Silva",
      role: "admin",
      password: DEFAULT_PASSWORD,
      mustChangePassword: true,
    },
  };

  const permissionMap = {
    public: {
      viewLamina: true,
      viewPu: true,
      generatePdf: true,
      simulate: false,
      viewRealizedEvents: false,
      updatePu: false,
      operate: false,
      publish: false,
    },
    operator: {
      viewLamina: true,
      viewPu: true,
      generatePdf: true,
      simulate: true,
      viewRealizedEvents: true,
      updatePu: true,
      operate: true,
      publish: true,
    },
    admin: {
      viewLamina: true,
      viewPu: true,
      generatePdf: true,
      simulate: true,
      viewRealizedEvents: true,
      updatePu: true,
      operate: true,
      publish: true,
    },
  };

  const privateTextPatterns = [
    /eventos realizados/i,
    /eventos de pagamento/i,
    /componentes por evento/i,
    /memoria gerencial/i,
    /par[aâ]metros e c[aá]lculo por s[eé]rie/i,
  ];

  let cachedUser = null;
  let scrubObserver = null;

  function loadUsers() {
    let stored = {};
    try {
      stored = JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
    } catch (_) {
      stored = {};
    }

    const merged = { ...defaultUsers, ...stored };
    localStorage.setItem(USERS_KEY, JSON.stringify(merged));
    return merged;
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function normalizeEmail(email) {
    return String(email || "").trim().toLowerCase();
  }

  function getSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch (_) {
      return null;
    }
  }

  function setSession(email) {
    if (!email) {
      localStorage.removeItem(SESSION_KEY);
      cachedUser = null;
      return;
    }

    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ email, signedAt: new Date().toISOString() })
    );
    cachedUser = null;
  }

  function currentUser() {
    if (cachedUser) return cachedUser;
    const session = getSession();
    const users = loadUsers();
    const email = normalizeEmail(session?.email);
    const user = email ? users[email] : null;

    cachedUser = user
      ? { email, ...user }
      : {
          email: "",
          name: "Acesso publico",
          role: "public",
          mustChangePassword: false,
        };

    return cachedUser;
  }

  function can(permission) {
    const role = currentUser().role || "public";
    return Boolean(permissionMap[role]?.[permission]);
  }

  function login(email, password) {
    const users = loadUsers();
    const key = normalizeEmail(email);
    const user = users[key];

    if (!user || String(user.password) !== String(password)) {
      return { ok: false, message: "E-mail ou senha invalidos." };
    }

    setSession(key);
    return { ok: true, user: currentUser() };
  }

  function logout() {
    setSession(null);
    applyPermissions();
  }

  function changePassword(currentPassword, newPassword, confirmPassword) {
    const user = currentUser();
    const users = loadUsers();
    const record = users[user.email];

    if (!record) return { ok: false, message: "Usuario nao encontrado." };
    if (String(record.password) !== String(currentPassword)) {
      return { ok: false, message: "Senha atual invalida." };
    }
    if (!newPassword || newPassword.length < 8) {
      return { ok: false, message: "Use uma senha com pelo menos 8 caracteres." };
    }
    if (newPassword !== confirmPassword) {
      return { ok: false, message: "A confirmacao nao bate com a nova senha." };
    }

    users[user.email] = { ...record, password: newPassword, mustChangePassword: false };
    saveUsers(users);
    cachedUser = null;
    applyPermissions();
    return { ok: true };
  }

  function getPageName() {
    const page = document.body?.dataset?.page;
    if (page) return page;
    const path = location.pathname.toLowerCase();
    if (path.includes("simulador")) return "simulador";
    if (path.includes("pu.html")) return "pu";
    if (path.includes("operacional")) return "operacional";
    return "lamina";
  }

  function createButton(label, className, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className || "auth-button";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  function findTopbarControls() {
    return document.querySelector(".topbar .controls") || document.querySelector(".controls");
  }

  function injectAuthControls() {
    if (document.querySelector(".auth-access-controls")) return;

    const holder = document.createElement("div");
    holder.className = "auth-access-controls";
    const controls = findTopbarControls();

    if (controls) {
      controls.appendChild(holder);
    } else {
      document.body.prepend(holder);
    }

    renderAuthControls();
  }

  function renderAuthControls() {
    const holder = document.querySelector(".auth-access-controls");
    if (!holder) return;

    const user = currentUser();
    holder.innerHTML = "";

    const pill = document.createElement("span");
    pill.className = `auth-pill auth-role-${user.role}`;
    pill.textContent = user.role === "public" ? "Acesso publico" : user.name;
    holder.appendChild(pill);

    if (can("operate")) {
      holder.appendChild(
        createButton("Operacional", "auth-button", () => {
          location.href = "./operacional.html";
        })
      );
    }

    if (user.role === "public") {
      holder.appendChild(createButton("Entrar", "auth-button", openLoginModal));
    } else {
      holder.appendChild(createButton("Trocar senha", "auth-button", openPasswordModal));
      holder.appendChild(createButton("Sair", "auth-button auth-button-soft", logout));
    }
  }

  function ensureModalRoot() {
    let root = document.querySelector("#auth-modal-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "auth-modal-root";
      document.body.appendChild(root);
    }
    return root;
  }

  function closeModal() {
    const root = ensureModalRoot();
    root.innerHTML = "";
  }

  function renderModal(title, body) {
    const root = ensureModalRoot();
    root.innerHTML = "";

    const backdrop = document.createElement("div");
    backdrop.className = "auth-modal-backdrop";

    const modal = document.createElement("div");
    modal.className = "auth-modal";
    modal.innerHTML = `<div class="auth-modal-head"><h2>${title}</h2><button type="button" class="auth-modal-close" aria-label="Fechar">x</button></div>`;
    modal.appendChild(body);
    backdrop.appendChild(modal);
    root.appendChild(backdrop);

    modal.querySelector(".auth-modal-close").addEventListener("click", closeModal);
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop && !currentUser().mustChangePassword) closeModal();
    });
  }

  function makeField(label, type, name, value = "") {
    const wrap = document.createElement("label");
    wrap.className = "auth-field";
    wrap.innerHTML = `<span>${label}</span><input type="${type}" name="${name}" value="${value}" autocomplete="off" />`;
    return wrap;
  }

  function openLoginModal() {
    const form = document.createElement("form");
    form.className = "auth-form";
    form.appendChild(makeField("E-mail", "email", "email", "joao.souza@ceresinvestimentos.com"));
    form.appendChild(makeField("Senha", "password", "password"));

    const message = document.createElement("div");
    message.className = "auth-message";
    form.appendChild(message);

    const actions = document.createElement("div");
    actions.className = "auth-actions";
    actions.appendChild(createButton("Usar publico", "auth-button auth-button-soft", closeModal));
    const submit = createButton("Entrar", "auth-button", () => {});
    submit.type = "submit";
    actions.appendChild(submit);
    form.appendChild(actions);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const result = login(data.get("email"), data.get("password"));
      if (!result.ok) {
        message.textContent = result.message;
        return;
      }
      closeModal();
      applyPermissions();
      if (currentUser().mustChangePassword) openPasswordModal(true);
    });

    renderModal("Entrar", form);
  }

  function openPasswordModal(forced = false) {
    const form = document.createElement("form");
    form.className = "auth-form";
    form.appendChild(makeField("Senha atual", "password", "currentPassword"));
    form.appendChild(makeField("Nova senha", "password", "newPassword"));
    form.appendChild(makeField("Confirmar nova senha", "password", "confirmPassword"));

    const message = document.createElement("div");
    message.className = "auth-message";
    if (forced) message.textContent = "Troque a senha inicial para continuar.";
    form.appendChild(message);

    const actions = document.createElement("div");
    actions.className = "auth-actions";
    if (!forced) actions.appendChild(createButton("Cancelar", "auth-button auth-button-soft", closeModal));
    const submit = createButton("Salvar senha", "auth-button", () => {});
    submit.type = "submit";
    actions.appendChild(submit);
    form.appendChild(actions);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const result = changePassword(
        data.get("currentPassword"),
        data.get("newPassword"),
        data.get("confirmPassword")
      );
      if (!result.ok) {
        message.textContent = result.message;
        return;
      }
      closeModal();
    });

    renderModal("Trocar senha", form);
  }

  function lockCurrentPage(reason) {
    const main = document.querySelector("main") || document.querySelector(".page") || document.body;
    const topbar = document.querySelector(".topbar");
    Array.from(main.children).forEach((child) => {
      if (child !== topbar) {
        child.dataset.authLockedHidden = "true";
        child.style.display = "none";
      }
    });

    if (!document.querySelector(".auth-locked-panel")) {
      const panel = document.createElement("section");
      panel.className = "auth-locked-panel";
      panel.innerHTML = `
        <p class="eyebrow">Acesso restrito</p>
        <h2>${reason}</h2>
        <p>Entre com um usuario autorizado para liberar esta tela.</p>
        <div class="auth-actions">
          <a class="button-like" href="./index.html">Voltar para a lamina</a>
          <button type="button" class="auth-button auth-login-from-lock">Entrar</button>
        </div>
      `;
      main.appendChild(panel);
      panel.querySelector(".auth-login-from-lock").addEventListener("click", openLoginModal);
    }
  }

  function unlockCurrentPage() {
    document.querySelectorAll("[data-auth-locked-hidden='true']").forEach((child) => {
      child.style.display = "";
      delete child.dataset.authLockedHidden;
    });
    document.querySelectorAll(".auth-locked-panel").forEach((panel) => panel.remove());
  }

  function hideElement(element, hidden) {
    if (!element) return;
    element.classList.toggle("auth-hidden", hidden);
    element.setAttribute("aria-hidden", hidden ? "true" : "false");
  }

  function applyStaticElementPermissions() {
    const publicAccess = currentUser().role === "public";
    document.documentElement.classList.toggle("public-access", publicAccess);
    document.documentElement.classList.toggle("logged-access", !publicAccess);

    document.querySelectorAll('a[href*="simulador-eventos"], a[href*="simulador"]').forEach((el) => {
      hideElement(el, !can("simulate"));
    });
    document.querySelectorAll('a[href*="operacional"]').forEach((el) => {
      hideElement(el, !can("operate"));
    });
    document.querySelectorAll("#update-pu-button, .update-pu-link, [data-action='update-pu']").forEach((el) => {
      hideElement(el, !can("updatePu"));
    });
    document.querySelectorAll("#export-af-excel, [data-action='export-af'], .export-af").forEach((el) => {
      hideElement(el, !can("simulate"));
    });
    document.querySelectorAll("[data-private='events'], [data-private='operational'], .auth-private").forEach((el) => {
      hideElement(el, currentUser().role === "public");
    });
  }

  function sectionLooksPrivate(section) {
    if (!section || !section.textContent) return false;
    const title = section.querySelector("h1,h2,h3,h4,.section-title,.card-title")?.textContent || "";
    const sample = `${title} ${section.textContent.slice(0, 400)}`;
    return privateTextPatterns.some((pattern) => pattern.test(sample));
  }

  function scrubPrivateSections() {
    const hide = currentUser().role === "public";
    const candidates = document.querySelectorAll("section, .section, .panel, .card, .table-card, .module, .block");
    candidates.forEach((section) => {
      if (sectionLooksPrivate(section)) hideElement(section, hide);
    });
  }

  function startScrubber() {
    if (scrubObserver) scrubObserver.disconnect();
    scrubPrivateSections();
    scrubObserver = new MutationObserver(() => scrubPrivateSections());
    scrubObserver.observe(document.body, { childList: true, subtree: true });
  }

  function applyPublishedStateForPublic() {
    const state = window.LAMINA_PUBLIC_STATE;
    if (currentUser().role !== "public" || !state?.current?.dateKey) return;

    const dateInput = document.querySelector("#date-base, #date-selector, input[type='date']");
    if (dateInput && dateInput.value !== state.current.dateKey) {
      dateInput.value = state.current.dateKey;
      dateInput.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }

  function guardPageAccess() {
    const page = getPageName();
    if (page === "simulador" && !can("simulate")) {
      lockCurrentPage("Simulador disponivel apenas para usuarios internos.");
      return;
    }
    if (page === "operacional" && !can("operate")) {
      lockCurrentPage("Importacao, processamento e publicacao ficam no acesso operacional.");
      return;
    }
    unlockCurrentPage();
  }

  function applyPermissions() {
    renderAuthControls();
    applyStaticElementPermissions();
    guardPageAccess();
    startScrubber();
    applyPublishedStateForPublic();
    window.dispatchEvent(new CustomEvent("lamina-auth-ready", { detail: currentUser() }));
  }

  function init() {
    loadUsers();
    injectAuthControls();
    applyPermissions();
    if (currentUser().mustChangePassword) openPasswordModal(true);
  }

  window.LAMINA_AUTH = {
    ADMIN_EMAIL,
    can,
    changePassword,
    currentUser,
    login,
    logout,
    openLoginModal,
    openPasswordModal,
    permissionMap,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
