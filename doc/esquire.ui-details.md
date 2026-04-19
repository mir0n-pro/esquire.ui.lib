# `@mir0n-pro/esquire.ui` — Component & API Reference

Detailed description of the library internals, collaboration contracts, and extension points.
For installation and entry-point overview see [README.md](../README.md).

---

## Design philosophy

The core principle of the Esquire UI framework is that **the server defines the UI, not the
client**. The frontend contains no hardcoded field definitions, validation rules, or permission
logic specific to any entity type. Instead, all of this is delivered at runtime from the server
in two configuration payloads — the **kind registry** and the **field dictionary** — and the
library renders whatever the server describes.

**What the server controls:**

- **Which entities exist and how they relate** — the kind registry defines entity categories,
  their hierarchy (allowed child kinds), icons, and display names.
- **Which operations are available** — the `commands[]` list on each kind determines what
  appears in the toolbar and context menu. No command hardcoded in the UI can be executed
  unless the server includes it in the kind's command list.
- **What fields a dialog shows** — the field dictionary for each kind defines every tab,
  every field, its control type (text, number, dropdown, date, flag…), label, tooltip,
  and whether it is hidden / read-only / editable.
- **Validation rules** — required, regex pattern, min/max range, and custom constraints
  are all declared in the dictionary, not in Angular component code.
- **Read/write state per field** — the `readwrite` bitmap in each field descriptor controls
  visibility and editability independently of the component rendering it.

**What user authorization controls:**

On top of the server-side field configuration, every command and field edit is also gated by
the logged-in user's **access profile**. The profile carries per-entity-kind permission flags
that determine which CRUD operations the current user may perform. A field may be dictionary-
declared as editable, yet remain read-only because the user lacks the permission flag for that
entity kind. Both layers — server configuration and user authorization — must allow an action
for it to proceed.

This design means that adding a new entity type, changing its field layout, adjusting
validation rules, or granting/revoking permissions requires only a server-side change — the
frontend adapts automatically without a redeployment.

**Extensibility alongside server control:**

Server-driven configuration handles the common case, but the library is explicitly designed
to be extended where standard behavior is not enough:

- **Custom command handlers** — implement `EsqEntityCommandHandler` and register it with the
  command bus. The handler receives the full service context and can open any dialog, call any
  REST endpoint, or perform multi-step operations (e.g. accounting: deposit, withdrawal, transfer).
- **Custom dialogs** — extend `EsqEntityDetailsDialog` and override protected hooks
  (`onDictionaryLoaded`, `validateExtra`, `focusOnInit`, `extraConfirmLines`) to add
  domain-specific behavior on top of the standard dictionary-driven rendering.
- **Custom entity pickers** — extend `EsqSelectEntityDialog` with a filtered tree to let
  users pick entities of specific kinds within a dialog workflow.
- **Custom field routing** — the host app controls `EsqRestApi` routing, so it can direct
  specific entity kinds to dedicated endpoints while the library remains endpoint-agnostic.

The extension points follow the same pattern: the library provides the scaffold, the host app
fills in the domain specifics. Standard and custom commands coexist in the same toolbar and
context menu without any special configuration.

---

## Architecture overview

The library is split into three layers that form a dependency chain:

```
Host application
      │
      ▼
EsqExplorerComponent  ──────────────────────────────────────────── explorer/flatTree
      │  fires commands via EsqExplorerCallApi
      ▼
EsqExplorerCallApiMill  ──  EsqCommandHandlerRegistry  ─────────── components
      │  dispatches to handlers; opens dialogs
      ▼
EsqEntityDetailsDialog / EsqConfirmDialog / custom dialogs  ──────── components
      │  talks to server via
      ▼
EsqRestApi  (implemented by host application)  ────────────────────── api
```

The **api** entry point defines pure interfaces and model classes with no Angular dependencies.
The **components** entry point provides the command dispatch engine and dialog base classes.
The **explorer/flatTree** entry point provides the visual tree and its datasource.
The **host application** wires the three layers by implementing `EsqRestApi` and creating an
`EsqExplorerCallApiMill`.

---

