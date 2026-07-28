import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomBytes } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const port = Number(process.env.LAMINA_PUBLISHER_PORT || 8790);
const keyPath = path.join(root, ".lamina-publisher-key");
const jobs = new Map();

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

function publicJob(job) {
  return {
    id: job.id,
    status: job.status,
    message: job.message,
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

    if (req.method === "POST" && requestUrl.pathname === "/api/status") {
      json(req, res, 200, { ok: true, ...(await repositoryState()) });
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
  console.log(`Publicador GitHub Pages ativo em http://127.0.0.1:${port}`);
  console.log(`Repositorio: ${root}`);
  console.log("");
  console.log("Chave local do publicador:");
  console.log(localKey);
  console.log("");
  console.log("Abra a pagina operacional no site e cole essa chave para publicar.");
});
