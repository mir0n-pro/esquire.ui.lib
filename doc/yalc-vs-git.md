# Using @mir0n-pro/esquire.ui: Local vs GitHub Packages

This project consumes the `@mir0n-pro/esquire.ui` library.  
Two modes are supported and can be switched at any time.

---

## Mode 1 — Local (yalc)

Use this when you are actively developing or debugging the library itself alongside this app.

### Why yalc instead of `npm link`?
`npm link` creates a symlink that confuses Angular's build (multiple Angular instances, change detection issues). `yalc` copies the built package into a local `.yalc/` folder and wires it up like a real npm install — no symlink problems.

### One-time setup
```bash
# Install yalc globally (once per machine)
npm install -g yalc
```

### Daily workflow

**Step 1 — Build & publish the library** (in `esquire.ui.lib`):
```bash
cd C:\MyProjects\esquire\esquire.ui.lib
npm run yalc:publish
```

**Step 2 — Link into this app** (in `frontend/`):
```bash
npm run lib:local
# equivalent to: yalc add @mir0n-pro/esquire.ui
```

**After each library change — push the update** (in `esquire.ui.lib`):
```bash
npm run yalc:push
# builds and pushes; yalc push automatically updates all linked projects
```
No need to re-run `lib:local` after a push — the update lands automatically.

### What gets created
| Path | Purpose | Commit? |
|---|---|---|
| `frontend/.yalc/` | Local copy of the built package | **No** — in `.gitignore` |
| `frontend/yalc.lock` | Records which yalc packages are linked | **Yes** |
| `package.json` entry | `"file:.yalc/@mir0n-pro/esquire.ui"` | **Yes** (via yalc.lock) |

---

## Mode 2 — GitHub Packages (registry)

Use this when a tagged version has been published to `https://npm.pkg.github.com`.

### Prerequisites
You need a GitHub Personal Access Token (PAT) with **`read:packages`** scope.

Add it to your global `~/.npmrc` (once per machine — never commit this):
```
//npm.pkg.github.com/:_authToken=<YOUR_GITHUB_TOKEN>
```

The project's `.npmrc` already configures the registry scope:
```
@mir0n-pro:registry=https://npm.pkg.github.com/
```

### Setup
```bash
npm run lib:git
# equivalent to: yalc remove --all && npm install @mir0n-pro/esquire.ui
```

### Updating to a newer published version
```bash
npm update @mir0n-pro/esquire.ui
```

---

## Switching between modes

| From → To | Command |
|---|---|
| any → local | `npm run lib:local` |
| any → registry | `npm run lib:git` |

After switching, run `npm run build` to confirm the app compiles cleanly.

---

## Summary comparison

| | Local (yalc) | Registry (npm) |
|---|---|---|
| `package.json` entry | `"file:.yalc/@mir0n-pro/esquire.ui"` | `"^1.0.2"` |
| Auth required | No | Yes (GitHub PAT) |
| Update workflow | `npm run build` + `yalc push` | `npm update` |
| Reflects local edits instantly | Yes (after rebuild + push) | No |
| `yalc.lock` present | Yes | No |
