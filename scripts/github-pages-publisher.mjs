import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { randomBytes } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const port = Number(process.env.LAMINA_PUBLISHER_PORT || 8790);
const keyPath = path.join(root, ".lamina-publisher-key");
const importRoot = path.join(root, "Importe de arquivos");
const jobs = new Map();

const craFolders = {
  "CRA 42": "CRA 42",
  "CRA 65": "CRA 65",
};

const craIds = {
  "CRA 42": "cra-modelo",
  "CRA 65": "cra-65",
};

const kindFolders = {
  carteira: "01_Carteira",
  caixa: "02_Caixa",
  evento: "03_Eventos de pagamento",
};

const allowedOrigins = new Set(
  [
    "https://leotavares1533.github.io",
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "http://127.0.0.1:8787",
    "http://localhost:8787",
    "null",
    ...(process.env.LAMINA_ALLOWED_ORIGINS || "").split(",").map((item) => item.trim()).filter(Boolean),
  ].filter(Boolean)
);

function ensureKey() {
  if (existsSync(keyPath)) return readFileSync(keyPath, "utf8").trim();
  const key = randomBytes(18).toString("base64url");
  writeFileSync(keyPath, `${key}\n`, "utf8");
  return key;
}

const localKey = ensureKey();

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
  return dir;
}

const previewTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".csv", "text/csv; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".ico", "image/x-icon"],
  [".pdf", "application/pdf"],
]);

function servePreview(req, res, requestUrl) {
  let relative = decodeURIComponent(requestUrl.pathname.replace(/^\/preview\/?/, ""));
  if (!relative || relative.endsWith("/")) relative = path.join(relative, "index.html");

  const target = path.resolve(root, relative);
  if (target !== root && !target.startsWith(`${root}${path.sep}`)) {
    json(req, res, 403, { ok: false, message: "Caminho de preview invalido." });
    return true;
  }

  if (!existsSync(target) || !statSync(target).isFile()) {
    json(req, res, 404, { ok: false, message: "Arquivo de preview nao encontrado." });
    return true;
  }

  const type = previewTypes.get(path.extname(target).toLowerCase()) || "application/octet-stream";
  res.writeHead(200, {
    "Content-Type": type,
    "Cache-Control": "no-store, max-age=0",
  });
  res.end(readFileSync(target));
  return true;
}

function safeName(name) {
  return String(name || "arquivo")
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "_")
    .replace(/\s+/g, " ")
    .trim();
}

function bundledPython() {
  const candidate = path.join(
    process.env.USERPROFILE || "",
    ".cache",
    "codex-runtimes",
    "codex-primary-runtime",
    "dependencies",
    "python",
    "python.exe"
  );
  return existsSync(candidate) ? candidate : "python";
}

function ymdToTokens(dateKey) {
  const [year, month, day] = String(dateKey || "").split("-");
  return {
    ymd: `${year || ""}${month || ""}${day || ""}`,
    dmy: `${day || ""}${month || ""}${year || ""}`,
    dm: `${day || ""}${month || ""}`,
    dashed: `${day || ""}-${month || ""}-${year || ""}`,
    dashedShort: `${day || ""}-${month || ""}`,
  };
}

function listFilesRecursive(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFilesRecursive(filePath));
    if (entry.isFile()) out.push(filePath);
  }
  return out;
}

function findImportedFile(cra, kind, dateKey) {
  const folder = path.join(importRoot, craFolders[cra] || safeName(cra), kindFolders[kind] || safeName(kind));
  const tokens = Object.values(ymdToTokens(dateKey)).filter(Boolean);
  const files = listFilesRecursive(folder).filter((file) => /\.(xlsx|xls|csv)$/i.test(file));
  const scored = files
    .map((file) => {
      const name = path.basename(file).toLowerCase();
      const score = tokens.reduce((total, token) => total + (name.includes(token.toLowerCase()) ? 1 : 0), 0);
      return { file, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || b.file.localeCompare(a.file));
  return scored[0]?.file || files.sort().at(-1) || null;
}

function importedFilePath(payload) {
  const craFolder = craFolders[payload.cra] || safeName(payload.cra);
  const kindFolder = kindFolders[payload.kind] || safeName(payload.kind);
  const dateFolder = safeName(payload.dateKey);
  const fileName = safeName(payload.name);
  if (!craFolder || !kindFolder || !fileName || !/^\d{4}-\d{2}-\d{2}$/.test(dateFolder)) return null;

  const filePath = path.resolve(importRoot, craFolder, kindFolder, dateFolder, fileName);
  const rootPath = path.resolve(importRoot);
  if (filePath !== rootPath && filePath.startsWith(`${rootPath}${path.sep}`)) return filePath;
  return null;
}

function extractSnapshotJson(text) {
  const raw = String(text || "");
  const assignment = raw.match(/window\.LAMINA_CRA_DAILY\[[^\]]+\]\[[^\]]+\]\s*=\s*/);
  const start = assignment ? raw.indexOf("{", assignment.index + assignment[0].length) : raw.indexOf("{");
  const assignmentEnd = raw.lastIndexOf("};");
  const end = assignmentEnd >= start ? assignmentEnd : raw.lastIndexOf("}");
  if (start < 0 || end < start) return null;
  return JSON.parse(raw.slice(start, end + 1));
}

