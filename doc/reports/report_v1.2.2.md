# Release Report: v1.2.0 → v1.2.2

**Repo:** `esquire.ui.lib/develop`  
**Top commit:** `8f6b02b`

---

## Release Notes

---

## Code Changes

---

## Commits

```

-- 2026-04-19 | commit: 8f6b02b | mir0n.the.programmer | Create report_2026_04_19_31750f3.md --
A	doc/reports/report_2026_04_19_31750f3.md
 1 file changed, 1698 insertions(+)

-- 2026-04-19 | commit: 31750f3 | mir0n.the.programmer | v1.2.2 Finalization --
M	README.md
A	build-yalc.bat
A	build.bat
A	doc/custom-dialog-design.md
A	doc/esquire.ui-details.md
M	doc/release_notes.txt
A	doc/yalc-vs-git.md
A	git-publish.bat
A	projects/esquire.ui/ng-package.json
A	projects/esquire.ui/package.json
A	projects/esquire.ui/public-api.ts
A	projects/esquire.ui/tsconfig.lib.json
A	projects/esquire.ui/tsconfig.lib.prod.json
A	projects/esquire.ui/tsconfig.spec.json
 14 files changed, 1177 insertions(+), 7 deletions(-)


-- 2026-04-18 | commit: 6414f1c | mir0n.the.programmer | v1.2.2 Public API expansion; distribution assets; yalc workflow --
M	angular.json
M	doc/release_notes.txt
M	package.json
M	projects/esquire.ui/api/EsqAccessProfile.ts
R098	projects/esquire.ui/components/EsqUtils.ts	projects/esquire.ui/api/EsqUtils.ts
R086	projects/esquire.ui/components/EsqValidationError.ts	projects/esquire.ui/api/EsqValidationError.ts
M	projects/esquire.ui/api/public-api.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqConfirmDialog.ts
M	projects/esquire.ui/components/EsqCreateEntityDialog.ts
M	projects/esquire.ui/components/EsqDictionary.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
M	projects/esquire.ui/components/EsqNodeDialog.ts
M	projects/esquire.ui/components/EsqSingleEntryDialog.ts
M	projects/esquire.ui/components/EsqTabFieldComponent.ts
M	projects/esquire.ui/components/EsqTabIknListComponent.ts
M	projects/esquire.ui/components/EsqTabIknfTableComponent.ts
M	projects/esquire.ui/components/EsqTabListComponent.ts
M	projects/esquire.ui/components/commands/EsqCommandHandlerRegistry.ts
M	projects/esquire.ui/components/commands/EsqDefaultCommandHandler.ts
M	projects/esquire.ui/components/commands/EsqDeleteCommandHandler.ts
M	projects/esquire.ui/components/commands/EsqKeyCommandHandler.ts
M	projects/esquire.ui/components/public-api.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqFlatTreeDatasource.ts
M	projects/esquire.ui/explorer/flatTree/EsqFlatTreeSelector.ts
M	projects/esquire.ui/explorer/flatTree/EsqListViewDatasource.ts
M	projects/esquire.ui/explorer/flatTree/EsqSelectEntityDatasource.ts
M	projects/esquire.ui/explorer/flatTree/EsqTreeViewDatasource.ts
M	projects/esquire.ui/explorer/flatTree/components/EsqMoveCommandHandler.ts
M	projects/esquire.ui/explorer/flatTree/components/EsqMoveDialog.ts
M	projects/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog.ts
M	projects/esquire.ui/explorer/flatTree/public-api.ts
M	projects/esquire.ui/test/group1/EsqAccessProfile.spec.ts
M	projects/esquire.ui/test/group1/EsqCommandHandlerRegistry.spec.ts
M	projects/esquire.ui/test/group1/EsqContextMenuBuilder.spec.ts
M	projects/esquire.ui/test/group1/EsqNodeStatusFactory.spec.ts
M	projects/esquire.ui/test/group1/EsqObjectKind.spec.ts
M	projects/esquire.ui/test/group1/EsqObjectKindFactory.spec.ts
M	projects/esquire.ui/test/group1/EsqTreeNode.spec.ts
M	projects/esquire.ui/test/group1/EsqTreeNodeDto.spec.ts
M	projects/esquire.ui/test/group1/EsqUtils.spec.ts
M	projects/esquire.ui/test/group2/EsqDictionary.spec.ts
M	projects/esquire.ui/test/group2/EsqFlatTreeDatasource.spec.ts
M	projects/esquire.ui/test/group2/EsqSelectEntityDatasource.spec.ts
M	projects/esquire.ui/test/group2/EsqTreeViewDatasource.spec.ts
M	projects/esquire.ui/test/group3/EsqAccessProfileDialog.spec.ts
M	projects/esquire.ui/test/group3/EsqConfirmDialog.spec.ts
M	projects/esquire.ui/test/group3/EsqEntityDetailsDialog.spec.ts
M	projects/esquire.ui/test/group3/EsqExplorerComponent.spec.ts
M	projects/esquire.ui/test/group3/EsqMoveDialog.spec.ts
M	projects/esquire.ui/test/group3/EsqNodeDetailsDialog.spec.ts
M	projects/esquire.ui/test/group3/EsqNodeDialog.spec.ts
M	projects/esquire.ui/test/group3/EsqSelectEntityDialog.spec.ts
M	projects/esquire.ui/test/group3/EsqSingleEntryDialog.spec.ts
M	tsconfig.json
 59 files changed, 412 insertions(+), 244 deletions(-)

-- 2026-04-18 | commit: 71eaf98 | mir0n.the.programmer | missed files on rebase --
A	.editorconfig
A	.gitignore
A	.npmrc
A	README.md
A	angular.json
A	doc/fieldType.md
A	doc/kind.context.md
A	doc/permissions.md
A	doc/release_notes.txt
A	doc/validations.md
A	favicon.ico
A	package.json
A	tsconfig.json
 13 files changed, 1373 insertions(+)

-- 2026-04-18 | commit: dd1585c | mir0n.the.programmer | Tuning of field types: image, tablist --
M	projects/esquire.ui/api/public-api.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqTabFieldComponent.html
M	projects/esquire.ui/components/EsqTabListComponent.html
M	projects/esquire.ui/components/EsqTabListComponent.scss
 5 files changed, 17 insertions(+), 3 deletions(-)

-- 2026-04-18 | commit: 4dbd111 | mir0n.the.programmer | EsqObjectKindFactory: pass kind title from server; add login-hint background --
M	projects/esquire.ui/api/EsqObjectKindFactory.ts
M	projects/esquire.ui/changes.txt
 2 files changed, 6 insertions(+), 1 deletion(-)

-- 2026-04-18 | commit: ceeae02 | mir0n.the.programmer | Unit tests were added --
A	projects/esquire.ui/test/group1/EsqAccessProfile.spec.ts
A	projects/esquire.ui/test/group1/EsqCommandHandlerRegistry.spec.ts
A	projects/esquire.ui/test/group1/EsqContextMenuBuilder.spec.ts
A	projects/esquire.ui/test/group1/EsqNodeStatusFactory.spec.ts
A	projects/esquire.ui/test/group1/EsqObjectKind.spec.ts
A	projects/esquire.ui/test/group1/EsqObjectKindFactory.spec.ts
A	projects/esquire.ui/test/group1/EsqTreeNode.spec.ts
A	projects/esquire.ui/test/group1/EsqTreeNodeDto.spec.ts
A	projects/esquire.ui/test/group1/EsqUtils.spec.ts
A	projects/esquire.ui/test/group2/EsqDictionary.spec.ts
A	projects/esquire.ui/test/group2/EsqFlatTreeDatasource.spec.ts
A	projects/esquire.ui/test/group2/EsqSelectEntityDatasource.spec.ts
A	projects/esquire.ui/test/group2/EsqTreeViewDatasource.spec.ts
A	projects/esquire.ui/test/group3/EsqAccessProfileDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqConfirmDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqEntityDetailsDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqExplorerComponent.spec.ts
A	projects/esquire.ui/test/group3/EsqMoveDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqNodeDetailsDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqNodeDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqSelectEntityDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqSingleEntryDialog.spec.ts
A	projects/esquire.ui/test/test.structure.md
 23 files changed, 1981 insertions(+)

-- 2026-04-18 | commit: 420324f | mir0n.the.programmer | Acct Transaction Phase IV: Transfer acct operation with dest picker and paper-account guard --
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqFlatTreeSelector.ts
M	projects/esquire.ui/explorer/flatTree/EsqSelectEntityDatasource.ts
M	projects/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog.ts
 6 files changed, 65 insertions(+), 31 deletions(-)

-- 2026-04-18 | commit: f32faaf | mir0n.the.programmer | Acct operations expansion: Deposit/Withdrawal submenu; AmountEffect validation --
M	projects/esquire.ui/api/EsqContextMenuBuilder.ts
M	projects/esquire.ui/api/EsqObjectKindFactory.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
 5 files changed, 119 insertions(+), 23 deletions(-)

-- 2026-04-18 | commit: cebafc5 | mir0n.the.programmer | Account picker; generic entity select dialog; EsqMoveDialog refactor --
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqDetailsDialog.scss
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqFlatTreeDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqFlatTreeSelector.ts
A	projects/esquire.ui/explorer/flatTree/EsqSelectEntityDatasource.ts
M	projects/esquire.ui/explorer/flatTree/EsqTreeViewDatasource.ts
M	projects/esquire.ui/explorer/flatTree/components/EsqMoveCommandHandler.ts
D	projects/esquire.ui/explorer/flatTree/components/EsqMoveDialog.scss
M	projects/esquire.ui/explorer/flatTree/components/EsqMoveDialog.ts
R059	projects/esquire.ui/explorer/flatTree/components/EsqMoveDialog.html	projects/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog.html
A	projects/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog.scss
A	projects/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog.ts
 14 files changed, 589 insertions(+), 282 deletions(-)

-- 2026-04-18 | commit: 60b7e5f | mir0n.the.programmer | Externalize acct command as custom --
M	projects/esquire.ui/api/EsqAccessProfile.ts
M	projects/esquire.ui/api/EsqEntityCommandHandler.ts
M	projects/esquire.ui/api/EsqExplorerCallApi.ts
M	projects/esquire.ui/api/EsqRestApi.ts
M	projects/esquire.ui/changes.txt
 5 files changed, 44 insertions(+), 13 deletions(-)

-- 2026-04-18 | commit: 20032ea | mir0n.the.programmer | Acct deposit command: dialog with dictionary-driven fields, entity refresh, continuous operation --
M	projects/esquire.ui/api/EsqRestApi.ts
M	projects/esquire.ui/changes.txt
 2 files changed, 6 insertions(+)

-- 2026-04-18 | commit: 617d99c | mir0n.the.programmer | Generalization of "loading" indicator; debug delay centralized --
M	projects/esquire.ui/api/EsqExplorerCallApi.ts
M	projects/esquire.ui/api/EsqObjectKindFactory.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.html
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqConfirmDialog.html
M	projects/esquire.ui/components/EsqDetailsDialog.scss
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.html
M	projects/esquire.ui/components/EsqNodeDialog.html
M	projects/esquire.ui/components/EsqSingleEntryDialog.html
M	projects/esquire.ui/components/EsqUtils.ts
A	projects/esquire.ui/components/loading.16.gif
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.scss
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqFlatTreeDatasource.ts
M	projects/esquire.ui/explorer/flatTree/components/EsqMoveCommandHandler.ts
M	projects/esquire.ui/explorer/flatTree/components/EsqMoveDialog.html
M	projects/esquire.ui/explorer/flatTree/components/EsqMoveDialog.ts
 22 files changed, 235 insertions(+), 94 deletions(-)

-- 2026-04-18 | commit: a8fed0f | mir0n.the.programmer |  Kind normalization refactor; REST API facade update --
M	projects/esquire.ui/api/EsqAccessProfile.ts
M	projects/esquire.ui/api/EsqDictionaryApi.ts
M	projects/esquire.ui/api/EsqEntityCommandHandler.ts
M	projects/esquire.ui/api/EsqEntityDictionary.ts
M	projects/esquire.ui/api/EsqExplorerCallApi.ts
M	projects/esquire.ui/api/EsqObjectKindFactory.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqDictionary.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
M	projects/esquire.ui/components/commands/EsqDefaultCommandHandler.ts
M	projects/esquire.ui/components/commands/EsqDeleteCommandHandler.ts
M	projects/esquire.ui/components/commands/EsqKeyCommandHandler.ts
M	projects/esquire.ui/explorer/flatTree/components/EsqMoveCommandHandler.ts
M	projects/esquire.ui/explorer/flatTree/components/EsqMoveDialog.ts
 15 files changed, 111 insertions(+), 64 deletions(-)

-- 2026-04-18 | commit: 87eb2d9 | mir0n.the.programmer | Refactoring of menu command handle; Elimination of double HTTP request --
A	projects/esquire.ui/api/EsqEntityCommandHandler.ts
M	projects/esquire.ui/api/EsqExplorerCallApi.ts
M	projects/esquire.ui/api/public-api.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqDetailsDialog.scss
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqTabIknListComponent.ts
M	projects/esquire.ui/components/EsqTabListComponent.ts
M	projects/esquire.ui/components/EsqUtils.ts
A	projects/esquire.ui/components/commands/EsqCommandHandlerRegistry.ts
A	projects/esquire.ui/components/commands/EsqDefaultCommandHandler.ts
A	projects/esquire.ui/components/commands/EsqDeleteCommandHandler.ts
A	projects/esquire.ui/components/commands/EsqKeyCommandHandler.ts
M	projects/esquire.ui/components/public-api.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
A	projects/esquire.ui/explorer/flatTree/components/EsqMoveCommandHandler.ts
M	projects/esquire.ui/explorer/flatTree/components/EsqMoveDialog.ts
 17 files changed, 764 insertions(+), 200 deletions(-)

-- 2026-04-18 | commit: bada4b4 | mir0n.the.programmer | Move command; ESC close for all dialogs --
M	projects/esquire.ui/api/EsqRestApi.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqNodeDialog.ts
M	projects/esquire.ui/components/EsqSingleEntryDialog.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqFlatTreeDatasource.ts
M	projects/esquire.ui/explorer/flatTree/EsqTreeViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/components/EsqMoveDialog.html
A	projects/esquire.ui/explorer/flatTree/components/EsqMoveDialog.scss
A	projects/esquire.ui/explorer/flatTree/components/EsqMoveDialog.ts
 12 files changed, 457 insertions(+), 23 deletions(-)

-- 2026-04-18 | commit: e2d56bb | mir0n.the.programmer | Synch with keyCloak esquire theme; UI/UX cleanup --
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqConfirmDialog.html
M	projects/esquire.ui/components/EsqConfirmDialog.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.scss
 4 files changed, 29 insertions(+), 7 deletions(-)

-- 2026-04-18 | commit: 38e515c | mir0n.the.programmer | Inject dictionary defaults in create entity dialog --
M	projects/esquire.ui/api/EsqEntityDictionary.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqCreateEntityDialog.ts
M	projects/esquire.ui/components/EsqDictionary.ts
 4 files changed, 69 insertions(+), 18 deletions(-)

-- 2026-04-18 | commit: f7b3d86 | mir0n.the.programmer |   Delete command --
M	projects/esquire.ui/api/EsqExplorerCallApi.ts
M	projects/esquire.ui/api/EsqRestApi.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
 5 files changed, 80 insertions(+), 10 deletions(-)

-- 2026-04-18 | commit: 746a5b3 | mir0n.the.programmer | Windows style dialog resize + position/size persistence per user --
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.html
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqConfirmDialog.html
M	projects/esquire.ui/components/EsqConfirmDialog.ts
M	projects/esquire.ui/components/EsqCreateEntityDialog.ts
M	projects/esquire.ui/components/EsqDetailsDialog.scss
A	projects/esquire.ui/components/EsqDialogResizeDirective.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.html
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
M	projects/esquire.ui/components/EsqNodeDialog.html
M	projects/esquire.ui/components/EsqNodeDialog.ts
M	projects/esquire.ui/components/EsqSingleEntryDialog.html
M	projects/esquire.ui/components/EsqSingleEntryDialog.ts
M	projects/esquire.ui/components/public-api.ts
 18 files changed, 328 insertions(+), 7 deletions(-)

-- 2026-04-18 | commit: ea168ea | mir0n.the.programmer | Styled confirm/alert dialog replaces browser alert()/confirm() --
M	projects/esquire.ui/api/EsqExplorerCallApi.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
A	projects/esquire.ui/components/EsqConfirmDialog.html
A	projects/esquire.ui/components/EsqConfirmDialog.ts
M	projects/esquire.ui/components/EsqCreateEntityDialog.ts
M	projects/esquire.ui/components/EsqDetailsDialog.scss
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/public-api.ts
 10 files changed, 224 insertions(+), 40 deletions(-)

-- 2026-04-18 | commit: 59495d6 | mir0n.the.programmer | Create entity dialog, bypass error message to shell footer --
M	projects/esquire.ui/api/EsqExplorerCallApi.ts
M	projects/esquire.ui/api/EsqRestApi.ts
M	projects/esquire.ui/changes.txt
A	projects/esquire.ui/components/EsqCreateEntityDialog.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqUtils.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
 10 files changed, 334 insertions(+), 6 deletions(-)

-- 2026-04-18 | commit: 3d79fae | mir0n.the.programmer |  tree auto refresh on update of important fields + few fixes --
M	projects/esquire.ui/api/EsqEntityDictionary.ts
M	projects/esquire.ui/api/EsqExplorerCallApi.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqFlatTreeDatasource.ts
 8 files changed, 138 insertions(+), 23 deletions(-)

-- 2026-04-18 | commit: 61dcd06 | mir0n.the.programmer | Fix: Entity kind normalization --
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
 2 files changed, 6 insertions(+)

-- 2026-04-18 | commit: 52aeb6f | mir0n.the.programmer | saving flag; subscribe cleanup --
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.html
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
 5 files changed, 24 insertions(+), 2 deletions(-)

-- 2026-04-18 | commit: d8bdfdd | mir0n.the.programmer | debug skip flags for development testing, docs were drafted --
M	projects/esquire.ui/api/EsqAccessProfile.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqUtils.ts
 3 files changed, 22 insertions(+)

-- 2026-04-18 | commit: d9e30ac | mir0n.the.programmer |  Server-side validation error handling; ikn-list refresh fix --
M	projects/esquire.ui/api/ProblemDetail.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.html
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqTabIknListComponent.ts
 6 files changed, 123 insertions(+), 45 deletions(-)

-- 2026-04-18 | commit: ed77dcf | mir0n.the.programmer | Add/Remove roles; text field type --
M	projects/esquire.ui/api/ProblemDetail.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqDetailsDialog.scss
M	projects/esquire.ui/components/EsqTabFieldComponent.html
M	projects/esquire.ui/components/EsqTabFieldComponent.ts
M	projects/esquire.ui/components/EsqTabIknListComponent.html
M	projects/esquire.ui/components/EsqTabIknListComponent.ts
M	projects/esquire.ui/components/EsqTabListComponent.scss
M	projects/esquire.ui/components/EsqUtils.ts
 9 files changed, 248 insertions(+), 39 deletions(-)

-- 2026-04-18 | commit: 378bb75 | mir0n.the.programmer | Date field type; null change-detection fix --
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqDetailsDialog.scss
M	projects/esquire.ui/components/EsqTabFieldComponent.html
M	projects/esquire.ui/components/EsqTabFieldComponent.ts
M	projects/esquire.ui/components/EsqUtils.ts
 5 files changed, 100 insertions(+), 13 deletions(-)

-- 2026-04-18 | commit: 4a27203 | mir0n.the.programmer | Sub-entity rendering; dialog inheritance; tab restore --
M	projects/esquire.ui/api/EsqDictionaryApi.ts
M	projects/esquire.ui/api/EsqObjectKindFactory.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.html
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqDictionary.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.html
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
M	projects/esquire.ui/components/EsqTabFieldComponent.html
 11 files changed, 317 insertions(+), 234 deletions(-)

-- 2026-04-18 | commit: 2c6805d | mir0n.the.programmer | Wire Save to REST --
M	projects/esquire.ui/api/EsqAccessProfile.ts
M	projects/esquire.ui/api/EsqRestApi.ts
M	projects/esquire.ui/api/ProblemDetail.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.html
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.html
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
M	projects/esquire.ui/components/EsqSingleEntryDialog.html
M	projects/esquire.ui/components/EsqTabFieldComponent.html
M	projects/esquire.ui/components/EsqTabFieldComponent.ts
M	projects/esquire.ui/components/EsqUtils.ts
A	projects/esquire.ui/components/EsqValidationError.ts
 16 files changed, 452 insertions(+), 96 deletions(-)

-- 2026-04-18 | commit: 5b85059 | mir0n.the.programmer | Editable fields and access profile permissions --
A	projects/esquire.ui/api/EsqAccessProfile.ts
M	projects/esquire.ui/api/EsqContextMenuBuilder.ts
M	projects/esquire.ui/api/EsqEntityDictionary.ts
M	projects/esquire.ui/api/EsqExplorerCallApi.ts
M	projects/esquire.ui/api/ProblemDetail.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.html
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqDetailsDialog.scss
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.html
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
M	projects/esquire.ui/components/EsqTabFieldComponent.html
M	projects/esquire.ui/components/EsqTabFieldComponent.ts
M	projects/esquire.ui/components/EsqTabIknListComponent.ts
M	projects/esquire.ui/components/EsqTabListComponent.ts
M	projects/esquire.ui/components/EsqTabStringComponent.html
M	projects/esquire.ui/components/EsqTabStringComponent.ts
M	projects/esquire.ui/components/EsqUtils.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
 22 files changed, 666 insertions(+), 115 deletions(-)

-- 2026-04-18 | commit: 5baea58 | mir0n.the.programmer | Clean Name convention: kind vs type --
M	projects/esquire.ui/api/EsqContextMenuBuilder.ts
M	projects/esquire.ui/api/EsqEntityDictionary.ts
R095	projects/esquire.ui/api/EsqNodeType.ts	projects/esquire.ui/api/EsqObjectKind.ts
R067	projects/esquire.ui/api/EsqNodeTypeFactory.ts	projects/esquire.ui/api/EsqObjectKindFactory.ts
M	projects/esquire.ui/api/EsqTreeNode.ts
M	projects/esquire.ui/api/EsqTreeNodeDto.ts
M	projects/esquire.ui/api/public-api.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.html
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
M	projects/esquire.ui/components/EsqNodeDialog.html
M	projects/esquire.ui/components/EsqTabFieldComponent.ts
M	projects/esquire.ui/components/EsqTabIknListComponent.ts
M	projects/esquire.ui/components/EsqTabIknfTableComponent.ts
M	projects/esquire.ui/components/EsqTabListComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqListViewDatasource.ts
 21 files changed, 162 insertions(+), 108 deletions(-)

-- 2026-04-18 | commit: f3a8ba9 | mir0n.the.programmer | Refactoring/cleanup in progress --
M	projects/esquire.ui/api/EsqTreeNode.ts
M	projects/esquire.ui/api/EsqTreeNodeDto.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/explorer/flatTree/EsqTreeViewDatasource.ts
 4 files changed, 16 insertions(+), 7 deletions(-)

-- 2026-04-18 | commit: 094faff | mir0n.the.programmer | set of node types configured in server side, keeps ability to be defined/overwritten locally --
M	projects/esquire.ui/api/EsqContextMenuBuilder.ts
A	projects/esquire.ui/api/EsqNodeType.ts
M	projects/esquire.ui/api/EsqNodeTypeFactory.ts
M	projects/esquire.ui/api/EsqRestApi.ts
M	projects/esquire.ui/api/EsqTreeNode.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
M	projects/esquire.ui/components/EsqTabFieldComponent.ts
M	projects/esquire.ui/components/EsqTabIknListComponent.ts
M	projects/esquire.ui/components/EsqTabIknfTableComponent.html
M	projects/esquire.ui/components/EsqTabIknfTableComponent.ts
M	projects/esquire.ui/components/EsqTabListComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqListViewDatasource.ts
 16 files changed, 194 insertions(+), 64 deletions(-)

-- 2026-04-18 | commit: 9bf1dd3 | mir0n.the.programmer | generalization of dialogs : a common TabField component to handle any field type --
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.html
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.html
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
M	projects/esquire.ui/components/EsqSingleEntryDialog.html
M	projects/esquire.ui/components/EsqSingleEntryDialog.ts
A	projects/esquire.ui/components/EsqTabFieldComponent.html
A	projects/esquire.ui/components/EsqTabFieldComponent.ts
M	projects/esquire.ui/components/EsqTabIknfTableComponent.html
 12 files changed, 213 insertions(+), 203 deletions(-)

-- 2026-04-18 | commit: a5955e9 | mir0n.the.programmer | Preparing for dialog code generalization --
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.html
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.html
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
A	projects/esquire.ui/components/EsqNodeDialog.html
A	projects/esquire.ui/components/EsqNodeDialog.ts
M	projects/esquire.ui/components/EsqTabIknListComponent.ts
M	projects/esquire.ui/components/EsqTabIknfTableComponent.ts
 12 files changed, 399 insertions(+), 135 deletions(-)

-- 2026-04-18 | commit: 208d2fb | mir0n.the.programmer | v1.2.1 Toolbar and Context Menu with Access Profile as an option) --
A	projects/esquire.ui/api/EsqContextMenuBuilder.ts
M	projects/esquire.ui/api/EsqExplorerCallApi.ts
M	projects/esquire.ui/api/EsqNodeStatusFactory.ts
M	projects/esquire.ui/api/EsqNodeTypeFactory.ts
M	projects/esquire.ui/api/EsqRestApi.ts
M	projects/esquire.ui/api/public-api.ts
A	projects/esquire.ui/changes.txt
A	projects/esquire.ui/components/EsqAccessProfileDialog.html
A	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqSingleEntryDialog.ts
A	projects/esquire.ui/components/EsqTabIknListComponent.html
A	projects/esquire.ui/components/EsqTabIknListComponent.ts
A	projects/esquire.ui/components/EsqTabIknfTableComponent.html
A	projects/esquire.ui/components/EsqTabIknfTableComponent.ts
M	projects/esquire.ui/components/EsqTabListComponent.scss
M	projects/esquire.ui/components/EsqTabStringComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.scss
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
 22 files changed, 1677 insertions(+), 205 deletions(-)

-- 2026-04-18 | commit: b15e61f | mir0n.the.programmer | include esquire.ui library --
D	.gitignore
D	.npmrc
D	LICENSE
D	README.md
D	angular.json
D	doc/release_notes.txt
D	favicon.ico
D	package.json
D	projects/esquire.ui/README.md
A	projects/esquire.ui/api/ProblemDetail.ts
D	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqDictionary.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
A	projects/esquire.ui/components/EsqSingleEntryDialog.html
A	projects/esquire.ui/components/EsqSingleEntryDialog.ts
M	projects/esquire.ui/components/EsqTabListComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqFlatTreeDatasource.ts
M	projects/esquire.ui/explorer/flatTree/EsqListViewDatasource.ts
M	projects/esquire.ui/explorer/flatTree/EsqTreeViewDatasource.ts
D	projects/esquire.ui/ng-package.json
D	projects/esquire.ui/package.json
D	projects/esquire.ui/public-api.ts
D	projects/esquire.ui/tsconfig.lib.json
D	projects/esquire.ui/tsconfig.lib.prod.json
D	projects/esquire.ui/tsconfig.spec.json
D	tsconfig.json
 29 files changed, 343 insertions(+), 954 deletions(-)

-- 2025-12-27 | commit: f6c1e5f | mir0n.the.programmer | README.md update --
M	README.md
A	favicon.ico


-- 2025-12-26 | commit: 131afd8 | mir0n.the.programmer | initial version v1.0.2 --
A	.npmrc
M	README.md
A	angular.json
A	doc/release_notes.txt
A	package.json
A	projects/esquire.ui/README.md
A	projects/esquire.ui/api/AsEsqTreeNodePipe.spec.ts
A	projects/esquire.ui/api/AsEsqTreeNodePipe.ts
A	projects/esquire.ui/api/EsqDictionaryApi.ts
A	projects/esquire.ui/api/EsqEntityDictionary.ts
A	projects/esquire.ui/api/EsqExplorerCallApi.ts
A	projects/esquire.ui/api/EsqNodeStatusFactory.ts
A	projects/esquire.ui/api/EsqNodeTypeFactory.ts
A	projects/esquire.ui/api/EsqRestApi.ts
A	projects/esquire.ui/api/EsqTreeNode.ts
A	projects/esquire.ui/api/EsqTreeNodeDto.ts
A	projects/esquire.ui/api/ng-package.json
A	projects/esquire.ui/api/public-api.ts
A	projects/esquire.ui/changes.txt
A	projects/esquire.ui/components/EsqDetailsDialog.scss
A	projects/esquire.ui/components/EsqDictionary.ts
A	projects/esquire.ui/components/EsqEntityDetailsDialog.html
A	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
A	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
A	projects/esquire.ui/components/EsqNodeDetailsDialog.html
A	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
A	projects/esquire.ui/components/EsqResizeDirective.ts
A	projects/esquire.ui/components/EsqTabListComponent.html
A	projects/esquire.ui/components/EsqTabListComponent.scss
A	projects/esquire.ui/components/EsqTabListComponent.ts
A	projects/esquire.ui/components/EsqTabStringComponent.html
A	projects/esquire.ui/components/EsqTabStringComponent.scss
A	projects/esquire.ui/components/EsqTabStringComponent.ts
A	projects/esquire.ui/components/EsqUtils.ts
A	projects/esquire.ui/components/ng-package.json
A	projects/esquire.ui/components/public-api.ts
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.scss
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
A	projects/esquire.ui/explorer/flatTree/EsqFlatTreeDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqListViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqTreeViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/loading.16.gif
A	projects/esquire.ui/explorer/flatTree/ng-package.json
A	projects/esquire.ui/explorer/flatTree/public-api.ts
A	projects/esquire.ui/ng-package.json
A	projects/esquire.ui/package.json
A	projects/esquire.ui/public-api.ts
A	projects/esquire.ui/tsconfig.lib.json
A	projects/esquire.ui/tsconfig.lib.prod.json
A	projects/esquire.ui/tsconfig.spec.json
A	tsconfig.json


-- 2025-12-26 | commit: 1ec0473 | mir0n.the.programmer | initial version v1.0.2 --
A	.npmrc
M	README.md
A	angular.json
A	doc/release_notes.txt
A	package.json
A	projects/esquire.ui/README.md
A	projects/esquire.ui/api/AsEsqTreeNodePipe.spec.ts
A	projects/esquire.ui/api/AsEsqTreeNodePipe.ts
A	projects/esquire.ui/api/EsqDictionaryApi.ts
A	projects/esquire.ui/api/EsqEntityDictionary.ts
A	projects/esquire.ui/api/EsqExplorerCallApi.ts
A	projects/esquire.ui/api/EsqNodeStatusFactory.ts
A	projects/esquire.ui/api/EsqNodeTypeFactory.ts
A	projects/esquire.ui/api/EsqRestApi.ts
A	projects/esquire.ui/api/EsqTreeNode.ts
A	projects/esquire.ui/api/EsqTreeNodeDto.ts
A	projects/esquire.ui/api/ng-package.json
A	projects/esquire.ui/api/public-api.ts
A	projects/esquire.ui/changes.txt
A	projects/esquire.ui/components/EsqDetailsDialog.scss
A	projects/esquire.ui/components/EsqDictionary.ts
A	projects/esquire.ui/components/EsqEntityDetailsDialog.html
A	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
A	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
A	projects/esquire.ui/components/EsqNodeDetailsDialog.html
A	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
A	projects/esquire.ui/components/EsqResizeDirective.ts
A	projects/esquire.ui/components/EsqTabListComponent.html
A	projects/esquire.ui/components/EsqTabListComponent.scss
A	projects/esquire.ui/components/EsqTabListComponent.ts
A	projects/esquire.ui/components/EsqTabStringComponent.html
A	projects/esquire.ui/components/EsqTabStringComponent.scss
A	projects/esquire.ui/components/EsqTabStringComponent.ts
A	projects/esquire.ui/components/EsqUtils.ts
A	projects/esquire.ui/components/ng-package.json
A	projects/esquire.ui/components/public-api.ts
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.scss
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
A	projects/esquire.ui/explorer/flatTree/EsqFlatTreeDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqListViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqTreeViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/loading.16.gif
A	projects/esquire.ui/explorer/flatTree/ng-package.json
A	projects/esquire.ui/explorer/flatTree/public-api.ts
A	projects/esquire.ui/ng-package.json
A	projects/esquire.ui/package.json
A	projects/esquire.ui/public-api.ts
A	projects/esquire.ui/tsconfig.lib.json
A	projects/esquire.ui/tsconfig.lib.prod.json
A	projects/esquire.ui/tsconfig.spec.json
A	tsconfig.json


-- 2025-12-26 | commit: 44283b2 | mir0n.the.programmer | Initial commit --
A	.gitignore
A	LICENSE
A	README.md


-- 2025-12-26 | commit: e9b0fbb | mir0n.the.programmer | Initial commit --
A	.gitignore
A	LICENSE
A	README.md
 2 files changed, 13 insertions(+), 2 deletions(-)

 52 files changed, 3636 insertions(+), 1 deletion(-)

 52 files changed, 3636 insertions(+), 1 deletion(-)

 3 files changed, 703 insertions(+)

 3 files changed, 703 insertions(+)

-- 2025-12-26 | commit: 1ec0473 | mir0n.the.programmer | initial version v1.0.2 --
A	.npmrc
M	README.md
A	angular.json
A	doc/release_notes.txt
A	package.json
A	projects/esquire.ui/README.md
A	projects/esquire.ui/api/AsEsqTreeNodePipe.spec.ts
A	projects/esquire.ui/api/AsEsqTreeNodePipe.ts
A	projects/esquire.ui/api/EsqDictionaryApi.ts
A	projects/esquire.ui/api/EsqEntityDictionary.ts
A	projects/esquire.ui/api/EsqExplorerCallApi.ts
A	projects/esquire.ui/api/EsqNodeStatusFactory.ts
A	projects/esquire.ui/api/EsqNodeTypeFactory.ts
A	projects/esquire.ui/api/EsqRestApi.ts
A	projects/esquire.ui/api/EsqTreeNode.ts
A	projects/esquire.ui/api/EsqTreeNodeDto.ts
A	projects/esquire.ui/api/ng-package.json
A	projects/esquire.ui/api/public-api.ts
A	projects/esquire.ui/changes.txt
A	projects/esquire.ui/components/EsqDetailsDialog.scss
A	projects/esquire.ui/components/EsqDictionary.ts
A	projects/esquire.ui/components/EsqEntityDetailsDialog.html
A	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
A	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
A	projects/esquire.ui/components/EsqNodeDetailsDialog.html
A	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
A	projects/esquire.ui/components/EsqResizeDirective.ts
A	projects/esquire.ui/components/EsqTabListComponent.html
A	projects/esquire.ui/components/EsqTabListComponent.scss
A	projects/esquire.ui/components/EsqTabListComponent.ts
A	projects/esquire.ui/components/EsqTabStringComponent.html
A	projects/esquire.ui/components/EsqTabStringComponent.scss
A	projects/esquire.ui/components/EsqTabStringComponent.ts
A	projects/esquire.ui/components/EsqUtils.ts
A	projects/esquire.ui/components/ng-package.json
A	projects/esquire.ui/components/public-api.ts
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.scss
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
A	projects/esquire.ui/explorer/flatTree/EsqFlatTreeDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqListViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqTreeViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/loading.16.gif
A	projects/esquire.ui/explorer/flatTree/ng-package.json
A	projects/esquire.ui/explorer/flatTree/public-api.ts
A	projects/esquire.ui/ng-package.json
A	projects/esquire.ui/package.json
A	projects/esquire.ui/public-api.ts
A	projects/esquire.ui/tsconfig.lib.json
A	projects/esquire.ui/tsconfig.lib.prod.json
A	projects/esquire.ui/tsconfig.spec.json
A	tsconfig.json


-- 2025-12-26 | commit: 131afd8 | mir0n.the.programmer | initial version v1.0.2 --
A	.npmrc
M	README.md
A	angular.json
A	doc/release_notes.txt
A	package.json
A	projects/esquire.ui/README.md
A	projects/esquire.ui/api/AsEsqTreeNodePipe.spec.ts
A	projects/esquire.ui/api/AsEsqTreeNodePipe.ts
A	projects/esquire.ui/api/EsqDictionaryApi.ts
A	projects/esquire.ui/api/EsqEntityDictionary.ts
A	projects/esquire.ui/api/EsqExplorerCallApi.ts
A	projects/esquire.ui/api/EsqNodeStatusFactory.ts
A	projects/esquire.ui/api/EsqNodeTypeFactory.ts
A	projects/esquire.ui/api/EsqRestApi.ts
A	projects/esquire.ui/api/EsqTreeNode.ts
A	projects/esquire.ui/api/EsqTreeNodeDto.ts
A	projects/esquire.ui/api/ng-package.json
A	projects/esquire.ui/api/public-api.ts
A	projects/esquire.ui/changes.txt
A	projects/esquire.ui/components/EsqDetailsDialog.scss
A	projects/esquire.ui/components/EsqDictionary.ts
A	projects/esquire.ui/components/EsqEntityDetailsDialog.html
A	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
A	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
A	projects/esquire.ui/components/EsqNodeDetailsDialog.html
A	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
A	projects/esquire.ui/components/EsqResizeDirective.ts
A	projects/esquire.ui/components/EsqTabListComponent.html
A	projects/esquire.ui/components/EsqTabListComponent.scss
A	projects/esquire.ui/components/EsqTabListComponent.ts
A	projects/esquire.ui/components/EsqTabStringComponent.html
A	projects/esquire.ui/components/EsqTabStringComponent.scss
A	projects/esquire.ui/components/EsqTabStringComponent.ts
A	projects/esquire.ui/components/EsqUtils.ts
A	projects/esquire.ui/components/ng-package.json
A	projects/esquire.ui/components/public-api.ts
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.scss
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
A	projects/esquire.ui/explorer/flatTree/EsqFlatTreeDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqListViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqTreeViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/loading.16.gif
A	projects/esquire.ui/explorer/flatTree/ng-package.json
A	projects/esquire.ui/explorer/flatTree/public-api.ts
A	projects/esquire.ui/ng-package.json
A	projects/esquire.ui/package.json
A	projects/esquire.ui/public-api.ts
A	projects/esquire.ui/tsconfig.lib.json
A	projects/esquire.ui/tsconfig.lib.prod.json
A	projects/esquire.ui/tsconfig.spec.json
A	tsconfig.json


-- 2025-12-26 | commit: e9b0fbb | mir0n.the.programmer | Initial commit --
A	.gitignore
A	LICENSE
A	README.md


-- 2025-12-26 | commit: 44283b2 | mir0n.the.programmer | Initial commit --
A	.gitignore
A	LICENSE
A	README.md
 52 files changed, 3636 insertions(+), 1 deletion(-)

 52 files changed, 3636 insertions(+), 1 deletion(-)

 3 files changed, 703 insertions(+)

 3 files changed, 703 insertions(+)

-- 2025-12-26 | commit: 1ec0473 | mir0n.the.programmer | initial version v1.0.2 --
A	.npmrc
M	README.md
A	angular.json
A	doc/release_notes.txt
A	package.json
A	projects/esquire.ui/README.md
A	projects/esquire.ui/api/AsEsqTreeNodePipe.spec.ts
A	projects/esquire.ui/api/AsEsqTreeNodePipe.ts
A	projects/esquire.ui/api/EsqDictionaryApi.ts
A	projects/esquire.ui/api/EsqEntityDictionary.ts
A	projects/esquire.ui/api/EsqExplorerCallApi.ts
A	projects/esquire.ui/api/EsqNodeStatusFactory.ts
A	projects/esquire.ui/api/EsqNodeTypeFactory.ts
A	projects/esquire.ui/api/EsqRestApi.ts
A	projects/esquire.ui/api/EsqTreeNode.ts
A	projects/esquire.ui/api/EsqTreeNodeDto.ts
A	projects/esquire.ui/api/ng-package.json
A	projects/esquire.ui/api/public-api.ts
A	projects/esquire.ui/changes.txt
A	projects/esquire.ui/components/EsqDetailsDialog.scss
A	projects/esquire.ui/components/EsqDictionary.ts
A	projects/esquire.ui/components/EsqEntityDetailsDialog.html
A	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
A	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
A	projects/esquire.ui/components/EsqNodeDetailsDialog.html
A	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
A	projects/esquire.ui/components/EsqResizeDirective.ts
A	projects/esquire.ui/components/EsqTabListComponent.html
A	projects/esquire.ui/components/EsqTabListComponent.scss
A	projects/esquire.ui/components/EsqTabListComponent.ts
A	projects/esquire.ui/components/EsqTabStringComponent.html
A	projects/esquire.ui/components/EsqTabStringComponent.scss
A	projects/esquire.ui/components/EsqTabStringComponent.ts
A	projects/esquire.ui/components/EsqUtils.ts
A	projects/esquire.ui/components/ng-package.json
A	projects/esquire.ui/components/public-api.ts
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.scss
A	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
A	projects/esquire.ui/explorer/flatTree/EsqFlatTreeDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqListViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqTreeViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/loading.16.gif
A	projects/esquire.ui/explorer/flatTree/ng-package.json
A	projects/esquire.ui/explorer/flatTree/public-api.ts
A	projects/esquire.ui/ng-package.json
A	projects/esquire.ui/package.json
A	projects/esquire.ui/public-api.ts
A	projects/esquire.ui/tsconfig.lib.json
A	projects/esquire.ui/tsconfig.lib.prod.json
A	projects/esquire.ui/tsconfig.spec.json
A	tsconfig.json


-- 2025-12-26 | commit: 44283b2 | mir0n.the.programmer | Initial commit --
A	.gitignore
A	LICENSE
A	README.md


-- 2025-12-26 | commit: e9b0fbb | mir0n.the.programmer | Initial commit --
A	.gitignore
A	LICENSE
A	README.md
 52 files changed, 3636 insertions(+), 1 deletion(-)

 3 files changed, 703 insertions(+)

 3 files changed, 703 insertions(+)

-- 2025-12-26 | commit: e9b0fbb | mir0n.the.programmer | Initial commit --
A	.gitignore
A	LICENSE
A	README.md


-- 2025-12-26 | commit: 44283b2 | mir0n.the.programmer | Initial commit --
A	.gitignore
A	LICENSE
A	README.md
 3 files changed, 703 insertions(+)

 3 files changed, 703 insertions(+)
```

