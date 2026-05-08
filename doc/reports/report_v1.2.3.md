# Release Report: v1.2.2 → v1.2.3

**Repo:** `esquire.ui.lib/develop`  
**Top commit:** `468e149`

---

## Release Notes

### doc/release_notes.txt


**v1.2.3-2605.0720** normalize(): Clear the lowest bit instead use of math.floor  

**v1.2.3-2605.0412** v1.2.3 Mobile point device friendly  

---

## Code Changes

### projects/esquire.ui/changes.txt


**05/07/2026**  normalize(): Clear the lowest bit instead use of math.floor  
**api\EsqObjectKindFactory.ts**  
&nbsp;- normalize(): Clear the lowest bit : rounds odd kinds down to their canonical even.  

**05/03/2026** mir0n  Mobile point device friendly  
**components\EsqDialogResizeDirective.ts**  
&nbsp;- Mobile point device friendly  
**components\EsqResizeDirective.ts**  
&nbsp;- Mobile point device friendly  

---

## Commits

```

-- 2026-05-07 | commit: 468e149 | mir0n.the.programmer | version bump + normalize() fix --
M	doc/release_notes.txt
M	package.json
A	pkg/mir0n-pro-esquire.ui-1.2.3.tgz
M	projects/esquire.ui/api/EsqObjectKindFactory.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/package.json
 6 files changed, 12 insertions(+), 3 deletions(-)

-- 2026-05-03 | commit: d290c6c | mir0n.the.programmer | Mobile point device friendly --
M	doc/release_notes.txt
A	pkg/mir0n-pro-esquire.ui-1.2.2.tgz
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqDialogResizeDirective.ts
M	projects/esquire.ui/components/EsqResizeDirective.ts
 5 files changed, 71 insertions(+), 35 deletions(-)
```

---

## Files Modified

```
M	doc/release_notes.txt
M	package.json
A	pkg/mir0n-pro-esquire.ui-1.2.2.tgz
A	pkg/mir0n-pro-esquire.ui-1.2.3.tgz
M	projects/esquire.ui/api/EsqObjectKindFactory.ts
M	projects/esquire.ui/changes.txt
M	projects/esquire.ui/components/EsqDialogResizeDirective.ts
M	projects/esquire.ui/components/EsqResizeDirective.ts
M	projects/esquire.ui/package.json
 9 files changed, 83 insertions(+), 38 deletions(-)
```

---

*From `v1.2.2` till `v1.2.3`*
