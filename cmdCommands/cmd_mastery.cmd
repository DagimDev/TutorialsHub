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

:: Add array simulation
set array[0]=First
set array[1]=Second
echo Array element: %array[1]%

:: Create multi-function script
call :hello World
goto :eof

:hello
echo Hello %~1!
exit /b

:: Implement file parsing
for /f "tokens=1,2 delims=," %%A in (data.csv) do (
    echo Column 1: %%A, Column 2: %%B
)

:: Add registry operations
:: reg add "HKCU\Software\MyApp" /v "Setting" /t REG_SZ /d "Value" /f

:: Create service controller
:: sc query state= all | findstr "SERVICE_NAME"

:: Implement network tools
ping -n 3 google.com | findstr "TTL"


:: Add scheduled task
:: schtasks /create /tn "Backup" /tr "C:\backup.cmd" /sc daily /st 23:00

:: Create user account
:: net user NewUser Password123 /add

:: Implement process killer
tasklist | findstr "notepad.exe" && taskkill /im notepad.exe /f