@echo off

:: Initialize CMD mastery project
echo Advanced CMD Tutorial > NUL

:: Implement error handling
if not exist "C:\Windows" (
    echo Error: Windows directory missing! >&2
    exit /b 1
)

:: Add colored output
echo [92mSuccess message[0m
:: Requires ANSI support (Win 10+): reg add HKCU\Console /v VirtualTerminalLevel /t REG_DWORD /d 1

:: Create dynamic variables
set /a result=5+3
echo Math result: %result%

:: Implement string manipulation
set str=HelloWorld
echo Substring: %str:~0,5%
