@echo off
setlocal enableDelayedExpansion
Set Location=%1
Set PatternName=*.java
set filepath=
set filename=
for /R "%Location%" %%i in (%PatternName%) do (
	set "filepath=%%~di%%~pi"
	set "filename=%%~ni%%~xi"
)
if '%filepath%'=='' (
	echo File tidak ditemukan
) else (
	:start
	set choice=
	set /p choice=%filename% ada, diganti namanya (y/t) 
	if '%choice%'=='' (
		echo pilihan y atau t
		goto start
	)
	if '%choice%'=='y' goto yes
	if '%choice%'=='t' goto no
	echo pilihan y atau t
	goto start
	:yes
	set newfilename=
	set /p newfilename=Masukkan nama file baru: 
	if '%newfilename%'=='' (
		echo Nama file baru tidak boleh kosong
		goto yes
	) else (
		ren %filename% %newfilename%.java
		goto end
	)
	:no
	echo ok, bye
	:end
	pause
)

