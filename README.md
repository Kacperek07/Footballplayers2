# ⚽ Guess The Player - Piłkarska Gra

Nowoczesna gra przeglądarkowa, w której gracz próbuje zgadnąć zawodnika piłki nożnej na podstawie zamazanego zdjęcia. 

## 🎮 Jak Grać

1. Kliknij **"Graj Teraz"** aby zacząć nową grę
2. Zobaczysz zamazane zdjęcie zawodnika
3. Masz **8 prób** aby zgadnąć kto to jest
4. Wpisz imię lub nazwisko zawodnika i wybierz z listy podpowiedzi
5. Za każdą poprawną odpowiedź na temat atrybutów zawodnika (pozycja, klub, itp.) otrzymasz podpowiedź (zdjęcie staje się bardziej wyraźne)
6. Punkty:
   - **1. proba**: 100 pkt
   - **2. proba**: 90 pkt
   - **3. proba**: 80 pkt
   - i tak dalej...

## ✨ Cechy

- 🎨 Elegancki, nowoczesny design z piłkarskimi motywami
- ⚡ Responsywny interfejs (desktop i mobile)
- 🎯 **Wizualne wskazówki** - herby klubów, flagi krajów, logo lig z automatycznym podświetlaniem
- 📊 System punktacji - im szybciej zgadniesz, tym więcej punktów
- 🔍 Wyszukiwanie zawodników z autouzupełnianiem
- 💾 Baza danych SQLite - łatwo rozbudować ilość zawodników z obrazami
- 🌍 Informacje o: pozycji, narodowości, lidze, klubie, lepszej nodze, wzroście
- ✅ Dynamiczne podświetlanie na zielono poprawnych atrybutów
- 📸 Obsługa obrazów: SVG, JPG, PNG dla maksymalnej elastyczności

## 📋 Wymagania

- Node.js (v14 lub wyższa)
- npm

## 🚀 Instalacja i Uruchomienie

### 1. Zainstaluj zależności
```bash
npm install
```

### 2. Uruchom serwer
```bash
npm start
```

Lub w trybie deweloperskim:
```bash
npm run dev
```

### 3. Otwórz grę w przeglądarce
```
http://localhost:5000
```

## 📁 Struktura Projektu

```
Football_guesser/
├── package.json           # Konfiguracja projektu
├── server.js             # Express serwer i API endpoints
├── database.js           # Inicjalizacja bazy danych SQLite
├── public/
│   └── index.html        # Frontend - gra (HTML + CSS + JS)
├── database.db           # Baza danych SQLite (tworzona automatycznie)
└── .gitignore
```

## 🔧 Rozbudowa Bazy Danych

Aby dodać nowych zawodników:

1. **Otwórz plik** `database.js`
2. **Edytuj tablicę** `PLAYERS` - dodaj nowych zawodników ze wszystkimi atrybutami
3. **Umieść obrazy** w odpowiednich folderach:
   - `/public/images/players/` - zdjęcia zawodników
   - `/public/images/clubs/` - herby klubów
   - `/public/images/flags/` - flagi krajów
   - `/public/images/leagues/` - logo lig

4. **Resetuj bazę danych**:
   - Usuń plik `database.db`
   - Uruchom serwer ponownie

**📋 Pełne instrukcje**: Przejrzyj plik `SETUP_PLAYERS.md` dla szczegółowych wytycznych.

Każdy zawodnik musi zawierać:
```javascript
{ 
  name: 'Imię Nazwisko',
  position: 'Forward|Midfielder|Defender|Goalkeeper',
  nationality: 'Kraj',
  league: 'Liga',
  club: 'Klub',
  preferredFoot: 'Right|Left',
  height: 185,  // w cm
  playerImage: 'nazwa.jpg',
  clubImage: 'herb.svg',
  flagImage: 'flaga.svg',
  leagueImage: 'liga.svg'
}
```

## 🛠️ API Endpoints

### GET `/api/player/random`
Zwraca losowego zawodnika

### GET `/api/players/search?q=<query>`
Wyszukuje zawodników po imieniu/nazwisku (max 10 wyników)

### GET `/api/player/:id`
Zwraca zawodnika po ID

### GET `/api/players`
Zwraca wszystkich zawodników

### POST `/api/guess`
Sprawdza poprawność odpowiedzi
```json
{
  "playerId": 1,
  "guessId": 2
}
```

## 🎨 Kolorystyka

- Główny kolor: **#e94560** (Czerwony piłkarski)
- Akcent: **#f39c12** (Złoty/Pomarańczowy)
- Zielony (poprawne odpowiedzi): **#23c66d**
- Tło: Ciemne niebieskie gradienty

## 📱 Responsywność

Gra jest w pełni responsywna i działa na:
- 🖥️ Desktop (1024px i większe)
- 📱 Tablet (768px - 1024px)
- 📲 Smartfony (320px - 768px)

## 🐛 Troubleshooting

### Problem: `Module not found`
**Rozwiązanie**: Upewnij się że zainstalowałeś zależności:
```bash
npm install
```

### Problem: Port 5000 jest już używany
**Rozwiązanie**: Zmień port w `server.js`:
```javascript
const PORT = process.env.PORT || 5001;  // Zmień na inny port
```

### Problem: Baza danych nie została załadowana
**Rozwiązanie**: Usuń plik `database.db` i uruchom serwer ponownie.

## 📝 Licencja

MIT

## 👨‍💻 Autor

Stworzone z ❤️ dla fanów piłki nożnej

---

Zabawy i powodzenia w zgadywaniu zawodników! ⚽
