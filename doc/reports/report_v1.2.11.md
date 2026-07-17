# Release Report: v1.2.3 → v1.2.11

**Repo:** `esquire.ui.lib/develop`  
**Top commit:** `07065a1`

---

## Release Notes

### doc/release_notes.txt


**v1.2.11-2607.0600** v1.2.11 -- Details dialog closes on Esc for an editable entity without a preceding Tab  

---

## Code Changes

### projects/esquire.ui/changes.txt


**07/06/2026** mir0n  Details dialog: focus enters the dialog on open (Esc closes without a Tab)  
**components\EsqEntityDetailsDialog.html**  
&nbsp;- #btnClose ref on the editable/create Close button so focus enters the dialog on open  
**components\EsqNodeDetailsDialog.html**  
&nbsp;- #btnClose ref on the editable Close button so focus enters the dialog on open  

---

## Commits

```

-- 2026-07-06 | commit: 07065a1 | mir0n.the.programmer | v1.2.11 -- Details dialog closes on Esc for an editable entity without a preceding Tab --
M	doc/release_notes.txt
M	pkg/mir0n-pro-esquire.ui-1.2.11.tgz
M	pkg/mir0n-pro-esquire.ui-latest.tgz
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqNodeDetailsDialog.html
M	projects/esquire.ui/package.json
 7 files changed, 16 insertions(+), 6 deletions(-)

-- 2026-07-05 | commit: 3bfeb74 | mir0n.the.programmer | v1.2.11 -- version bump --
M	package.json
A	pkg/mir0n-pro-esquire.ui-1.2.11.tgz
A	pkg/mir0n-pro-esquire.ui-latest.tgz
 3 files changed, 1 insertion(+), 1 deletion(-)

-- 2026-05-07 | commit: 2fbb72e | mir0n.the.programmer | reports --
D	doc/reports/report_2026_04_19_31750f3.md
A	doc/reports/report_v1.2.2.md
A	doc/reports/report_v1.2.3.md
 3 files changed, 1155 insertions(+), 1698 deletions(-)

```

---

## Files Modified

```
M	doc/release_notes.txt
D	doc/reports/report_2026_04_19_31750f3.md
A	doc/reports/report_v1.2.2.md
A	doc/reports/report_v1.2.3.md
M	package.json
A	pkg/mir0n-pro-esquire.ui-1.2.11.tgz
A	pkg/mir0n-pro-esquire.ui-latest.tgz
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqEntityDetailsDialog.html
M	projects/esquire.ui/components/EsqNodeDetailsDialog.html
M	projects/esquire.ui/package.json
 11 files changed, 1172 insertions(+), 1705 deletions(-)
```

---

*From `v1.2.3` till `v1.2.11`*
