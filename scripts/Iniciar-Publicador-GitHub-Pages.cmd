@echo off
setlocal
title Operacional local - Lamina ao investidor
cd /d "%~dp0\.."
set "NODE_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%NODE_EXE%" (
  "%NODE_EXE%" "scripts\github-pages-publisher.mjs"
) else (
  node "scripts\github-pages-publisher.mjs"
)
pause