## Server-driven configuration: kinds and dictionaries

The library has no hardcoded field layouts or entity categories. All rendering decisions are
driven by two data sets loaded from the server at runtime.

### Kind registry — loaded once at startup

`EsqObjectKindFactory.init(restApi, localOverrides)` calls `esquireKinds()` and populates
the global kind registry. Every subsequent `instanceOf(kind)` call resolves against this
registry.

The server response defines **what entity categories exist** and **what the explorer can do
with them**:

- `commands[]` — which toolbar/context-menu items appear for a node of this kind
- `childKinds[]` — which kinds may be created as children (drives the New submenu)
- `org` / `usr` / `acct` flags — category routing (affects permission checks and REST endpoint selection)
- `icon` — image shown in the tree and dialog headers
- `title` / `plural` — display names

The host app may pass `localOverrides` to `init()` to set icons or `listHeaders` for kinds
that the server does not fully describe, or to register kinds that exist only client-side
(e.g. accounting operation kinds 1000/1002/1004).

### Dictionary — loaded per dialog

When a dialog opens, `EsqDictionaryApi.dictionary(kind)` calls `esquireDictionary(kind)` and
returns an array of `EsqEntityLayer` objects. Each layer maps to one **tab** in the dialog.

```
EsqEntityDictionary
  └── EsqEntityLayer[]          ← tabs
        └── EsqEntityField[]    ← fields within each tab
```

**`EsqEntityField` drives every aspect of a field row:**

| Field | Effect |
|---|---|
| `type` | Which input control renders (`string`, `number`, `flag`, `date`, `select`, `text`, `image`, `tablist`) |
| `label` | The label shown left of the input |
| `tooltip` | Tooltip on hover |
| `readwrite` | Bitmap: `0` hidden, `1` view-only, `3` editable |
| `personal` | `'Y'` — editable only when the entity is the logged-in user |
| `nullable` / `nullmeaning` | Whether null is allowed; placeholder text shown when value is null |
| `listvalues` | Dropdown options for `select` type |
| `validation` | Regex pattern for `string` fields |
| `minmax` | `"min,max"` string for `number` fields |
| `format` | Display format hint |
| `affects3` | `'Y'` — saving this field triggers a tree node refresh (name/icon may change) |
| `default` | Pre-filled value when creating a new entity |
| `layer` | Sub-entity kind id — field belongs to a sub-entity dictionary, not the primary entity |

**`EsqDictionaryApi.dictionaryFromCache(kind)`** returns layers synchronously if already
loaded — used by dialogs that need to inspect field metadata before the async load completes
(e.g. `EsqTransferDialog.onDictionaryLoaded()` finding the `id2` field label).

**Proactive loading** — `EsqEntityDetailsDialog` loads the dictionary for the current entity
kind on `ngOnInit`, before the user requests it, so the first tab renders without a visible
loading delay.

---

## api entry point

### `EsqRestApi`

Interface the host application must implement and pass into the library. Maps 1:1 to server
REST endpoints.

| Method | Endpoint | Purpose |
|---|---|---|
| `esquire(id?, skip?, take?)` | `GET /esq` | Load tree children for a node |
| `esquirePath(id)` | `GET /esq-path` | Load the path from root to a node (for nav restoration) |
| `esquireCmd(kind, id, cmd?)` | `GET /esq-cmd` | Load entity details |
| `esquireEntityNode(kind, id?, name?)` | `GET /esq-enode` | Load a single tree node by entity id |
| `esquireDictionary(kind)` | `GET /esq-dict` | Load field dictionary for a dialog |
| `esquireKey(id?)` | `GET /esq-key` | Load access profile |
| `esquireKinds()` | `GET /esq-kinds` | Load entity kind registry from server |
| `esquireCmdSave(kind, id, body)` | `POST /esq-cmd-save` | Save entity fields |
| `esquireKeySave(id, body)` | `POST /esq-key-save` | Save access profile fields |
| `esquireCmdNew(kind, parentId, body)` | `POST /esq-new` | Create entity under parent |
| `esquireCmdDel(kind, id)` | `POST /esq-del` | Delete entity |
| `esquireCmdMove(kind, id, distId)` | `POST /esq-move` | Move entity to new parent |

