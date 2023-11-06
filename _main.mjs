import { spawn } from "node:child_process";
import { once } from "node:events";
import { join, dirname } from "node:path";
// TODO: Handle Bun v2
const response = await fetch("https://github.com/oven-sh/bun/releases/latest");
const version = response.url.match(/v(1\.\d+\.\d+)/)[1];
const file = join(dirname(process.argv[1]), "main.ts"); // 👈 CHANGE ME!
const subprocess = spawn(
  `cache="$RUNNER_TOOL_CACHE/bun/$1/$2"
  if [[ ! -d $cache ]]; then
    curl -fsSL https://bun.sh/install \\
      | BUN_INSTALL="$cache" sh -s "bun-v$1" &> /dev/null
  fi
  exec "$cache/bin/bun" "$3"`,
  [version, process.arch, file],
  { shell: "bash", stdio: "inherit" }
);
await once(subprocess, "spawn");
subprocess.on("exit", (x) => process.exit(x));
