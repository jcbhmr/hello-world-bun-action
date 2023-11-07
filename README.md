# "Hello world!" GitHub Action using Bun

🦕 Demo action using Bun \
💡 Inspired by [actions/hello-world-javascript-action]

<table align=center><td>

```ts
import * as core from "@actions/core";
import * as github from "@actions/github";
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
template</kbd> button in the top left of this repository page and edit the
`main.ts` file to customize your new Bun-based GitHub Action. There's no
`node_modules/`, no `dist/`, and no compile step. How's that for ease-of-use! 😉

After instantiating this template repository, you will need to manually do the
following:

1. Write your code in the `main.ts` file. You can use npm packages without
   installing them, `node:` builtins, and even `Bun.*` APIs.
2. Make sure you edit the `.github/workflows/test-action.yml` test workflow if
   you want to test any additional inputs or scenarios.
3. Replace the `LICENSE` file with your preferred software license. Check out
   [choosealicense.com] if you're unsure of which one to pick.
4. Replace this `README.md` file with a fancy readme to suit your new GitHub
   Action. Make sure you document all your inputs & outputs!
5. Create a new Release (with **no build step**) on GitHub Releases and publish
   your new GitHub Action to the [GitHub Actions Marketplace]! 🚀

You'll notice that the example code takes advantage of [Auto-install] to use npm
packages without specifying them in `package.json`. You can specify a version of
a package to use by adding each package you use to your `package.json` or
`bun.lockb`.

<!-- prettier-ignore-start -->
[bun runtime]: https://bun.sh/
[choosealicense.com]: https://choosealicense.com/
[github actions marketplace]: https://github.com/marketplace?type=actions
[actions/hello-world-javascript-action]: https://github.com/actions/hello-world-javascript-action
[0bsd licensed]: https://github.com/jcbhmr/hello-world-deno-action/blob/main/LICENSE
<!-- prettier-ignore-end -->
