const fs = require("node:fs");
const path = require("node:path");

const cacheDir = path.join(process.cwd(), ".open-next", "cache");
const targetDir = path.join(process.cwd(), ".open-next", "assets", "cdn-cgi", "_next_cache");

if (fs.existsSync(cacheDir)) {
  fs.mkdirSync(path.dirname(targetDir), { recursive: true });
  fs.cpSync(cacheDir, targetDir, { recursive: true });
  console.log("✓ Successfully populated static assets incremental cache for Cloudflare (cdn-cgi/_next_cache)");
} else {
  console.log("ℹ No .open-next/cache directory found to copy.");
}
