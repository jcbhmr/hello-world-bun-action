import { spawn } from "node:child_process";
import { once } from "node:events";
import { join, dirname } from "node:path";
import { existsSync } from "node:fs";
const file = join(dirname(process.argv[1]), "main.ts"); // 👈 CHANGE ME!
// https://github.com/oven-sh/bun/issues/6964
const response = await fetch(
  "https://raw.githubusercontent.com/jcbhmr/bun-versions/main/versions.json"
);
const json = await response.json();
const tag = json.bun.find((x) => x.startsWith("bun-v1."));
const version = tag.slice(5);
const BUN_INSTALL = join(
  process.env.RUNNER_TOOL_CACHE,
  "bun",
  version,
  process.arch
);
if (!existsSync(BUN_INSTALL)) {
  const subprocess1 = spawn(
    `curl -fsSL https://bun.sh/install | bash -s "$tag"`,
    { shell: "bash", env: { ...process.env, BUN_INSTALL, tag } }
  );
  await once(subprocess1, "exit");
}
const subprocess2 = spawn(join(BUN_INSTALL, "bin", "bun"), [file], {
  stdio: "inherit",
});
await once(subprocess2, "spawn");
subprocess2.on("exit", (x) => process.exit(x));
