@echo off
cd /d "%~dp0"
pushd dist\esquire.ui
if errorlevel 1 (
    echo ERROR: dist\esquire.ui not found. Run npm run build first.
    exit /b 1
)
echo Publishing from: %CD%
call npm publish --userconfig "%~dp0.npmrc"
popd
