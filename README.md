|![](./favicon.ico)|Esquire Frameworks™ 2.0|
|:-|:-|

Angular UI component library for the **Esquire backoffice framework** — a system for organizing
business entities in a tree: organizations, users, accounts. Covers the classic backoffice
feature set: entity management, permissions, onboarding, accounting operations.

---

## Overview

`@mir0n-pro/esquire.ui` is the shared UI layer consumed by any Esquire-based frontend application.
It provides the tree explorer, CRUD dialogs, field rendering, permission model, and command
infrastructure so that host applications only need to wire up their REST endpoints and entity kinds.

**The server defines the UI.** Field layouts, control types, validation rules, and available
commands are all delivered at runtime from server configuration — no field definitions are
hardcoded in the frontend. Add a new entity type, change a field, or adjust a validation rule
on the server and the UI adapts without a redeployment.

**Authorization is first-class.** Every command and every editable field is gated by the
logged-in user's access profile. Server configuration and user permissions are two independent
layers — both must allow an action for it to proceed.

**Extensible where it matters.** Custom command handlers, dialog subclasses, and entity pickers
plug into the same infrastructure as built-in features. Standard and custom behavior coexist in
the same toolbar and context menu without special wiring.

---

## Requirements

| Peer dependency | Version |
|---|---|
| `@angular/core` | `^20.3` |
| `@angular/material` | `^20.2` |
| `@angular/cdk` | `^20.2` |
| `@angular/forms` | `^20.3` |
| `@angular/animations` | `^20.3` |

---

## Installation

The package is published to **GitHub Packages**.

```
npm install @mir0n-pro/esquire.ui --registry https://npm.pkg.github.com
```

Authentication requires a GitHub personal access token with `read:packages` scope
in `.npmrc`:

```
@mir0n-pro:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<YOUR_TOKEN>
```

---

## Entry Points

The library exposes three secondary entry points. Import only what you need.

### `@mir0n-pro/esquire.ui/api`

Core model, interfaces, and utilities. No Angular components — safe to import from services.

| Export | Purpose |
|---|---|
| `EsqRestApi` | Interface: REST endpoints your app must implement |
| `EsqDictionaryApi` | Interface: dictionary/reference-data endpoint |
| `EsqExplorerCallApi` | Interface: explorer ↔ host communication contract |
| `EsqTreeNode` | Tree node model with Angular signals (loading, expanded, selected…) |
| `EsqTreeNodeDto` | Server-side DTO for tree nodes |
| `EsqObjectKind` | Entity kind descriptor (icon, flags: acct, org, user…) |
| `EsqObjectKindFactory` | Kind registry — `init()`, `normalize()`, `instanceOf()` |
| `EsqAccessProfile` | User permissions model with role/command guards |
| `EsqEntityDictionary` | Dictionary of field descriptors for a dialog tab |
| `EsqEntityCommandHandler` | Interface for pluggable command handlers |
| `EsqContextMenuBuilder` | Builds toolbar/context-menu item lists |
| `EsqUtils` | Shared utilities: `log`, `deepCopy`, `formatNumber`, `errorMessage`… |
| `EsqValidationError` | Validation error model |
| `ProblemDetail` | RFC 9457 error response model |
| `AsEsqTreeNodePipe` | Angular pipe: cast `any` to `EsqTreeNode` in templates |

### `@mir0n-pro/esquire.ui/components`

Standalone Angular components and directives.

| Export | Purpose |
|---|---|
| `EsqExplorerCallApiMill` | Singleton factory wiring `EsqExplorerCallApi` to the host |
| `EsqCommandHandlerRegistry` | Registers and dispatches command handlers |
| `EsqDialogResizeDirective` | Drag-resize + position/size persistence per user |
| `EsqResizeDirective` | Generic resize directive |
| `EsqTabFieldComponent` | Dictionary-driven field renderer (string, number, flag, date, select, text, image…) |
| `EsqTabStringComponent` | Multi-line text tab |
| `EsqTabListComponent` | List tab with add/remove |
| `EsqDictionary` | Dictionary data provider component |
| `EsqEntityDetailsDialog` | Base details dialog: tabs, fields, save/refresh/close |
| `EsqNodeDetailsDialog` | Details dialog pre-wired to a tree node |
| `EsqConfirmDialog` | Styled confirm/alert dialog (Ok / YesNo / OkCancel modes) |
| `EsqSingleEntryDialog` | Single JSON-entry input dialog |

Shared assets distributed with this entry point (reference from `styleUrls`):

- `@mir0n-pro/esquire.ui/components/EsqDetailsDialog.scss` — base dialog grid styles
- `@mir0n-pro/esquire.ui/components/loading.16.gif` — loading spinner

### `@mir0n-pro/esquire.ui/explorer/flatTree`

The tree explorer component and its datasources/selector.

| Export | Purpose |
|---|---|
| `EsqExplorerComponent` | Main tree explorer: toolbar, context menu, keyboard navigation |
| `EsqFlatTreeDatasource` | Flat-tree datasource — lazy loads children on expand |
| `EsqFlatTreeSelector` | Selection state and filtering for the tree |
| `EsqFlatTreeSelectorFactory` | Creates a selector filtered to a set of entity kinds |
| `EsqSelectEntityDialog` | Tree-picker dialog (base class; extend for domain filtering) |

Shared assets (reference from `templateUrl` / `styleUrls` in host app components):

- `@mir0n-pro/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog.html`
- `@mir0n-pro/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog.scss`

> **Angular constraint**: `templateUrl` must point to a local file. Copy
> `EsqSelectEntityDialog.html` into your project when extending `EsqSelectEntityDialog`.

---

## Documentation

Detailed specifications are in `doc/`:

| File | Topic |
|---|---|
| `esquire.ui-details.md` | **Full component & API reference** — architecture, contracts, extension patterns |
| `fieldType.md` | All field types and their descriptor options |
| `permissions.md` | Permission model, roles, `isCommandAllowed` |
| `validations.md` | Field validation rules |
| `kind.context.md` | Entity kind system and normalization |
| `custom-dialog-design.md` | How to extend `EsqEntityDetailsDialog` |
| `yalc-vs-git.md` | Local vs registry library workflow |
| `release_notes.txt` | Version history |

---

## Development

### Build

```
npm run build
```

Output goes to `dist/esquire.ui`.

### Tests

```
npm test
```

Runs Karma + Jasmine unit tests (`--watch=false`). For live mode: `npm run test:watch`.

### Local consumption with yalc

When developing library and consumer app simultaneously:

```
# in esquire.ui.lib — after each build:
npm run yalc:publish     # first publish
npm run yalc:push        # subsequent pushes

# in consumer app (explorer/frontend):
run-yalc.bat             # switches to yalc-linked version and starts dev server
```

### Switch back to registry version

```
# in consumer app:
run-git.bat              # removes yalc link, installs from GitHub Packages, starts dev server
```

---

## Publishing

```
npm run build
cd dist/esquire.ui
npm publish
```

Requires a GitHub token with `write:packages` in the local `.npmrc`.

---

## License

Copyright © 2001, 2025 mir0n&co — [www.mir0n.me](https://www.mir0n.me)
