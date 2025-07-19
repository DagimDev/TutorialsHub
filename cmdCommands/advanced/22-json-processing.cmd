@echo off
powershell -Command "Get-Content data.json | jq '.key'"