> The host routes acct-kind entities to separate endpoints when needed
> (e.g. `/esq-anew`, `/esq-adel`) — the library itself is endpoint-agnostic.

---

### `EsqObjectKind` and `EsqObjectKindFactory`

Every entity in the tree has a numeric **kind** that drives all rendering and permission logic.

**`EsqObjectKind` fields:**

| Field | Type | Meaning |
|---|---|---|
| `id` | `number` | Kind id. Even ids = primary; odd = link-variant (same entity, different tree position) |
| `name` | `string` | Machine name |
| `title` / `plural` | `string` | Display name (singular / plural) |
| `org` / `usr` / `acct` | `boolean` | Category flags |
| `icon` | `string` | Path to icon image |
| `detailed` | `boolean` | Whether this kind has a details dialog |
| `childKinds` | `number[]` | Kinds that may be created as children (drives New submenu) |
| `commands` | `string[]` | Commands the server allows for this kind |

**`EsqObjectKindFactory` — static registry:**

- `init(api, localKinds)` — called once at app startup. Loads kinds from `esquireKinds()`,
  then merges locally-defined overrides (icons, listHeaders). Call before rendering the tree.
- `instanceOf(kind)` — returns the `EsqObjectKind` for a numeric id.
- `normalize(kind)` — rounds down to even: `Math.floor(kind / 2) * 2`. Use this before any
  REST call; link-variant (odd) kinds must be normalized to their primary before hitting the server.
- `getAllowedChildTypes(node)` — returns the list of creatable child kinds for a tree node.

**Built-in virtual kinds** (never returned by the server):

| Constant | id | Purpose |
|---|---|---|
| `UNKNOWN` | -1 | Fallback when kind is not in registry |
| `MORE` | 999 | "Load more" sentinel node |
| `ACCESSPROFILE` | 998 | Access profile virtual node |
| `PERSON_PRIMARY` | 992 | Person details sub-entity tab |
| `ADDRESS_POSTAL` | 988 | Postal address sub-entity tab |

---

### `EsqAccessProfile` and permissions

Loaded once at logon via `esquireKey()`. Wraps the user's identity, roles, and per-kind
permission flags.

```typescript
class EsqAccessProfile {
  id, kind, name, loginId, email: string
  roles:  EsqRole[]        // assigned roles
  admin:  EsqPermission[]  // per-kind admin permission flags
  tools:  EsqPermission[]  // tool-level permission flags

  isCommandAllowed(cmd, entity_id, kind): boolean
}
```

**`isCommandAllowed` logic:**

1. If `entity_id === profile.id` → always `true` (personal mode: users can always edit themselves).
2. Find `EsqPermission` in `admin[]` whose `kind` matches `normalize(kind)`.
3. Look up the flag array index for the command via `flagIndexes` table:

| Command | Flag index |
|---|---|
| `new` | 0 |
| `details` / `move` | 1 |
| `delete` | 2 |
| `key` | 3 |

4. Return `perm.flags[index] === 'Y'`.

**Custom flag indexes** — host apps can register additional commands:
```typescript
EsqAccessProfile.addFlagIndex('transfer', 4);
```

**Debug bypass** — `EsqUtils.DEBUG_SKIP_PERMISSION = true` makes `isCommandAllowed` always
return `true`. For development only.

---

### `EsqTreeNode`

Reactive model for one node in the tree. Uses Angular `signal()` for all mutable state so
templates update automatically.

| Signal | Type | Meaning |
|---|---|---|
| `loading()` | `boolean` | Children are being loaded |
| `expanded()` | `boolean` | Node is expanded in the tree |
| `selected()` | `boolean` | Node is selected |
| `hasMore()` | `boolean` | More children available (pagination) |
| `hasChild()` | `boolean` | Node has at least one child |

Non-signal fields: `id`, `entityId`, `name`, `kind` (`EsqObjectKind`), `level`, `parent`.

---

### `EsqExplorerCallApi` and `EsqExplorerHost`

