# Release Report: v1.2.11 → v1.2.15

**Repo:** `esquire.ui.lib/develop`  
**Top commit:** `b638cbd`

---

## Release Notes

### doc/release_notes.txt


**v1.2.15-2609.0523** v1.2.15 -- the Access Profile dialog reports what activation note  

---

## Code Changes

### projects/esquire.ui/changes.txt


**09/05/2026** mir0n  v1.2.15 -- the Access Profile activation note  
**components\EsqAccessProfileDialog.ts**  
&nbsp;- activationNote signal + ACTIVATION_NOTE; onSave() reads the pre-save connect flag  
**components\EsqAccessProfileDialog.html**  
&nbsp;- the activation note  
**components\EsqDetailsDialog.scss**  
&nbsp;- .esq-activation-note added  

---

## Commits

```

-- 2026-09-05 | commit: b638cbd | mir0n.the.programmer | v1.2.15 -- the Access Profile dialog reports what activation note --
M	doc/release_notes.txt
M	package.json
A	pkg/mir0n-pro-esquire.ui-1.2.15.tgz
M	pkg/mir0n-pro-esquire.ui-latest.tgz
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.html
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqDetailsDialog.scss
M	projects/esquire.ui/package.json
 9 files changed, 47 insertions(+), 6 deletions(-)

-- 2026-07-26 | commit: 218b770 | mir0n.the.programmer | Create report_v1.2.11.md --
M	README.md
A	doc/reports/report_v1.2.11.md
 2 files changed, 93 insertions(+)
```

---

## Files Modified

```
M	README.md
M	doc/release_notes.txt
A	doc/reports/report_v1.2.11.md
M	package.json
A	pkg/mir0n-pro-esquire.ui-1.2.15.tgz
M	pkg/mir0n-pro-esquire.ui-latest.tgz
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqAccessProfileDialog.html
M	projects/esquire.ui/components/EsqAccessProfileDialog.ts
M	projects/esquire.ui/components/EsqDetailsDialog.scss
M	projects/esquire.ui/package.json
 11 files changed, 140 insertions(+), 6 deletions(-)
```

---

*From `v1.2.11` till `v1.2.15`*
