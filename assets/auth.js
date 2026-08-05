(() => {
  "use strict";

  const USERS_KEY = "lamina_prod_access_users_v1";
  const DELETED_USERS_KEY = "lamina_prod_access_deleted_users_v1";
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
    "fabryny.bittencourt@ceresagrofinance.com": {
      name: "Fabryny Bittencourt",
      role: "viewer",
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
      viewLamina: false,
      viewPu: false,
      generatePdf: false,
      simulate: false,
      viewRealizedEvents: false,
      updatePu: false,
      operate: false,
      publish: false,
    },
    viewer: {
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
      manageUsers: true,
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

  const roleOptions = [
    { value: "viewer", label: "Visualizacao" },
    { value: "operator", label: "Operacional" },
    { value: "admin", label: "Administrador" },
  ];

  const roleLabels = {
    viewer: "Visualizacao",
    operator: "Operacional",
    admin: "Admin",
  };

  function loadDeletedUsers() {
    try {
      return JSON.parse(localStorage.getItem(DELETED_USERS_KEY) || "[]")
        .map(normalizeEmail)
        .filter(Boolean)
        .filter((email) => email !== ADMIN_EMAIL);
    } catch (_) {
      return [];
    }
  }

  function saveDeletedUsers(users) {
    const cleaned = [...new Set((users || []).map(normalizeEmail).filter(Boolean))]
      .filter((email) => email !== ADMIN_EMAIL);
    localStorage.setItem(DELETED_USERS_KEY, JSON.stringify(cleaned));
  }

  function loadUsers() {
    let stored = {};
    try {
      stored = JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
    } catch (_) {
      stored = {};
    }

    const merged = { ...defaultUsers, ...stored };
    loadDeletedUsers().forEach((email) => {
      delete merged[email];
    });
    localStorage.setItem(USERS_KEY, JSON.stringify(merged));
    return merged;
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function normalizeEmail(email) {
    return String(email || "").trim().toLowerCase();
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function isRootAdmin(user = currentUser()) {
    return normalizeEmail(user.email) === ADMIN_EMAIL;
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
          name: "Acesso restrito",
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

  function createUser(record) {
    if (!isRootAdmin()) {
      return { ok: false, message: "Apenas o administrador pode criar usuarios." };
    }

    const users = loadUsers();
    const email = normalizeEmail(record.email);
    const name = String(record.name || "").trim();
    const role = String(record.role || "operator").trim();
    const password = String(record.password || "");
    const confirmPassword = String(record.confirmPassword || "");

    if (!name) return { ok: false, message: "Informe o nome do usuario." };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { ok: false, message: "Informe um e-mail valido." };
    }
    if (!["viewer", "operator", "admin"].includes(role)) {
      return { ok: false, message: "Perfil invalido para novo usuario." };
    }
    if (users[email]) return { ok: false, message: "Ja existe usuario com esse e-mail." };
    if (!password || password.length < 8) {
      return { ok: false, message: "Use uma senha inicial com pelo menos 8 caracteres." };
    }
    if (password !== confirmPassword) {
      return { ok: false, message: "A confirmacao nao bate com a senha inicial." };
    }

    users[email] = {
      name,
      role,
      password,
      mustChangePassword: true,
    };
    saveDeletedUsers(loadDeletedUsers().filter((deletedEmail) => deletedEmail !== email));
    saveUsers(users);
    return { ok: true, email };
  }

  function updateUser(email, record) {
    if (!isRootAdmin()) {
      return { ok: false, message: "Apenas o administrador pode editar usuarios." };
    }

    const users = loadUsers();
    const key = normalizeEmail(email);
    const nextEmail = normalizeEmail(record.email || key);
    const current = users[key];
    const name = String(record.name || "").trim();
    const role = key === ADMIN_EMAIL ? "admin" : String(record.role || "viewer").trim();
    const password = String(record.password || "");
    const confirmPassword = String(record.confirmPassword || "");

    if (!current) return { ok: false, message: "Usuario nao encontrado." };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextEmail)) {
      return { ok: false, message: "Informe um e-mail valido." };
    }
    if (key === ADMIN_EMAIL && nextEmail !== ADMIN_EMAIL) {
      return { ok: false, message: "O e-mail do administrador principal nao pode ser alterado." };
    }
    if (nextEmail !== key && users[nextEmail]) {
      return { ok: false, message: "Ja existe usuario com esse e-mail." };
    }
    if (!name) return { ok: false, message: "Informe o nome do usuario." };
    if (!["viewer", "operator", "admin"].includes(role)) {
      return { ok: false, message: "Perfil invalido para usuario." };
    }
    if (password || confirmPassword) {
      if (!password || password.length < 8) {
        return { ok: false, message: "Use uma senha inicial com pelo menos 8 caracteres." };
      }
      if (password !== confirmPassword) {
        return { ok: false, message: "A confirmacao nao bate com a senha inicial." };
      }
    }

    users[nextEmail] = {
      ...current,
      name,
      role,
      ...(password ? { password, mustChangePassword: true } : {}),
    };
    if (nextEmail !== key) {
      delete users[key];
      saveDeletedUsers([
        ...loadDeletedUsers().filter((deletedEmail) => deletedEmail !== nextEmail),
        ...(defaultUsers[key] ? [key] : []),
      ]);
    }
    saveUsers(users);
    cachedUser = null;
    applyPermissions();
    return { ok: true, email: nextEmail };
  }

  function deleteUser(email) {
    if (!isRootAdmin()) {
      return { ok: false, message: "Apenas o administrador pode excluir usuarios." };
    }

    const key = normalizeEmail(email);
    if (key === ADMIN_EMAIL) {
      return { ok: false, message: "O administrador principal nao pode ser excluido." };
    }
    if (key === normalizeEmail(currentUser().email)) {
      return { ok: false, message: "Voce nao pode excluir o proprio usuario logado." };
    }

    const users = loadUsers();
    if (!users[key]) return { ok: false, message: "Usuario nao encontrado." };

    delete users[key];
    saveUsers(users);
    if (defaultUsers[key]) {
      saveDeletedUsers([...loadDeletedUsers(), key]);
    }
    return { ok: true, email: key };
  }

  function resetUserPassword(email, password, confirmPassword) {
    if (!isRootAdmin()) {
      return { ok: false, message: "Apenas o administrador pode resetar senhas." };
    }

    const users = loadUsers();
    const key = normalizeEmail(email);
    const record = users[key];

    if (!record) return { ok: false, message: "Usuario nao encontrado." };
    if (!password || password.length < 8) {
      return { ok: false, message: "Use uma senha inicial com pelo menos 8 caracteres." };
    }
    if (password !== confirmPassword) {
      return { ok: false, message: "A confirmacao nao bate com a senha inicial." };
    }

    users[key] = { ...record, password, mustChangePassword: true };
    saveUsers(users);
    return { ok: true, email: key };
  }

  function roleLabel(role) {
    return roleLabels[role] || role || "-";
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
    pill.textContent = user.role === "public" ? "Acesso restrito" : user.name;
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
      if (isRootAdmin(user)) {
        holder.appendChild(createButton("Usuarios", "auth-button", openUserAdminModal));
      }
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
  }

  function makeField(label, type, name, value = "") {
    const wrap = document.createElement("label");
    wrap.className = "auth-field";
    const caption = document.createElement("span");
    const input = document.createElement("input");
    const autocomplete =
      type === "email"
        ? "username"
        : type === "password" && /new|confirm/i.test(name)
          ? "new-password"
          : type === "password"
            ? "current-password"
            : "off";

    caption.textContent = label;
    input.type = type;
    input.name = name;
    input.value = value;
    input.autocomplete = autocomplete;
    wrap.appendChild(caption);

    if (type === "password") {
      const field = document.createElement("div");
      const toggle = document.createElement("button");
      field.className = "auth-password-field";
      toggle.type = "button";
      toggle.className = "auth-password-toggle";
      toggle.textContent = "Mostrar";
      toggle.setAttribute("aria-label", `Mostrar ${label.toLowerCase()}`);
      toggle.addEventListener("click", () => {
        const isVisible = input.type === "text";
        input.type = isVisible ? "password" : "text";
        toggle.textContent = isVisible ? "Mostrar" : "Ocultar";
        toggle.setAttribute("aria-label", `${isVisible ? "Mostrar" : "Ocultar"} ${label.toLowerCase()}`);
      });
      field.appendChild(input);
      field.appendChild(toggle);
      wrap.appendChild(field);
      return wrap;
    }

    wrap.appendChild(input);
    return wrap;
  }

  function makeSelect(label, name, options) {
    const wrap = document.createElement("label");
    wrap.className = "auth-field";
    const optionHtml = options
      .map((option) => `<option value="${option.value}">${option.label}</option>`)
      .join("");
    wrap.innerHTML = `<span>${label}</span><select name="${name}">${optionHtml}</select>`;
    return wrap;
  }

  function openLoginModal() {
    const form = document.createElement("form");
    form.className = "auth-form";
    form.appendChild(makeField("E-mail", "email", "email"));
    form.appendChild(makeField("Senha", "password", "password"));

    const message = document.createElement("div");
    message.className = "auth-message";
    form.appendChild(message);

    const forgot = createButton("Esqueci a senha", "auth-text-button", () => {
      const data = new FormData(form);
      openForgotPasswordModal(data.get("email"));
    });
    form.appendChild(forgot);

    const actions = document.createElement("div");
    actions.className = "auth-actions";
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

  function openForgotPasswordModal(email = "") {
    const panel = document.createElement("div");
    panel.className = "auth-form auth-help-panel";

    const userEmail = normalizeEmail(email);
    const text = document.createElement("div");
    text.className = "auth-help-text";
    const first = document.createElement("p");
    const second = document.createElement("p");
    first.textContent = "Como o acesso atual roda no site estatico, a recuperacao automatica por e-mail ainda nao esta ativa.";
    second.textContent = "Peça ao administrador para resetar sua senha no painel de usuarios.";
    if (userEmail) {
      const strong = document.createElement("strong");
      second.textContent = "Peça ao administrador para resetar sua senha no painel de usuarios para ";
      strong.textContent = userEmail;
      second.appendChild(strong);
      second.append(".");
    }
    text.appendChild(first);
    text.appendChild(second);
    panel.appendChild(text);

    const actions = document.createElement("div");
    actions.className = "auth-actions";
    actions.appendChild(createButton("Voltar ao login", "auth-button auth-button-soft", openLoginModal));
    actions.appendChild(createButton("Fechar", "auth-button", closeModal));
    panel.appendChild(actions);

    renderModal("Esqueci a senha", panel);
  }

  function openUserAdminModal() {
    if (!isRootAdmin()) return;

    const form = document.createElement("form");
    form.className = "auth-form auth-user-admin-form";
    form.appendChild(makeField("Nome", "text", "name"));
    form.appendChild(makeField("E-mail", "email", "email"));
    form.appendChild(makeSelect("Perfil", "role", roleOptions));
    form.appendChild(makeField("Senha inicial", "password", "password"));
    form.appendChild(makeField("Confirmar senha", "password", "confirmPassword"));

    const message = document.createElement("div");
    message.className = "auth-message";
    form.appendChild(message);

    const list = document.createElement("div");
    list.className = "auth-user-list";
    form.appendChild(list);

    function renderUserList() {
      const users = loadUsers();
      list.innerHTML = `
        <p class="auth-list-title">Usuarios cadastrados neste navegador</p>
        ${Object.entries(users)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([email, user]) => {
            const safeEmail = escapeHtml(email);
            const safeName = escapeHtml(user.name || email);
            const safeRole = escapeHtml(roleLabel(user.role));
            const canDelete = email !== ADMIN_EMAIL && email !== normalizeEmail(currentUser().email);
            return `
              <div class="auth-user-row">
                <span>${safeName}</span>
                <strong>${safeRole}</strong>
                <small>${safeEmail}</small>
                <div class="auth-user-actions">
                  <button type="button" class="auth-row-action" data-edit-user="${safeEmail}">Editar</button>
                  <button type="button" class="auth-row-action" data-reset-user="${safeEmail}">Resetar senha</button>
                  <button type="button" class="auth-row-action auth-row-danger" data-delete-user="${safeEmail}" ${canDelete ? "" : "disabled"}>Excluir</button>
                </div>
              </div>
            `;
          })
          .join("")}
      `;
      list.querySelectorAll("[data-edit-user]").forEach((button) => {
        button.addEventListener("click", () => openEditUserModal(button.dataset.editUser));
      });
      list.querySelectorAll("[data-reset-user]").forEach((button) => {
        button.addEventListener("click", () => openResetPasswordModal(button.dataset.resetUser));
      });
      list.querySelectorAll("[data-delete-user]").forEach((button) => {
        button.addEventListener("click", () => {
          const email = button.dataset.deleteUser;
          if (!window.confirm(`Excluir o usuario ${email}?`)) return;
          const result = deleteUser(email);
          message.textContent = result.ok ? `Usuario ${result.email} excluido.` : result.message;
          renderUserList();
        });
      });
    }

    const actions = document.createElement("div");
    actions.className = "auth-actions";
    actions.appendChild(createButton("Cancelar", "auth-button auth-button-soft", closeModal));
    const submit = createButton("Criar usuario", "auth-button", () => {});
    submit.type = "submit";
    actions.appendChild(submit);
    form.appendChild(actions);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const result = createUser({
        name: data.get("name"),
        email: data.get("email"),
        role: data.get("role"),
        password: data.get("password"),
        confirmPassword: data.get("confirmPassword"),
      });
      if (!result.ok) {
        message.textContent = result.message;
        return;
      }
      message.textContent = `Usuario ${result.email} criado.`;
      form.reset();
      renderUserList();
    });

    renderUserList();
    renderModal("Usuarios", form);
  }

  function openEditUserModal(email) {
    if (!isRootAdmin()) return;

    let key = normalizeEmail(email);
    const users = loadUsers();
    const user = users[key];
    if (!user) return;

    const form = document.createElement("form");
    form.className = "auth-form";

    const info = document.createElement("div");
    info.className = "auth-help-text";
    info.innerHTML = `<p>Editando <strong>${escapeHtml(key)}</strong>.</p>`;
    form.appendChild(info);

    form.appendChild(makeField("E-mail", "email", "email"));
    form.appendChild(makeField("Nome", "text", "name"));
    form.appendChild(makeSelect("Perfil", "role", roleOptions));
    form.appendChild(makeField("Nova senha inicial (opcional)", "password", "password"));
    form.appendChild(makeField("Confirmar nova senha", "password", "confirmPassword"));

    const emailInput = form.querySelector('[name="email"]');
    const nameInput = form.querySelector('[name="name"]');
    const roleSelect = form.querySelector('[name="role"]');
    if (emailInput) {
      emailInput.value = key;
      if (key === ADMIN_EMAIL) {
        emailInput.disabled = true;
      }
    }
    if (nameInput) nameInput.value = user.name || "";
    if (roleSelect) {
      roleSelect.value = user.role || "viewer";
      if (key === ADMIN_EMAIL) {
        roleSelect.value = "admin";
        roleSelect.disabled = true;
      }
    }

    const message = document.createElement("div");
    message.className = "auth-message";
    form.appendChild(message);

    const actions = document.createElement("div");
    actions.className = "auth-actions";
    actions.appendChild(createButton("Voltar", "auth-button auth-button-soft", openUserAdminModal));
    const submit = createButton("Salvar usuario", "auth-button", () => {});
    submit.type = "submit";
    actions.appendChild(submit);
    form.appendChild(actions);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const result = updateUser(key, {
        email: emailInput?.disabled ? key : data.get("email"),
        name: data.get("name"),
        role: roleSelect?.disabled ? "admin" : data.get("role"),
        password: data.get("password"),
        confirmPassword: data.get("confirmPassword"),
      });
      if (!result.ok) {
        message.textContent = result.message;
        return;
      }
      key = result.email;
      if (emailInput) emailInput.value = key;
      info.innerHTML = `<p>Editando <strong>${escapeHtml(key)}</strong>.</p>`;
      message.textContent = `Usuario ${result.email} atualizado.`;
    });

    renderModal("Editar usuario", form);
  }

  function openResetPasswordModal(email) {
    if (!isRootAdmin()) return;

    const form = document.createElement("form");
    form.className = "auth-form";
    const info = document.createElement("div");
    info.className = "auth-help-text";
    const paragraph = document.createElement("p");
    const strong = document.createElement("strong");
    paragraph.textContent = "Defina uma senha inicial para ";
    strong.textContent = normalizeEmail(email);
    paragraph.appendChild(strong);
    paragraph.append(". O usuario sera obrigado a trocar no proximo acesso.");
    info.appendChild(paragraph);
    form.appendChild(info);
    form.appendChild(makeField("Nova senha inicial", "password", "password"));
    form.appendChild(makeField("Confirmar senha", "password", "confirmPassword"));

    const message = document.createElement("div");
    message.className = "auth-message";
    form.appendChild(message);

    const actions = document.createElement("div");
    actions.className = "auth-actions";
    actions.appendChild(createButton("Voltar", "auth-button auth-button-soft", openUserAdminModal));
    const submit = createButton("Resetar senha", "auth-button", () => {});
    submit.type = "submit";
    actions.appendChild(submit);
    form.appendChild(actions);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const result = resetUserPassword(email, data.get("password"), data.get("confirmPassword"));
      if (!result.ok) {
        message.textContent = result.message;
        return;
      }
      message.textContent = `Senha resetada para ${result.email}.`;
      form.reset();
    });

    renderModal("Resetar senha", form);
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
    document.documentElement.classList.add("auth-page-locked");
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
          <button type="button" class="auth-button auth-login-from-lock">Entrar</button>
        </div>
      `;
      main.appendChild(panel);
      panel.querySelector(".auth-login-from-lock").addEventListener("click", openLoginModal);
    }
  }

  function unlockCurrentPage() {
    document.documentElement.classList.remove("auth-page-locked");
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
    document.querySelectorAll('a[href$="index.html"], a[href*="index.html"]').forEach((el) => {
      hideElement(el, !can("viewLamina"));
    });
    document.querySelectorAll('a[href*="pu.html"]').forEach((el) => {
      hideElement(el, !can("viewPu"));
    });
    document.querySelectorAll('a[href*="operacional"]').forEach((el) => {
      hideElement(el, !can("operate"));
    });
    document.querySelectorAll(".print-button, #print-button, [data-action='print'], [data-action='generate-pdf']").forEach((el) => {
      hideElement(el, !can("generatePdf"));
    });
    document.querySelectorAll(".topbar .date-control, .topbar .status-pill").forEach((el) => {
      hideElement(el, publicAccess);
    });
    document.querySelectorAll("#update-pu-button, .update-pu-link, [data-action='update-pu']").forEach((el) => {
      hideElement(el, !can("updatePu"));
    });
    document.querySelectorAll("#export-af-excel, [data-action='export-af'], .export-af").forEach((el) => {
      hideElement(el, !can("simulate"));
    });
    document.querySelectorAll("[data-private='events'], [data-private='operational'], .auth-private").forEach((el) => {
      hideElement(el, !can("viewRealizedEvents"));
    });
  }

  function sectionLooksPrivate(section) {
    if (!section || !section.textContent) return false;
    const title = section.querySelector("h1,h2,h3,h4,.section-title,.card-title")?.textContent || "";
    const sample = `${title} ${section.textContent.slice(0, 400)}`;
    return privateTextPatterns.some((pattern) => pattern.test(sample));
  }

  function scrubPrivateSections() {
    const hide = !can("viewRealizedEvents");
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
    if (page === "lamina" && !can("viewLamina")) {
      lockCurrentPage("Lamina disponivel apenas para usuarios autorizados.");
      return;
    }
    if (page === "pu" && !can("viewPu")) {
      lockCurrentPage("Validacao de PU disponivel apenas para usuarios autorizados.");
      return;
    }
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
    createUser,
    currentUser,
    deleteUser,
    isRootAdmin,
    login,
    logout,
    openLoginModal,
    openForgotPasswordModal,
    openPasswordModal,
    openUserAdminModal,
    permissionMap,
    resetUserPassword,
    updateUser,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