**`EsqExplorerCallApi`** — the command bus between the tree (UI events) and the business logic
(dialogs, REST calls). Implemented by `EsqExplorerCallApiMill`.

```typescript
interface EsqExplorerCallApi {
  call(cmd, subCmd, node, accessProfile, selectMode?)       // command from tree node
  calle(cmd, subCmd, entityId, entityName, entityKind, ...) // command from entity id
  create(parentNode, typeId?)                               // open create dialog
  registerHandler(handler)                                  // register custom handler
  registerHost(host) / unregisterHost(host)                 // host registration
  confirmDlg(kind, header, text, flag, focus?)              // open confirm/alert dialog
}
```

**Command constants** (use `EsqExplorerCallApi.CMD_*`):

| Constant | Value | Action |
|---|---|---|
| `CMD_DEFAULT` | `"details"` | Open details dialog |
| `CMD_NEW` | `"new"` | Create entity |
| `CMD_MOVE` | `"move"` | Move entity |
| `CMD_DELETE` | `"delete"` | Delete entity |
| `CMD_KEY` | `"key"` | Open access profile dialog |

**`EsqExplorerHost`** — callback interface the shell component implements. Receives notifications
from the command bus and dialogs:

```typescript
interface EsqExplorerHost {
  onTreeRefresh(entityId?, asOwner?): void  // refresh tree; optionally re-select entity
  setErrorMessage(msg, err?): void          // display error in shell footer
  setLoading(on): void                      // show/hide loading indicator
}
```

`EsqExplorerHostDummy` is a no-op base class — extend it to implement only the methods you need.

**Host registration** — multiple hosts may be registered simultaneously (fanout). A dialog that
extends `EsqExplorerHostDummy` registers itself as a host to handle `setLoading()` during saves.

---

### `EsqEntityCommandHandler`

Interface for pluggable command handlers registered via `EsqExplorerCallApi.registerHandler()`.
The mill dispatches to the first handler whose `canHandle(cmd)` returns `true`.

```typescript
interface EsqEntityCommandHandler {
  canHandle(cmd: string): boolean
  executeWithNode(context: EsqNodeCommandContext): Promise<void>
  executeWithEntity(context: EsqEntityCommandContext): Promise<void>
}
```

**Context objects** carry both the command parameters and all service dependencies
(`dialog`, `restApi`, `dictionaryApi`, `callApi`, `host`, `userId`), so handlers are
self-contained and require no additional injection.

`EsqNodeCommandContext` is passed from `call()` (tree node selected); `EsqEntityCommandContext`
from `calle()` (entity id known but node may not be in the tree).

**`EsqCommandSubmitter`** — lighter interface for handlers that only need to POST a command:
```typescript
interface EsqCommandSubmitter {
  submit(kind, id, body): Observable<any>
}
```
Used by `EsqAcctCommandHandler` to keep the REST routing in the host app.

---

## components entry point

### `EsqExplorerCallApiMill`

The singleton that implements `EsqExplorerCallApi`. Create one instance per app shell,
pass it `MatDialog`, `EsqDictionaryApi`, `EsqRestApi`, and `userId`.

Built-in handlers registered by the mill:
- **`EsqDefaultCommandHandler`** — opens `EsqNodeDetailsDialog` for `CMD_DEFAULT`
- **`EsqDeleteCommandHandler`** — confirm + `esquireCmdDel` + `onTreeRefresh` for `CMD_DELETE`
- **`EsqKeyCommandHandler`** — opens `EsqAccessProfileDialog` for `CMD_KEY`

Custom handlers are registered after construction:
```typescript
mill.registerHandler(new EsqAcctCommandHandler(...));
```
Handlers are checked in registration order. Custom handlers registered first take priority over built-ins.

---

### `EsqEntityDetailsDialog`

Base class for all entity edit dialogs. Provides tabs, field rendering, save/refresh/close,
change tracking, server validation error handling, and drag-resize.

**Lifecycle:**
1. `ngOnInit` → `loadEntity()` → `esquireCmd()` → populates `details`
2. `onSave()` → validates fields → `esquireCmdSave()` → on success: update `originalDetails`,
   optionally trigger `onTreeRefresh()`
