# Custom Dialog Design — Extending Library Dialogs

This document records the design decisions made when creating `EsqSelectAcctDialog` and
`EsqAcctDialog` in `explorer/frontend`. Both extend library dialogs from
`@mir0n-pro/esquire.ui`. The patterns here apply to any future custom dialog that subclasses
a library dialog.

---

## The problem

Angular's `@Component` decorator is **not inherited**. A subclass that is itself a `@Component`
must declare its own `templateUrl` and `styleUrls` — the parent's declarations are silently
ignored. This is by Angular's design: components are self-contained compilation units.

This creates two challenges when extending a library dialog:

1. **Styles** — the base dialog's SCSS (e.g. `EsqDetailsDialog.scss`) lives in the package,
   not in the app's source tree.
2. **Template** — if the subclass reuses the parent's template unchanged, it must somehow
   reference a file inside the package.

---

## Styles — chosen approach: `@use` via `includePaths`

### Approaches considered

| Approach | Result |
|---|---|
| `styleUrls: ['@mir0n-pro/esquire.ui/components/EsqDetailsDialog.scss']` | **NG2008** — Angular compiler does not resolve bare package paths in `styleUrls` |
| Copy the SCSS into the app's component folder | Works, but the copy drifts from the library silently |
| `stylePreprocessorOptions.includePaths` + `@use` | **Chosen** — no copy; resolves from `node_modules` at build time |

### How it works

`angular.json` build options:
```json
"stylePreprocessorOptions": {
  "includePaths": ["node_modules"]
}
```

Each app component that needs the base dialog styles has a local `.scss` file that imports them:

```scss
/* EsqAcctDialog.scss */
@use '@mir0n-pro/esquire.ui/components/EsqDetailsDialog';

esq-acct-dialog {
  /* local overrides */
}
```

```scss
/* EsqSelectAcctDialog.scss — no local rules, just the two library stylesheets */
@use '@mir0n-pro/esquire.ui/components/EsqDetailsDialog';
@use '@mir0n-pro/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog';
```

The component then declares only its own SCSS file in `styleUrls`:

```typescript
styleUrls: ['./EsqAcctDialog.scss'],  // EsqDetailsDialog styles come in via @use
```

**Update workflow:** Run `npm run yalc:push` (or `npm update`) — the library rebuild updates
`node_modules`; `@use` picks up the new styles automatically on the next `ng build`.

### Note on `loading.16.gif`

`EsqDetailsDialog.scss` references `url('loading.16.gif')`. Because this is processed from its
location inside `node_modules/@mir0n-pro/esquire.ui/components/`, the relative URL resolves
correctly to the gif file distributed alongside the SCSS in the package — no local copy needed.
The gif is declared in the library's `ng-package.json` assets for exactly this reason.

---

## Template — chosen approach: copy from the package

### Approaches considered

| Approach | Result |
|---|---|
| `templateUrl: '@mir0n-pro/esquire.ui/.../Dialog.html'` | **NG2008** — Angular compiler does not resolve bare package paths in `templateUrl` |
| Export template as a TypeScript string constant from the library | No IDE template type-checking; not idiomatic Angular |
| Copy the HTML file into the app's component folder | **Chosen** — standard Angular practice; IDE support intact |

### Why the copy is acceptable

Angular does not support template inheritance, and no standard tooling exists to reference a
package HTML file in `templateUrl`. The copied file is the community-accepted solution for
`@Component`-level subclassing. The risk (drift from the parent) is managed by the workflow
below.

---

## How to obtain a library template

Templates of extensible dialogs are declared as **`assets`** in the library's `ng-package.json`.
This makes them part of the published package — no source repository access required.

After installing the package (via yalc or npm), find any distributable template at its known
package path:

```
node_modules/@mir0n-pro/esquire.ui/<entry-point>/<Dialog>.html
```

### Currently distributed templates

| Template file in package | Extends |
|---|---|
| `explorer/flatTree/components/EsqSelectEntityDialog.html` | `EsqSelectEntityDialog` |

**Contract:** if a dialog template appears in `ng-package.json` assets, it is **public API**
and safe to subclass. Templates not listed there are implementation details and may change
without notice.

### Copy command

```bash
cp node_modules/@mir0n-pro/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog.html \
   src/your-feature/YourCustomDialog.html
```

---

## Full recipe — creating a new custom dialog

1. **Extend the library class** in TypeScript:
   ```typescript
   export class YourDialog extends EsqSelectEntityDialog { ... }
   ```

2. **Copy the template** (see above). Keep it in your component folder. Adapt as needed.

3. **Create a local SCSS** that `@use`s the library base styles:
   ```scss
   @use '@mir0n-pro/esquire.ui/components/EsqDetailsDialog';
   /* local rules here */
   ```

4. **Declare both in `@Component`:**
   ```typescript
   @Component({
     templateUrl: './YourCustomDialog.html',   // your local copy
     styleUrls:   ['./YourCustomDialog.scss'],  // your scss with @use
     ...
   })
   ```

---

## Update workflow

| Asset type | How to update |
|---|---|
| **Styles** | Automatic — `npm run yalc:push` (or `npm update`) + `ng build` |
| **Template** | Manual — diff your copy against the updated file in `node_modules/` |

```bash
diff node_modules/@mir0n-pro/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog.html \
     src/your-feature/YourCustomDialog.html
```

Review the diff and apply relevant upstream changes to your copy.

---

## Real example in this project

| App file | Extends | Template | Styles |
|---|---|---|---|
| `EsqAcctDialog.ts` | `EsqExplorerHostDummy` | own (`EsqAcctDialog.html`) | `EsqAcctDialog.scss` (with `@use EsqDetailsDialog`) |
| `EsqTransferDialog.ts` | `EsqAcctDialog` | own (`EsqTransferDialog.html`) | `EsqAcctDialog.scss` |
| `EsqSelectAcctDialog.ts` | `EsqSelectEntityDialog` | copied (`EsqSelectEntityDialog.html`) | `EsqSelectAcctDialog.scss` (with `@use` of both library sheets) |