function latestSnapshot(craId) {
  const dataDir = path.join(root, "data", "cras", craId);
  if (!existsSync(dataDir)) return null;
  const files = readdirSync(dataDir)
    .filter((name) => /^\d{4}-\d{2}-\d{2}\.js$/.test(name))
    .sort();
  const latest = files.at(-1);
  if (!latest) return null;
  return extractSnapshotJson(readFileSync(path.join(dataDir, latest), "utf8"));
}

function ensureCotasSeed(craId) {
  const cotasPath = path.join(root, "cras", craId, "imports", "cotas", "cotas.csv");
  if (existsSync(cotasPath)) return cotasPath;

  const snapshot = latestSnapshot(craId);
  const cotas = snapshot?.passivo?.cotas || [];
  if (!cotas.length) throw new Error(`Nao encontrei cotas para preparar processamento de ${craId}.`);

  ensureDir(path.dirname(cotasPath));
  const lines = ["classe;quantidade"];
  for (const cota of cotas) {
    const classe = String(cota.classe || "").trim();
    const quantidade = Number(cota.quantidade || 0);
    if (classe && quantidade) lines.push(`${classe};${String(quantidade).replace(".", ",")}`);
  }
  writeFileSync(cotasPath, `${lines.join("\n")}\n`, "utf8");
  return cotasPath;
}

function corsHeaders(req) {
  const origin = req.headers.origin || "null";
  const allowOrigin = allowedOrigins.has(origin) ? origin : "null";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers": "Content-Type, X-Lamina-Publisher-Key",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  };
}

function json(req, res, status, body) {
  res.writeHead(status, {
    ...corsHeaders(req),
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(body, null, 2));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      try {
        const text = Buffer.concat(chunks).toString("utf8");
        resolve(text ? JSON.parse(text) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function hasValidKey(req) {
  return String(req.headers["x-lamina-publisher-key"] || "").trim() === localKey;
}

function runGit(args, options = {}) {
  return new Promise((resolve) => {
    const child = spawn("git", args, {
      cwd: root,
      windowsHide: true,
      env: {
        ...process.env,
        GIT_TERMINAL_PROMPT: "0",
      },
    });

    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
      options.onData?.(chunk.toString(), "stdout");
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
      options.onData?.(chunk.toString(), "stderr");
    });
    child.on("error", (error) => {
      resolve({ code: 1, stdout, stderr: stderr || error.message });
    });
    child.on("close", (code) => {
      resolve({ code, stdout, stderr });
    });
  });
}

function runProcess(command, args, options = {}) {
  return new Promise((resolve) => {
    const child = spawn(command, args, {
      cwd: root,
      windowsHide: true,
      env: process.env,
    });

    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
      options.onData?.(chunk.toString(), "stdout");
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
      options.onData?.(chunk.toString(), "stderr");
    });
    child.on("error", (error) => {
      resolve({ code: 1, stdout, stderr: stderr || error.message });
    });
    child.on("close", (code) => {
      resolve({ code, stdout, stderr });
    });
  });
}

async function gitOutput(args) {
  const result = await runGit(args);
  if (result.code !== 0) throw new Error(result.stderr || result.stdout || `git ${args.join(" ")} falhou`);
  return result.stdout.trim();
}

function parsePorcelain(text) {
  return String(text || "")
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => ({
      status: line.slice(0, 2).trim() || line.slice(0, 2),
      file: line.slice(3).trim(),
    }));
}

async function repositoryState() {
  const [branch, remote, porcelain, lastCommit] = await Promise.all([
    gitOutput(["branch", "--show-current"]).catch(() => ""),
    gitOutput(["remote", "get-url", "origin"]).catch(() => ""),
    gitOutput(["status", "--porcelain"]).catch(() => ""),
    gitOutput(["log", "--oneline", "-1"]).catch(() => ""),
  ]);
  return {
    root,
    branch,
    remote,
    lastCommit,
    changes: parsePorcelain(porcelain),
  };
}