3. Close with unsaved changes → `EsqConfirmDialog` (Ok to save / Cancel to discard)
4. ESC key → same unsaved-change check

**Extension hooks (override in subclasses):**

| Method | When to override |
|---|---|
| `onDictionaryLoaded()` | Post-process dictionary after load (e.g. extract a label) |
| `focusOnInit()` | Set initial focus to a specific control |
| `validateExtra()` | Add async validation beyond standard field rules |
| `extraConfirmLines()` | Add lines to the save-confirm dialog summary |
| `closeConfirmMessage()` | Customize the "unsaved changes" message |
| `treeRefreshResult()` | Control what result value triggers a tree refresh |
| `isCreating()` / `onCreate()` | Implement two-phase create→edit flow |

**`affects3`** — if a saved field has `affects3: true` in its dictionary descriptor, the mill
fires `host.onTreeRefresh()` with a 250 ms delay after the dialog closes, so the tree node
name/icon updates.

**Sub-entities** — tabs can contain sub-entity field groups (different `kind`). `hasChanges()`
and `onSave()` iterate all sub-entity layers automatically.

---

### `EsqTabFieldComponent`

Dictionary-driven field renderer. Renders one row: label + input based on `field.type`.

Supported field types (see `doc/fieldType.md`):

| Type | Renders as |
|---|---|
| `string` | `<input type="text">` |
| `text` | `<textarea>` |
| `number` | `<input>` with `EsqUtils.formatNumber` |
| `flag` | Yes/No dropdown |
| `date` | `<input type="date">` |
| `select` | `<select>` with `listvalues` from dictionary |
| `image` | `<img>` |
| `tablist` | Embedded `EsqTabListComponent` |

Field editability is controlled by:
- `field.readwrite` — server-side permission flag
- `EsqAccessProfile.isCommandAllowed(CMD_DEFAULT, entityId, kind)` — profile permission
- `field.personal` — editable only if entity is the logged-in user

---

### `EsqConfirmDialog`

Styled replacement for browser `alert()` / `confirm()`.

```typescript
EsqExplorerCallApi.ConfirmFlag.Ok        // single OK button — alert style
EsqExplorerCallApi.ConfirmFlag.YesNo     // Yes / No
EsqExplorerCallApi.ConfirmFlag.OkCancel  // OK / Cancel
```

Returns a `Promise<number>`: `0` = primary action (OK/Yes), `1` = secondary (No/Cancel).

---

### `EsqDialogResizeDirective`

Add to any dialog toolbar with `[esqDialogResize]="resizeKey"`. Saves and restores dialog
position and size per user in `localStorage` under the given key.

---

## explorer/flatTree entry point

### `EsqExplorerComponent`

The main visual component. Selector: `<esq-explorer>`.

**Inputs:**

| Input | Type | Purpose |
|---|---|---|
| `esqCallApi` | `EsqExplorerCallApi` | Command bus (required) |
| `esqRestApi` | `EsqRestApi` | REST API (required) |
| `esqAccessProfile` | `EsqAccessProfile` | Current user profile |
| `esqDatasource` | `EsqFlatTreeDatasource` | Optional external datasource |
| `esqExplorerHost` | `EsqExplorerHost` | Optional external host for events |
| `esqSubItemDisabled` | `(subCmd, node) => boolean` | Disables specific submenu items |

The component self-registers as an `EsqExplorerHost` in `ngOnInit`, so it handles
`onTreeRefresh`, `setErrorMessage`, and `setLoading` by default.

**Toolbar / context menu** — built dynamically from `node.kind.commands`. Items appear in both
the toolbar (for the selected node) and the right-click context menu. The `New` command opens
a submenu of allowed child kinds (`EsqObjectKind.childKinds`).

**Keyboard navigation** — arrow keys move through the tree; Enter fires the default command;
Delete fires the delete command; context menu is keyboard-accessible.

---

### `EsqFlatTreeDatasource`

Lazy-loading flat-tree datasource backed by `EsqRestApi.esquire()`.

