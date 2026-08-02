# ⚡ Szybki Start (2 minuty)

## Wymagania
- Node.js (https://nodejs.org/) - zainstaluj jeśli nie masz

## Kroki

### Windows (Kliknij 3 pliki)
1. **`setup.bat`** - zainstaluj
2. **`reset-db.bat`** - resetuj bazę (ważne!)
3. **`start.bat`** - uruchom grę
4. Otwórz: http://localhost:5000

### Mac/Linux (Terminal)
```bash
npm install
npm run reset-db
npm start
```

## 🎮 Graj!
- http://localhost:5000
- Kliknij "Graj Teraz"
- Wpisz imię zawodnika
- Masz 8 prób!

## 📸 Dodaj Zawodnika

1. Otwórz `database.js`
2. W tablicy `PLAYERS` dodaj zawodnika
3. Umieść zdjęcia w folderach:
   - `public/images/players/` - zdjęcie
   - `public/images/clubs/` - herb
   - `public/images/flags/` - flaga
   - `public/images/leagues/` - logo
4. Uruchom `reset-db.bat` (lub `npm run reset-db`)
5. Restart gry

## 📖 Pełne Instrukcje
- **GETTING_STARTED.md** - Instalacja
- **SETUP_PLAYERS.md** - Dodawanie zawodników
- **CHANGELOG.md** - Co się zmieniło

Gotów? **Kliknij `start.bat`** 🚀