function prepareProcess(payload) {
  const cra = String(payload.cra || "");
  const dateKey = String(payload.dateKey || "");
  if (!craIds[cra]) {
    return { ok: false, status: 400, message: "Processamento automatico V1 esta habilitado para CRA 42 e CRA 65." };
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
    return { ok: false, status: 400, message: "Data-base invalida para processamento." };
  }

  const carteira = findImportedFile(cra, "carteira", dateKey);
  const caixa = findImportedFile(cra, "caixa", dateKey);
  if (!carteira || !caixa) {
    return { ok: false, status: 400, message: `Nao encontrei carteira e caixa importados para ${cra} em ${dateKey}.` };
  }

  const script = cra === "CRA 42" ? "import-cra42-folder-day.py" : "import-cra65-folder-day.py";
  const scriptPath = path.join(root, "scripts", script);
  if (!existsSync(scriptPath)) {
    return { ok: false, status: 400, message: `Script nao encontrado: ${script}` };
  }

  ensureCotasSeed(craIds[cra]);

  return {
    ok: true,
    cra,
    craId: craIds[cra],
    dateKey,
    command: bundledPython(),
    args: [scriptPath, "--date-key", dateKey, "--carteira", carteira, "--caixa", caixa],
    script,
  };
}

function publicJob(job) {
  return {
    id: job.id,
    status: job.status,
    message: job.message,
    type: job.type || "",
    cra: job.cra || "",
    dateKey: job.dateKey || "",
    startedAt: job.startedAt,
    updatedAt: job.updatedAt,
    finishedAt: job.finishedAt || null,
    commit: job.commit || "",
  };
}

function updateJob(job, patch) {
  Object.assign(job, patch, { updatedAt: new Date().toISOString() });
  jobs.set(job.id, job);
}

async function processImportJob(job, prepared) {
  const append = (text) => {
    const clean = String(text || "").trim();
    if (clean) updateJob(job, { message: clean.slice(-800) });
  };

  try {
    updateJob(job, {
      status: "running",
      message: `Processando ${prepared.cra} em ${prepared.dateKey}...`,
    });
    const result = await runProcess(prepared.command, prepared.args, { onData: append });
    if (result.code !== 0) throw new Error(result.stderr || result.stdout || `Processamento retornou codigo ${result.code}.`);
    updateJob(job, {
      status: "completed",
      finishedAt: new Date().toISOString(),
      message: `Processamento concluido para ${prepared.cra} em ${prepared.dateKey}. Valide a lamina antes de publicar.`,
    });
  } catch (error) {
    updateJob(job, {
      status: "failed",
      finishedAt: new Date().toISOString(),
      message: error.message || String(error),
    });
  }
}

