@echo off

:: Initialize CMD mastery project
echo Advanced CMD Tutorial > NUL

:: Implement error handling
if not exist "C:\Windows" (
    echo Error: Windows directory missing! >&2
    exit /b 1
)