---

## Files Modified

```
A	.editorconfig
D	LICENSE
M	README.md
M	angular.json
A	build-yalc.bat
A	build.bat
A	doc/custom-dialog-design.md
A	doc/esquire.ui-details.md
A	doc/fieldType.md
A	doc/kind.context.md
A	doc/permissions.md
M	doc/release_notes.txt
A	doc/reports/report_2026_04_19_31750f3.md
A	doc/validations.md
A	doc/yalc-vs-git.md
A	git-publish.bat
M	package.json
D	projects/esquire.ui/README.md
A	projects/esquire.ui/api/EsqAccessProfile.ts
A	projects/esquire.ui/api/EsqContextMenuBuilder.ts
M	projects/esquire.ui/api/EsqDictionaryApi.ts
A	projects/esquire.ui/api/EsqEntityCommandHandler.ts
M	projects/esquire.ui/api/EsqEntityDictionary.ts
M	projects/esquire.ui/api/EsqExplorerCallApi.ts
M	projects/esquire.ui/api/EsqNodeStatusFactory.ts
D	projects/esquire.ui/api/EsqNodeTypeFactory.ts
A	projects/esquire.ui/api/EsqObjectKind.ts
A	projects/esquire.ui/api/EsqObjectKindFactory.ts
M	projects/esquire.ui/api/EsqRestApi.ts
M	projects/esquire.ui/api/EsqTreeNode.ts
M	projects/esquire.ui/api/EsqTreeNodeDto.ts
A	projects/esquire.ui/api/EsqUtils.ts
A	projects/esquire.ui/api/EsqValidationError.ts
A	projects/esquire.ui/api/ProblemDetail.ts
M	projects/esquire.ui/api/public-api.ts
M	projects/esquire.ui/changes.txt
A	projects/esquire.ui/components/EsqAccessProfileDialog.html
A	projects/esquire.ui/components/EsqAccessProfileDialog.ts
A	projects/esquire.ui/components/EsqConfirmDialog.html
A	projects/esquire.ui/components/EsqConfirmDialog.ts
A	projects/esquire.ui/components/EsqCreateEntityDialog.ts
M	projects/esquire.ui/components/EsqDetailsDialog.scss
A	projects/esquire.ui/components/EsqDialogResizeDirective.ts
M	projects/esquire.ui/components/EsqDictionary.ts
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqEntityDetailsDialog.ts
M	projects/esquire.ui/components/EsqExplorerCallApiMill.ts
M	projects/esquire.ui/components/EsqNodeDetailsDialog.html
M	projects/esquire.ui/components/EsqNodeDetailsDialog.ts
A	projects/esquire.ui/components/EsqNodeDialog.html
A	projects/esquire.ui/components/EsqNodeDialog.ts
A	projects/esquire.ui/components/EsqSingleEntryDialog.html
A	projects/esquire.ui/components/EsqSingleEntryDialog.ts
A	projects/esquire.ui/components/EsqTabFieldComponent.html
A	projects/esquire.ui/components/EsqTabFieldComponent.ts
A	projects/esquire.ui/components/EsqTabIknListComponent.html
A	projects/esquire.ui/components/EsqTabIknListComponent.ts
A	projects/esquire.ui/components/EsqTabIknfTableComponent.html
A	projects/esquire.ui/components/EsqTabIknfTableComponent.ts
M	projects/esquire.ui/components/EsqTabListComponent.html
M	projects/esquire.ui/components/EsqTabListComponent.scss
M	projects/esquire.ui/components/EsqTabListComponent.ts
M	projects/esquire.ui/components/EsqTabStringComponent.html
M	projects/esquire.ui/components/EsqTabStringComponent.ts
D	projects/esquire.ui/components/EsqUtils.ts
A	projects/esquire.ui/components/commands/EsqCommandHandlerRegistry.ts
A	projects/esquire.ui/components/commands/EsqDefaultCommandHandler.ts
A	projects/esquire.ui/components/commands/EsqDeleteCommandHandler.ts
A	projects/esquire.ui/components/commands/EsqKeyCommandHandler.ts
A	projects/esquire.ui/components/loading.16.gif
M	projects/esquire.ui/components/public-api.ts
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.html
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.scss
M	projects/esquire.ui/explorer/flatTree/EsqExplorerComponent.ts
M	projects/esquire.ui/explorer/flatTree/EsqFlatTreeDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqFlatTreeSelector.ts
M	projects/esquire.ui/explorer/flatTree/EsqListViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/EsqSelectEntityDatasource.ts
M	projects/esquire.ui/explorer/flatTree/EsqTreeViewDatasource.ts
A	projects/esquire.ui/explorer/flatTree/components/EsqMoveCommandHandler.ts
A	projects/esquire.ui/explorer/flatTree/components/EsqMoveDialog.ts
A	projects/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog.html
A	projects/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog.scss
A	projects/esquire.ui/explorer/flatTree/components/EsqSelectEntityDialog.ts
M	projects/esquire.ui/explorer/flatTree/public-api.ts
M	projects/esquire.ui/ng-package.json
M	projects/esquire.ui/package.json
A	projects/esquire.ui/test/group1/EsqAccessProfile.spec.ts
A	projects/esquire.ui/test/group1/EsqCommandHandlerRegistry.spec.ts
A	projects/esquire.ui/test/group1/EsqContextMenuBuilder.spec.ts
A	projects/esquire.ui/test/group1/EsqNodeStatusFactory.spec.ts
A	projects/esquire.ui/test/group1/EsqObjectKind.spec.ts
A	projects/esquire.ui/test/group1/EsqObjectKindFactory.spec.ts
A	projects/esquire.ui/test/group1/EsqTreeNode.spec.ts
A	projects/esquire.ui/test/group1/EsqTreeNodeDto.spec.ts
A	projects/esquire.ui/test/group1/EsqUtils.spec.ts
A	projects/esquire.ui/test/group2/EsqDictionary.spec.ts
A	projects/esquire.ui/test/group2/EsqFlatTreeDatasource.spec.ts
A	projects/esquire.ui/test/group2/EsqSelectEntityDatasource.spec.ts
A	projects/esquire.ui/test/group2/EsqTreeViewDatasource.spec.ts
A	projects/esquire.ui/test/group3/EsqAccessProfileDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqConfirmDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqEntityDetailsDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqExplorerComponent.spec.ts
A	projects/esquire.ui/test/group3/EsqMoveDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqNodeDetailsDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqNodeDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqSelectEntityDialog.spec.ts
A	projects/esquire.ui/test/group3/EsqSingleEntryDialog.spec.ts
A	projects/esquire.ui/test/test.structure.md
M	projects/esquire.ui/tsconfig.spec.json
M	tsconfig.json
 112 files changed, 13258 insertions(+), 1356 deletions(-)
```

---

*From `v1.2.0` till `v1.2.2`*
