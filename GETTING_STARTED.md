# 🚀 Instrukcja Pierwszego Uruchomienia

## ✅ Wymagania

- **Node.js** (v14+) - [Pobierz tutaj](https://nodejs.org/)
- **npm** (przychodzi z Node.js)

## 📝 Kroki Instalacji

### 1️⃣ Zainstaluj Node.js

Jeśli jeszcze nie masz Node.js:
1. Pobierz z https://nodejs.org/ (LTS version)
2. Zainstaluj program
3. Uruchom PowerShell/Terminal i sprawdź:
   ```bash
   node --version
   npm --version
   ```

### 2️⃣ Zainstaluj Zależności

W folderze projektu (`Football_guesser`):

**Windows (GUI):**
- Kliknij dwa razy na `setup.bat`

**Windows (Terminal/PowerShell):**
```bash
npm install
```

**Mac/Linux:**
```bash
npm install
```

### 3️⃣ Resetuj Bazę Danych (Ważne!)

Po dodaniu nowych zawodników lub zmianach w `database.js`:

**Windows:**
- Kliknij dwa razy na `reset-db.bat`

**Terminal:**
```bash
npm run reset-db
```

### 4️⃣ Uruchom Grę

**Windows (GUI):**
- Kliknij dwa razy na `start.bat`

**Terminal:**
```bash
npm start
```

### 5️⃣ Otwórz Grę w Przeglądarce

Przejdź do: **http://localhost:5000**

## 🎮 Jak Grać

1. Kliknij **"Graj Teraz"**
2. Zobaczysz zamazane zdjęcie zawodnika
3. Wpisz imię/nazwisko zawodnika
4. Wybierz z listy podpowiedzi
5. Masz **8 prób** - każda szansa to -10 pkt
6. Podpowiedzi pojawią się wizualnie z herbami klubów, flagami i logami lig
7. Poprawne atrybuty będą zaznaczone **zielono** ✅

## 📸 Dodawanie Nowych Zawodników

1. Otwórz plik `SETUP_PLAYERS.md` - pełne instrukcje
2. Edytuj plik `database.js` - dodaj zawodnika
3. Umieść obrazy w folderach:
   - `public/images/players/` - zdjęcia
   - `public/images/clubs/` - herby
   - `public/images/flags/` - flagi
   - `public/images/leagues/` - logo lig
4. Uruchom `reset-db.bat` lub `npm run reset-db`
5. Uruchom grę ponownie

## 🆘 Rozwiązywanie Problemów

### ❌ Node.js nie znaleziony
```
'node' is not recognized as an internal or external command
```
**Rozwiązanie**: Zainstaluj Node.js i uruchom PowerShell ponownie

### ❌ Port 5000 jest zajęty
```
listen EADDRINUSE: address already in use :::5000
```
**Rozwiązanie**: 
- Zamknij inną aplikację na porcie 5000
- Lub zmień port w `server.js`: `const PORT = 5001;`

### ❌ Obrazy się nie wyświetlają
**Rozwiązanie**:
- Sprawdź czy pliki znajdują się w prawidłowych folderach
- Otwórz DevTools (F12) i sprawdź Console
- Nazwy plików są case-sensitive na Linux/Mac

### ❌ Nowy zawodnik się nie pojawia
**Rozwiązanie**:
1. Edytowałeś `database.js`? ✓
2. Resetowałeś bazę danych? (`npm run reset-db`)✓
3. Uruchomiłeś serwer ponownie? ✓

### ❌ Baza danych znowu się resetuje
- To normalne! Przy każdym uruchomieniu serwer sprawdza, czy zawodnicy są załadowani
- Jeśli usuniesz `database.db`, będzie odtworzona automatycznie

## 📚 Struktura Folderów

```
Football_guesser/
├── server.js              ← Express API
├── database.js            ← Baza danych i zawodnicy
├── package.json           ← Zależności
├── setup.bat              ← Instalacja (Windows)
├── start.bat              ← Uruchom grę (Windows)
├── reset-db.bat           ← Reset bazy (Windows)
├── SETUP_PLAYERS.md       ← Instrukcja zarządzania
├── GETTING_STARTED.md     ← Ten plik
├── public/
│   ├── index.html         ← Gra (HTML+CSS+JS)
│   └── images/
│       ├── players/       ← Zdjęcia zawodników
│       ├── clubs/         ← Herby klubów
│       ├── flags/         ← Flagi krajów
│       └── leagues/       ← Logo lig
└── database.db            ← Baza danych (tworzona automatycznie)
```

## 💡 Porady

- Aby grać offline, potrzebujesz tylko Node.js (nie potrzebujesz internetu)
- Możesz prowadzić statystyki - modyfikuj grę aby zapisywać wyniki
- Proste dodawanie zawodników - każdy nowy wpis w tablicy `PLAYERS`
- Obrazy w SVG skalują się idealnie na każdym ekranie

## 🎉 Gotów?

1. Zainstaluj Node.js
2. Uruchom `setup.bat`
3. Kliknij `start.bat`
4. Graj! ⚽

Problemy? Sprawdź `SETUP_PLAYERS.md` i sekcję Troubleshooting powyżej!
