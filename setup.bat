@echo off
echo.
echo ====================================
echo   Football Guesser - Setup Script
echo ====================================
echo.
echo Checking for Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please download and install Node.js from:
    echo https://nodejs.org/ (LTS version recommended)
    echo.
    pause
    exit /b 1
)

echo Node.js is installed!
echo.
echo Installing dependencies...
call npm install

if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ====================================
echo   Installation Complete!
echo ====================================
echo.
echo To start the game, run:
echo   npm start
echo.
echo Then open your browser and go to:
echo   http://localhost:5000
echo.
pause
