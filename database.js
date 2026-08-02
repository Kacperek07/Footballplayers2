import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new sqlite3.Database('./database.db');

const PLAYERS = [
  { name: 'Cristiano Ronaldo', position: 'Forward', nationality: 'Portugal', league: 'Saudi Pro League', club: 'Al Nassr', preferredFoot: 'Right', height: 185, playerImage: 'Cristiano_Ronaldo.webp', clubImage: 'Al-nassr.png', flagImage: 'Portugalia.png', leagueImage: 'Saudi_Pro_League.png' },
  { name: 'Lionel Messi', position: 'Forward', nationality: 'Argentina', league: 'MLS', club: 'Inter Miami', preferredFoot: 'Left', height: 170, playerImage: 'Lionel_Messi.webp', clubImage: 'Inter_Miami.png', flagImage: 'Argentyna.png', leagueImage: 'Major_League_Soccer.png' },
  { name: 'Robert Lewandowski', position: 'Forward', nationality: 'Poland', league: 'MLS', club: 'Chicago Fire', preferredFoot: 'Right', height: 186, playerImage: 'Robert_Lewandowski.webp', clubImage: 'placeholder.svg', flagImage: 'Polska.png', leagueImage: 'Laliga.png' },
  { name: 'Kylian Mbappé', position: 'Forward', nationality: 'France', league: 'La Liga', club: 'Real Madrid', preferredFoot: 'Right', height: 180, playerImage: 'Kylian_Mbappe.webp', clubImage: 'Real_Madryt.png', flagImage: 'Francja.png', leagueImage: 'Laliga.png' },
  { name: 'Vinicius Junior', position: 'Forward', nationality: 'Brazil', league: 'La Liga', club: 'Real Madrid', preferredFoot: 'Left', height: 176, playerImage: 'Vinicius_Junior.webp', clubImage: 'Real_Madryt.png', flagImage: 'Brazylia.png', leagueImage: 'Laliga.png' },
  { name: 'Erling Haaland', position: 'Forward', nationality: 'Norway', league: 'Premier League', club: 'Manchester City', preferredFoot: 'Right', height: 195, playerImage: 'Erling_Haaland.webp', clubImage: 'Manchester_City.png', flagImage: 'Norwegia.png', leagueImage: 'Premier_League.png' },
  { name: 'Harry Kane', position: 'Forward', nationality: 'England', league: 'Bundesliga', club: 'Bayern Munich', preferredFoot: 'Right', height: 188, playerImage: 'Harry_Kane.webp', clubImage: 'Bayern_Monachium.png', flagImage: 'Anglia.png', leagueImage: 'Bundesliga.png' },
  { name: 'Luka Modrić', position: 'Midfielder', nationality: 'Croatia', league: 'Serie A', club: 'AC Milan', preferredFoot: 'Right', height: 172, playerImage: 'Luka_Modric.webp', clubImage: 'AC_Milan.png', flagImage: 'Chorwacja.png', leagueImage: 'Serie_A.png' },
  { name: 'Neymar Jr', position: 'Forward', nationality: 'Brazil', league: 'Brasileiro_Serie_A', club: 'Santos', preferredFoot: 'Right', height: 175, playerImage: 'Neymar.webp', clubImage: 'Santos.png', flagImage: 'Brazylia.png', leagueImage: 'Brasileiro_Serie_A.png' },
  { name: 'Virgil van Dijk', position: 'Defender', nationality: 'Netherlands', league: 'Premier League', club: 'Liverpool', preferredFoot: 'Right', height: 193, playerImage: 'Virgil_van_Dijk.webp', clubImage: 'Liverpool.png', flagImage: 'Holandia.png', leagueImage: 'Premier_League.png' },
  { name: 'Manuel Neuer', position: 'Goalkeeper', nationality: 'Germany', league: 'Bundesliga', club: 'Bayern Munich', preferredFoot: 'Right', height: 193, playerImage: 'Manuel_Neuer.webp', clubImage: 'Bayern_Monachium.png', flagImage: 'Niemcy.png', leagueImage: 'Bundesliga.png' },
  { name: 'Gianluigi Donnarumma', position: 'Goalkeeper', nationality: 'Italy', league: 'Premier League', club: 'Manchester City', preferredFoot: 'Right', height: 196, playerImage: 'Gianluigi_Donnarumma.webp', clubImage: 'Manchester_City.png', flagImage: 'Wlochy.png', leagueImage: 'Premier_League.png' },
  { name: 'Jude Bellingham', position: 'Midfielder', nationality: 'England', league: 'La Liga', club: 'Real Madrid', preferredFoot: 'Right', height: 180, playerImage: 'Jude_Bellingham.webp', clubImage: 'Real_Madryt.png', flagImage: 'Anglia.png', leagueImage: 'Laliga.png' }
];

function runSql(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
}

function finalizeStatement(stmt) {
  return new Promise((resolve, reject) => {
    stmt.finalize((err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

export async function initializeDatabase() {
  await runSql(`
    CREATE TABLE IF NOT EXISTS players (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      position TEXT NOT NULL,
      nationality TEXT NOT NULL,
      league TEXT NOT NULL,
      club TEXT NOT NULL,
      preferredFoot TEXT NOT NULL,
      height INTEGER NOT NULL,
      playerImage TEXT NOT NULL,
      clubImage TEXT NOT NULL,
      flagImage TEXT NOT NULL,
      leagueImage TEXT NOT NULL
    )
  `);

  const stmt = db.prepare(`
    INSERT INTO players (name, position, nationality, league, club, preferredFoot, height, playerImage, clubImage, flagImage, leagueImage)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(name) DO UPDATE SET
      position = excluded.position,
      nationality = excluded.nationality,
      league = excluded.league,
      club = excluded.club,
      preferredFoot = excluded.preferredFoot,
      height = excluded.height,
      playerImage = excluded.playerImage,
      clubImage = excluded.clubImage,
      flagImage = excluded.flagImage,
      leagueImage = excluded.leagueImage
  `);

  try {
    for (const player of PLAYERS) {
      await new Promise((resolve, reject) => {
        stmt.run(
          player.name,
          player.position,
          player.nationality,
          player.league,
          player.club,
          player.preferredFoot,
          player.height,
          player.playerImage,
          player.clubImage,
          player.flagImage,
          player.leagueImage,
          (err) => {
            if (err) reject(err);
            else resolve();
          }
        );
      });
    }

    await finalizeStatement(stmt);
  } catch (error) {
    await finalizeStatement(stmt).catch(() => {});
    throw error;
  }
}

export function getDatabase() {
  return db;
}
