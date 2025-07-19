@echo off
schtasks /create /tn "MyTask" /tr "C:\path\to\script.cmd" /sc daily /st 09:00