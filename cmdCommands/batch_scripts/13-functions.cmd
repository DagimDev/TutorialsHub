@echo off
call :hello World
exit /b

:hello
echo Hello %~1!
exit /b