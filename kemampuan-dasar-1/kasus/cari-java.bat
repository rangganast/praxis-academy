@echo off
setlocal enableDelayedExpansion
Set Location=%1
Set PatternName=*.java
for /R "%Location%" %%i in (%PatternName%) do set "filepath=%%~di%%~pi"
if '%filepath%'=='' (
	echo File tidak ditemukan
) else (
	echo Ada file Java pada direktori {%filepath%}
)