- Loads children on expand, paginates via `MORE` (kind 999) sentinel nodes.
- Exposes `selectDs` (Angular CDK `ArrayDataSource`) consumed by `<mat-tree>`.
- `levelAccessor`: returns `node.level` for Material tree indentation.
- `isExpandable(node)`: true when `node.hasChild()` or `node.hasMore()`.

---

### `EsqFlatTreeSelector` and `EsqFlatTreeSelectorFactory`

Used by entity-picker dialogs to show a filtered subtree.

`EsqFlatTreeSelectorFactory.createFlatTreeSelector(allowedKinds, isSelectableFn)` returns an
`EsqFlatTreeSelector` that:
- filters which node kinds appear in the tree (only kinds in `allowedKinds` are shown)
- determines which nodes are selectable (via the callback)

---

### `EsqSelectEntityDialog`

Base class for tree-picker dialogs. `EsqSelectAcctDialog` in the host app extends it and
narrows the allowed kinds to account-related nodes.

**Angular constraint** — `templateUrl` must be a local file path. The template
`EsqSelectEntityDialog.html` is distributed as a library asset and must be copied into
the host project before extending this class.

---

## Collaboration patterns

### Wiring the host application

Minimum setup in the app shell component:

```typescript
// 1. Create the REST API implementation (generated from OpenAPI or hand-written)
this.restApi = new EsquireService(...);

// 2. Initialize kind registry (async — do before any tree render)
await EsqObjectKindFactory.init(this.restApi, LOCAL_KIND_OVERRIDES);

// 3. Load access profile
this.accessProfile = new EsqAccessProfile(
  await firstValueFrom(this.restApi.esquireKey())
);

// 4. Create the command bus (singleton per shell)
this.callApi = EsqExplorerCallApiMill.instance();
this.callApi.init(dialog, dictionaryApi, restApi, accessProfile.id);

// 5. Register custom command handlers
this.callApi.registerHandler(new EsqAcctCommandHandler(restApi, callApi, selectorFactory));

// 6. Register the shell as host
this.callApi.registerHost(this);
```

### Adding a custom command

1. Define a command constant and add it to the kind's `commands[]` list (server-side or local override).
2. Implement `EsqEntityCommandHandler`:
   ```typescript
   export class MyCommandHandler implements EsqEntityCommandHandler {
     canHandle(cmd) { return cmd === 'my-cmd'; }
     async executeWithNode(ctx) { ... }
     async executeWithEntity(ctx) { ... }
   }
   ```
3. Register: `callApi.registerHandler(new MyCommandHandler(...));`

### Extending a dialog

Subclass `EsqEntityDetailsDialog` (or `EsqAcctDialog` for accounting dialogs):

```typescript
@Component({ templateUrl: './MyDialog.html', styleUrls: ['./MyDialog.scss'] })
export class MyDialog extends EsqEntityDetailsDialog {

  protected override onDictionaryLoaded(): void {
    // post-process dictionary fields
  }

  protected override async validateExtra(): Promise<string | null> {
    // return error message string, or null if valid
    return null;
  }

  protected override extraConfirmLines(): string[] {
    return ['extra line in confirm summary'];
  }
}
```

### Kind normalization rule

Entity kinds come in pairs: **primary (even)** and **link-variant (odd)**.
The same physical entity appears twice in the tree under different parents.

- Always use `EsqObjectKindFactory.normalize(kind)` before REST calls.
- Use the raw (possibly odd) kind only for tree rendering and icon lookup.
- Dialog constructors receive the raw kind; normalize internally before `esquireCmd()`.

---

## Debug flags

`EsqUtils` carries two static development flags:

| Flag | Effect |
|---|---|
| `EsqUtils.DEBUG` | Enables `EsqUtils.log()` output to the browser console |
| `EsqUtils.DELAY` | Activates artificial REST response delay via `observeWithDelay()` — simulates slow network |
| `EsqUtils.DEBUG_SKIP_VALIDATION` | `validateFields()` returns `null` immediately — skips all field validation |
| `EsqUtils.DEBUG_SKIP_PERMISSION` | `isCommandAllowed()` returns `true` — all commands enabled |

Set these in the app shell during development. Never commit with any flag enabled.
