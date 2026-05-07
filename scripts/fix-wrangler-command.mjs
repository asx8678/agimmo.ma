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

const marker = `// agimmo-ma-pages-deploy-shim-v2`;
const existing = fs.readFileSync(wranglerBin, "utf8");
// Marker is versioned; if the file already contains the current marker the shim is
// up-to-date, so skip. Changing the marker (e.g. v2 → v3) forces a rewrite on
// next install.
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

// Bare "wrangler deploy" is a no-op: Cloudflare Pages Git integration handles
// deployment automatically after build.  Exit successfully so misconfigured
// CI platforms that run "npx wrangler deploy" don't fail with auth error 10000.
if (args[0] === "deploy" && args.length === 1) {
  console.log(
    "⚠  wrangler deploy is a no-op for this project. " +
    "Cloudflare Pages deploys automatically via Git integration after build. " +
    "No CLOUDFLARE_API_TOKEN is required. " +
    "If you need a manual deploy, use: npx wrangler pages deploy dist --project-name=agimmo-ma"
  );
  process.exit(0);
}

// All other Wrangler commands (pages deploy, dev, etc.) proxy to the real CLI.
const result = spawnSync(process.execPath, [realCli, ...args], { stdio: "inherit" });
process.exit(result.status ?? 0);
`;

fs.writeFileSync(wranglerBin, `${shim}\n`, { mode: 0o755 });
fs.chmodSync(wranglerBin, 0o755);
