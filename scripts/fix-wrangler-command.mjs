import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const binDir = path.join(rootDir, "node_modules", ".bin");
const wranglerBin = path.join(binDir, "wrangler");
const realWranglerJs = path.join(rootDir, "node_modules", "wrangler", "bin", "wrangler.js");
const realWranglerBinary = path.join(rootDir, "node_modules", "wrangler", "bin", "wrangler");

if (
  !fs.existsSync(wranglerBin) ||
  (!fs.existsSync(realWranglerJs) && !fs.existsSync(realWranglerBinary))
) {
  process.exit(0);
}

const marker = `// agimmo-ma-pages-deploy-shim`;
const existing = fs.readFileSync(wranglerBin, "utf8");
if (existing.includes(marker)) {
  process.exit(0);
}

if (fs.lstatSync(wranglerBin).isSymbolicLink()) {
  fs.unlinkSync(wranglerBin);
}

const shim = `#!/usr/bin/env node
${marker}
const { spawnSync } = require("node:child_process");
const path = require("node:path");

const args = process.argv.slice(2);
const realCli = path.resolve(__dirname, "..", "wrangler", "wrangler-dist", "cli.js");

if (args[0] === "deploy" && args.length === 1) {
  const result = spawnSync(
    process.execPath,
    [realCli, "pages", "deploy", "dist", "--project-name", "agimmo-ma"],
    { stdio: "inherit" },
  );
  process.exit(result.status ?? 0);
}

const result = spawnSync(process.execPath, [realCli, ...args], { stdio: "inherit" });
process.exit(result.status ?? 0);
`;

fs.writeFileSync(wranglerBin, `${shim}\n`, { mode: 0o755 });
fs.chmodSync(wranglerBin, 0o755);
