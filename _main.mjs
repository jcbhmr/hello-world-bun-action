import { spawn } from "node:child_process";
import { once } from "node:events";
import { join, dirname } from "node:path";
// TODO: Make it lock to Bun v1 when Bun v2 is released
const response = await fetch("https://github.com/oven-sh/bun/releases/latest");
const version = response.url.match(/v(1\.\d+\.\d+)/)[1];
const file = join(dirname(process.argv[1]), "main.ts"); // 👈 CHANGE ME!
const subprocess = spawn(
  `export -n 1 2 3
  cache="$RUNNER_TOOL_CACHE/bun/$1/$2"
  if [[ ! -d $cache ]]; then
    curl -fsSL https://bun.sh/install \\
      | BUN_INSTALL="$cache" bash -s "bun-v$1" # &> /dev/null
  fi
  ls "$cache"
  exec "$cache/bin/bun" "$3"`,
  {
    shell: "bash",
    stdio: "inherit",
    env: { ...process.env, ...[version, process.arch, file] },
  }
);
await once(subprocess, "spawn");
subprocess.on("exit", (x) => process.exit(x));
