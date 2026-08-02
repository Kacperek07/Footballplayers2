@echo off
REM Football Guesser - Installation & Setup Script for Windows
REM This script guides you through the setup process

:menu
cls
echo.
echo ====================================
echo  Football Guesser - Instalator
echo ====================================
echo.
echo Dostepne opcje:
echo.
echo  1. Zainstaluj Node.js (strona)
echo  2. Zainstaluj zaleznoci (npm install)
echo  3. Resetuj baze danych
echo  4. Uruchom gre
echo  5. Wyjscie
echo.
set /p choice="Wybierz opcje (1-5): "

if "%choice%"=="1" goto nodejs
if "%choice%"=="2" goto install
if "%choice%"=="3" goto resetdb
if "%choice%"=="4" goto start
if "%choice%"=="5" goto exit
goto menu

:nodejs
cls
echo.
echo Otwieranie strony pobierania Node.js...
echo (Zainstaluj LTS version)
echo.
start https://nodejs.org/
echo.
echo Po zainstalowaniu, uruchom ten skrypt ponownie.
echo.
pause
goto menu

:install
cls
echo.
echo Instaluje zaleznoci (to moze potrwac kilka minut)...
echo.
call npm install
if errorlevel 1 (
    echo.
    echo BLAD: Nie mozna zainstalowac zaleznoci!
    echo Sprawdz czy Node.js jest zainstalowany: npm --version
    echo.
    pause
    goto menu
)
echo.
echo OK: Zaleznoci zainstalowane!
echo.
pause
goto menu

:resetdb
cls
echo.
echo Resetuję bazę danych...
echo (Usuwam stary database.db i ładuję nowych zawodników)
echo.
call npm run reset-db
if errorlevel 1 (
    echo.
    echo BLAD: Nie mozna zresetowac bazy danych!
    echo.
    pause
    goto menu
)
echo.
echo OK: Baza danych zresetowana!
echo.
pause
goto menu

:start
cls
echo.
echo ====================================
echo  Football Guesser - Uruchamianie
echo ====================================
echo.
echo Serwer startuje na:
echo http://localhost:5000
echo.
echo Nacisnij Ctrl+C aby zatrzymac serwer
echo.
call npm start
goto menu

:exit
cls
echo.
echo Dzieki za gre! Do zobaczenia!
echo.
pause
