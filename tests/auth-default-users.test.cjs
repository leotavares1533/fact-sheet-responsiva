const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

const EMAIL = 'marilia.montes@ceresinvestimentos.com';
const USERS_KEY = 'lamina_prod_access_users_v1';
const source = fs.readFileSync(path.join(__dirname, '../assets/auth.js'), 'utf8');

function createContext(storage = new Map()) {
  const context = vm.createContext({
    window: {},
    document: { readyState: 'loading', addEventListener() {} },
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, String(value)),
      removeItem: key => storage.delete(key),
    },
  });
  vm.runInContext(source, context);
  context.window.LAMINA_AUTH.currentUser();
  return { auth: context.window.LAMINA_AUTH, storage };
}

test('Marilia can sign in as viewer on a fresh browser and must change her initial password', () => {
  const { auth, storage } = createContext();
  const record = JSON.parse(storage.get(USERS_KEY))[EMAIL];
  assert.equal(record.name, 'Marilia Montes');
  assert.equal(record.role, 'viewer');
  assert.equal(record.mustChangePassword, true);
  assert.equal(auth.login(EMAIL, 'incorrect-password').ok, false);
  const result = auth.login(`  ${EMAIL.toUpperCase()}  `, record.password);
  assert.equal(result.ok, true);
  assert.equal(result.user.email, EMAIL);
  assert.equal(result.user.mustChangePassword, true);
  for (const permission of ['viewLamina', 'viewPu', 'generatePdf']) assert.equal(auth.can(permission), true);
  for (const permission of ['simulate', 'viewRealizedEvents', 'updatePu', 'operate', 'publish', 'manageUsers']) {
    assert.equal(auth.can(permission), false);
  }
  assert.equal(auth.isRootAdmin(), false);
  assert.equal(auth.createUser({}).ok, false);
  assert.equal(auth.deleteUser('bruno.silva@ceresagrofinance.com').ok, false);
});

test('Loading the published defaults preserves existing browser accounts and passwords', () => {
  const savedUser = { name: 'Marilia Montes', role: 'viewer', password: 'Changed-password-for-test-only', mustChangePassword: false };
  const existing = { name: 'Existing User', role: 'operator', password: 'Existing-password-for-test-only', mustChangePassword: false };
  const storage = new Map([[USERS_KEY, JSON.stringify({ [EMAIL]: savedUser, 'existing@example.com': existing })]]);
  const { auth } = createContext(storage);
  assert.equal(auth.login(EMAIL, savedUser.password).ok, true);
  assert.equal(auth.currentUser().mustChangePassword, false);
  const records = JSON.parse(storage.get(USERS_KEY));
  assert.deepEqual(records[EMAIL], savedUser);
  assert.deepEqual(records['existing@example.com'], existing);
});
