import { spawn } from "node:child_process";
import { once } from "node:events";
import { join, dirname } from "node:path";
// TODO: Get max 30+
const response = await fetch("https://ungh.cc/repos/oven-sh/bun/releases");
const json = await response.json();
const version = json.releases
  .map((x) => x.tag)
  .find((x) => x.startsWith("bun-v1."))
  .match(/v(1\.\d+\.\d+)/)[1];
const file = join(dirname(process.argv[1]), "main.ts"); // 👈 CHANGE ME!
const subprocess = spawn(
  `export -n version arch file
  cache="$RUNNER_TOOL_CACHE/bun/$versin/$arch"
  if [[ ! -d $cache ]]; then
    curl -fsSL https://bun.sh/install \\
      | BUN_INSTALL="$cache" bash -s "bun-v$version" &> /dev/null
  fi
  exec "$cache/bin/bun" "$file"`,
  {
    shell: "bash",
    stdio: "inherit",
    env: { ...process.env, version, arch: process.arch, file },
  }
);
await once(subprocess, "spawn");
subprocess.on("exit", (x) => process.exit(x));