function startProcessJob(payload) {
  const prepared = prepareProcess(payload);
  if (!prepared.ok) return prepared;

  const job = {
    id: `${Date.now()}-${randomBytes(4).toString("hex")}`,
    type: "process",
    status: "queued",
    cra: prepared.cra,
    dateKey: prepared.dateKey,
    message: "Processamento aguardando inicio...",
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  jobs.set(job.id, job);
  processImportJob(job, prepared);
  return { ok: true, status: 202, job: publicJob(job) };
}

async function publishJob(job, message) {
  const append = (text) => {
    const clean = String(text || "").trim();
    if (clean) updateJob(job, { message: clean });
  };

  try {
    updateJob(job, { status: "running", message: "Conferindo alteracoes locais..." });

    await runGit(["add", "-A", "--", "."], { onData: append });
    const staged = await gitOutput(["diff", "--cached", "--name-only"]);

    if (staged) {
      updateJob(job, { message: "Criando commit da base validada..." });
      const commit = await runGit(["commit", "-m", message], { onData: append });
      if (commit.code !== 0) throw new Error(commit.stderr || commit.stdout || "Falha ao criar commit.");
      const commitHash = await gitOutput(["rev-parse", "--short", "HEAD"]);
      updateJob(job, { commit: commitHash, message: `Commit ${commitHash} criado. Enviando para o GitHub...` });
    } else {
      updateJob(job, { message: "Sem alteracoes para commit. Conferindo se existe commit local para enviar..." });
    }

    const branch = (await gitOutput(["branch", "--show-current"])) || "main";
    const push = await runGit(["push", "-u", "origin", branch], { onData: append });
    if (push.code !== 0) throw new Error(push.stderr || push.stdout || "Falha ao fazer push.");

    const commitHash = await gitOutput(["rev-parse", "--short", "HEAD"]).catch(() => job.commit || "");
    updateJob(job, {
      status: "completed",
      commit: commitHash,
      finishedAt: new Date().toISOString(),
      message: commitHash
        ? `Publicado no GitHub Pages. Ultimo commit: ${commitHash}. Aguarde alguns minutos para o Pages atualizar.`
        : "Publicado no GitHub Pages. Aguarde alguns minutos para o Pages atualizar.",
    });
  } catch (error) {
    updateJob(job, {
      status: "failed",
      finishedAt: new Date().toISOString(),
      message: error.message || String(error),
    });
  }
}

function startPublish(message) {
  const job = {
    id: `${Date.now()}-${randomBytes(4).toString("hex")}`,
    status: "queued",
    message: "Publicacao aguardando inicio...",
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  jobs.set(job.id, job);
  publishJob(job, message);
  return job;
}

const server = createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    json(req, res, 204, {});
    return;
  }

  const requestUrl = new URL(req.url, "http://127.0.0.1");

  try {
    if (req.method === "GET" && requestUrl.pathname.startsWith("/preview")) {
      servePreview(req, res, requestUrl);
      return;
    }

    if (req.method === "GET" && requestUrl.pathname === "/api/ping") {
      const state = await repositoryState().catch(() => ({}));
      json(req, res, 200, {
        ok: true,
        repository: state.remote || root,
        root,
      });
      return;
    }

    if (!hasValidKey(req)) {
      json(req, res, 401, { ok: false, message: "Chave local invalida ou ausente." });
      return;
    }

    if (req.method === "POST" && (requestUrl.pathname === "/api/status" || requestUrl.pathname === "/api/git-status")) {
      json(req, res, 200, { ok: true, ...(await repositoryState()) });
      return;
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/import") {
      const payload = await readBody(req);
      const craFolder = craFolders[payload.cra] || safeName(payload.cra);
      const kindFolder = kindFolders[payload.kind] || safeName(payload.kind);
      const dateFolder = safeName(payload.dateKey);
      if (!craFolder || !kindFolder || !/^\d{4}-\d{2}-\d{2}$/.test(dateFolder)) {
        json(req, res, 400, { ok: false, message: "CRA, tipo ou data-base invalida para importacao." });
        return;
      }
      const target = ensureDir(path.join(importRoot, craFolder, kindFolder, dateFolder));
      const saved = [];

      for (const file of payload.files || []) {
        const name = safeName(file.name);
        const dest = path.join(target, name);
        writeFileSync(dest, Buffer.from(String(file.dataBase64 || ""), "base64"));
        saved.push({ name, path: dest });
      }

      json(req, res, 200, { ok: true, files: saved });
      return;
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/remove-import") {
      const payload = await readBody(req);
      const filePath = importedFilePath(payload);
      if (!filePath) {
        json(req, res, 400, { ok: false, message: "Arquivo invalido para exclusao." });
        return;
      }
      if (existsSync(filePath)) unlinkSync(filePath);
      json(req, res, 200, { ok: true, removed: true });
      return;
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/process") {
      const result = startProcessJob(await readBody(req));
      json(req, res, result.status || 500, result);
      return;
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/publish") {
      const payload = await readBody(req);
      const message = String(payload.message || "").trim() || `Atualiza lamina ${new Date().toLocaleDateString("pt-BR")}`;
      const job = startPublish(message);
      json(req, res, 202, { ok: true, job: publicJob(job) });
      return;
    }

    if (req.method === "POST" && requestUrl.pathname === "/api/job") {
      const job = jobs.get(requestUrl.searchParams.get("id"));
      if (!job) {
        json(req, res, 404, { ok: false, message: "Job nao encontrado. O publicador pode ter sido reiniciado." });
        return;
      }
      json(req, res, 200, { ok: true, job: publicJob(job) });
      return;
    }

    json(req, res, 404, { ok: false, message: "Rota nao encontrada." });
  } catch (error) {
    json(req, res, 500, { ok: false, message: error.message || String(error) });
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Operacional local da lamina ativo em http://127.0.0.1:${port}`);
  console.log(`Repositorio: ${root}`);
  console.log("");
  console.log("Chave local do publicador:");
  console.log(localKey);
  console.log("");
  console.log("Abra a pagina operacional no site e cole essa chave para importar, processar e publicar.");
});
