# 📚 Dokumentacja - Indeks Plików

## 🚀 Zacznij Tutaj

- **[QUICK_START.md](QUICK_START.md)** ⚡
  - Najszybsza możliwa instalacja (2 minuty)
  - Dla niecierpliwych
  - Wymaga Node.js

- **[GETTING_STARTED.md](GETTING_STARTED.md)** 📝
  - Szczegółowa instalacja krok po kroku
  - Troubleshooting
  - Jak grać

## 📖 Instrukcje Specjalistyczne

- **[SETUP_PLAYERS.md](SETUP_PLAYERS.md)** 👥
  - Jak dodawać nowych zawodników
  - Struktura danych
  - Gdzie umieszczać zdjęcia
  - Wytyczne dla obrazów

- **[README.md](README.md)** 📄
  - Ogółne informacje o projekcie
  - Cechy gry
  - API dokumentacja
  - Struktura folderów

- **[CHANGELOG.md](CHANGELOG.md)** 📋
  - Podsumowanie zmian v2.0
  - Nowe funkcje
  - Jak działają wizualne wskazówki

## 📁 Główne Pliki Projektu

```
Football_guesser/
├── 📄 Dokumentacja
│   ├── README.md              ← Główny plik info
│   ├── QUICK_START.md         ← Szybki start
│   ├── GETTING_STARTED.md     ← Szczegółowa instalacja
│   ├── SETUP_PLAYERS.md       ← Dodawanie zawodników
│   ├── CHANGELOG.md           ← Co się zmieniło
│   └── DOCUMENTATION.md       ← Ten plik
│
├── 🖥️ Windows Scripts (GUI)
│   ├── setup.bat              ← Kliknij: Instalacja
│   ├── start.bat              ← Kliknij: Uruchom grę
│   └── reset-db.bat           ← Kliknij: Reset bazy
│
├── 💻 Kod
│   ├── server.js              ← Express serwer
│   ├── database.js            ← SQLite + zawodnicy
│   ├── reset-database.js      ← Skrypt resetowania
│   └── public/index.html      ← Gra (HTML+CSS+JS)
│
├── 📦 Konfiguracja
│   ├── package.json           ← Zależności
│   ├── .gitignore             ← Git ignorowanie
│   └── database.db            ← Baza danych (auto-tworzona)
│
└── 📸 Obrazy (umieść tu swoje!)
    └── images/
        ├── players/           ← Zdjęcia zawodników
        ├── clubs/             ← Herby klubów
        ├── flags/             ← Flagi krajów
        └── leagues/           ← Logo lig
```

## 🎮 Jak Zacząć?

### ✅ Jeśli chcesz szybko zagrać
→ [QUICK_START.md](QUICK_START.md)

### ✅ Jeśli potrzebujesz szczegółów
→ [GETTING_STARTED.md](GETTING_STARTED.md)

### ✅ Jeśli chcesz dodać zawodników
→ [SETUP_PLAYERS.md](SETUP_PLAYERS.md)

### ✅ Jeśli chcesz poznać co się zmieniło
→ [CHANGELOG.md](CHANGELOG.md)

### ✅ Jeśli szukasz API dokumentacji
→ [README.md](README.md#-api-endpoints)

## 🆘 Problemy?

### Windows
1. Upewnij się że zainstalowałeś Node.js
2. Kliknij `setup.bat`
3. Kliknij `reset-db.bat` (WAŻNE!)
4. Kliknij `start.bat`

### Mac/Linux Terminal
```bash
npm install
npm run reset-db
npm start
```

### Nie działa?
- Sprawdź [GETTING_STARTED.md](GETTING_STARTED.md#-rozwiązywanie-problemów)
- Sprawdź Console (F12) na błędy

## 💡 Porady

- Zawsze resetuj bazę danych (`reset-db`) po zmianach w `database.js`
- Obrazy mogą być JPG, PNG, SVG - SVG są optymalne
- Port 5000 musi być wolny (lub zmień w `server.js`)
- Aby wyłączyć serwer: Ctrl+C w terminalu

## 📚 Zasoby

### Gdzie znaleźć materiały?
- **Flagi**: Wikimedia Commons SVG flags
- **Logo lig**: Oficjalne strony lig
- **Herby**: Transfermarkt.com
- **Zdjęcia**: Player headshots ze stron lig

### Formaty Obrazów
| Typ | Rozmiar | Format |
|-----|---------|--------|
| Zawodnik | 300x400px | JPG, PNG |
| Herb klubu | 120x120px | SVG, PNG |
| Flaga | 100x70px | SVG, PNG |
| Logo ligi | 100x100px | SVG, PNG |

## 🎯 Następne Kroki

1. **Zainstaluj Node.js** (jeśli nie masz)
2. **Przejdź do [QUICK_START.md](QUICK_START.md)**
3. **Graj!** ⚽

## ❓ FAQ

**P: Czy potrzebuję internetu?**
O: Nie! Wszystko działa lokalnie.

**P: Czy mogę zmienić port?**
O: Tak! Edytuj `server.js` - zmień `const PORT = 5000` na inny.

**P: Jak dodać 100 zawodników?**
O: Edytuj `database.js`, dodaj do tablicy `PLAYERS`. Resetuj `npm run reset-db`.

**P: Czy działa na mobilnym przeglądarku?**
O: Tak! Gra jest w pełni responsywna. Serwer musi być dostępny (np. na tej samej sieci).

**P: Czy mogę osadzić grę na stronie?**
O: Tak! Zamiast `npm start` użyj istniejącego serwera (nginx, apache, itp.)

---

**Gotów zaczynać?** → Przejdź do [QUICK_START.md](QUICK_START.md) 🚀
