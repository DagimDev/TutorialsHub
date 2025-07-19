@echo off
powershell -Command "(gc file.txt) -replace 'old','new' | Out-File file.txt"