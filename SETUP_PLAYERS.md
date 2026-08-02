# 📋 Instrukcja Zarządzania Grą Guess The Player

## 🎯 Dodawanie Nowych Zawodników

### Krok 1: Edytuj plik `database.js`

Otwórz plik `database.js` i znajdź tablicę `PLAYERS`. Każdy zawodnik musi mieć następujące pola:

```javascript
{ 
  name: 'Imię Zawodnika',              // Pełne imię i nazwisko
  position: 'Forward',                 // Position: Forward, Midfielder, Defender, Goalkeeper
  nationality: 'Country',              // Nazwa kraju (np. Poland, France, Brazil)
  league: 'Liga',                      // Nazwa ligi (np. Premier League, La Liga, Bundesliga)
  club: 'Nazwa Klubu',                 // Pełna nazwa klubu
  preferredFoot: 'Right',              // Right lub Left
  height: 180,                         // Wzrost w cm (liczba)
  playerImage: 'nazwa.svg',            // Nazwa zdjęcia zawodnika (w /public/images/players/)
  clubImage: 'nazwa.svg',              // Nazwa herbu klubu (w /public/images/clubs/)
  flagImage: 'nazwa.svg',              // Nazwa flagi kraju (w /public/images/flags/)
  leagueImage: 'nazwa.svg'             // Nazwa logo ligi (w /public/images/leagues/)
}
```

### Krok 2: Dodaj obrazy do folderów

Umieść obrazy w odpowiednich folderach:

**Zdjęcia zawodników** → `/public/images/players/`
- Format: JPG, PNG, SVG
- Rozmiar: 300x400 px (najlepiej)
- Nazwa: Dowolna (np. `ronaldo.jpg`, `messi.png`)

**Herby klubów** → `/public/images/clubs/`
- Format: SVG lub PNG (przezroczyste tło)
- Rozmiar: 120x120 px
- Nazwa: Dowolna (np. `real_madrid.svg`)

**Flagi krajów** → `/public/images/flags/`
- Format: SVG lub PNG
- Rozmiar: 100x70 px
- Nazwa: Dowolna (np. `poland.svg`)

**Logo lig** → `/public/images/leagues/`
- Format: SVG lub PNG
- Rozmiar: 100x100 px
- Nazwa: Dowolna (np. `premier_league.svg`)

### Krok 3: Resetuj bazę danych

1. Zatrzymaj serwer (naciśnij Ctrl+C)
2. Usuń plik `database.db` (jeśli istnieje)
3. Uruchom serwer ponownie - baza zostanie stworzona z nowymi zawodnikami

```bash
npm start
```

## 📝 Przykład Dodawania Zawodnika

```javascript
{
  name: 'Jan Kowalski',
  position: 'Forward',
  nationality: 'Poland',
  league: 'Premier League',
  club: 'Manchester United',
  preferredFoot: 'Right',
  height: 185,
  playerImage: 'kowalski.jpg',
  clubImage: 'manchester_united.svg',
  flagImage: 'poland.svg',
  leagueImage: 'premier_league.svg'
}
```

## 🎨 Dobrych Praktyk

### Nazwy Zawodników
- Używaj pełnych imion (np. "Cristiano Ronaldo", nie "CR7")
- Konsekwentna wielkość liter
- Brak znaków specjalnych poza spacjami

### Atrybuty
- **Position**: Forward, Midfielder, Defender, Goalkeeper
- **Nationality**: Pełna nazwa kraju (np. "England", nie "UK")
- **League**: Pełna nazwa ligi (np. "Premier League", nie "EPL")
- **Height**: Zaokrąglij do pełnych cm

### Obrazy
- Zdjęcia zawodników: Wyczyść lub zamazane tło
- Wszystkie herby/flagi: Zoptymalizuj rozmiarem
- Format SVG: Preferowany dla logo (skaluje się bez utraty jakości)
- Fallback: Jeśli obraz się nie załaduje, wyświetli się placeholder

## 🔍 Weryfikacja

Po dodaniu nowych zawodników sprawdź:

1. **Syntaksja JavaScript** - Brak błędów w `database.js`
2. **Nazwy plików obrazów** - Dokładnie zgadzają się z wpisanymi ścieżkami
3. **Baza danych** - Usunąłeś stary `database.db` (jeśli jest)
4. **Serwer** - Uruchamia się bez błędów

## 🐛 Troubleshooting

**Problem: Obrazy się nie wyświetlają**
- Sprawdź czy pliki są w prawidłowych folderach
- Sprawdź czy nazwy dokładnie się zgadzają (case-sensitive na Linux/Mac)
- Otwórz DevTools (F12) i sprawdź Console na błędy

**Problem: Nowy zawodnik się nie pojawia**
- Edytuj `database.js` ✓
- Resetuj bazę danych (usuń `database.db`) ✓
- Uruchom serwer ponownie ✓

**Problem: Dane zawodnika nie są poprawne**
- Sprawdź czy wszystkie pola są wypełnione
- Sprawdź czy wartości są prawidłowego typu (string, number)
- Porównaj z przykładem zawodnika

## 🚀 Szybkie Powielanie Zawodnika

Aby szybko dodać zawodnika na podstawie istniejącego:

1. Skopiuj całą linijkę zawodnika
2. Zmień `name` na nową osobę
3. Dostosuj inne atrybuty
4. Zmień nazwy obrazów
5. Umieść obrazy w folderach

## 📚 Zasoby Online

Gdzie znaleźć flagi, logo lig itp:
- Flagi: Wikimedia Commons (SVG flags)
- Logo lig: Oficjalne strony lig
- Herby klubów: Transfermarkt.com, klubowe strony
- Zdjęcia zawodników: Player headshots ze stron lig

---

**Gotów dodać zawodników?** Start od kroku 1! 🎉
