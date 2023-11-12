# "Hello world!" GitHub Action using Bun

🦕 Demo action using Bun

<table align=center><td>

```ts
import * as core from "@actions/core";
console.log(`Hello ${core.getInput("name")}!`);
core.setOutput("time", new Date().toLocaleTimeString());
```

</table>

🟦 Uses TypeScript \
😍 No compile step! \
🧅 Runs on the [Bun runtime] \
👩‍⚖️ [0BSD licensed] template

## Usage

![Bun](https://img.shields.io/static/v1?style=for-the-badge&message=Bun&color=000000&logo=Bun&logoColor=FFFFFF&label=)
![GitHub Actions](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub+Actions&color=2088FF&logo=GitHub+Actions&logoColor=FFFFFF&label=)

<img align=right src="https://i.imgur.com/geBHkPj.png">

This is a **template repository** that is meant to be used as a base or example
for your own project. To get started, just click the <kbd>Use this
template</kbd> button in the top right of this repository page.

After instantiating this template repository, you will need to manually do the
following:

1. Write your code in the `main.ts` file. You can use npm packages without
   installing them, `node:` builtins, and `Bun.*` APIs.
2. Make sure you edit the `.github/workflows/test-action.yml` test workflow if
   you want to test any additional inputs or scenarios.
3. Replace the `LICENSE` file with your preferred software license. Check out
   [choosealicense.com] if you're unsure of which one to pick.
4. Replace this `README.md` file with a fancy readme to suit your new GitHub
   Action. Make sure you document all your inputs & outputs!
5. Create a new GitHub release and publish your new GitHub Action to the [GitHub
   Actions Marketplace]! 🚀

You'll notice that the example code takes advantage of [Auto-install] to use npm
packages without specifying them in `package.json`. You can specify a version of
a package to use by adding each package you use to your `package.json` or
`bun.lockb`.

<details><summary>You can also use <code>bun build</code> to prebundle everything if you prefer</summary>

```yml
# action.yml
runs:
  using: bun1
  main: out/main.ts
```

```jsonc
// package.json
{
  "scripts": {
    "build": "bun build src/main.ts --outdir=out --target=bun"
  }
}
```

```yml
# .github/workflows/publish-action.yml (partial)
- uses: actions/checkout@v4
- uses: oven-sh/setup-bun@v1
- run: bun install
- run: bun run build
- run: rm -rf node_modules
- uses: jcbhmr/configure-bun-action@v1
- uses: actions4git/add-commit-push@v1
  with:
    add-force: true
- uses: actions/publish-action@v0.2.2
  with:
    source-tag: ${{ github.event.release.tag_name }}
```

</details>

<!-- prettier-ignore-start -->
[bun runtime]: https://bun.sh/
[choosealicense.com]: https://choosealicense.com/
[github actions marketplace]: https://github.com/marketplace?type=actions
[0bsd licensed]: https://github.com/jcbhmr/hello-world-deno-action/blob/main/LICENSE
<!-- prettier-ignore-end -->
