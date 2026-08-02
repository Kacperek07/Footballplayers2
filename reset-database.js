import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔄 Resetuję bazę danych...\n');

// Remove existing database
if (fs.existsSync('./database.db')) {
  fs.unlinkSync('./database.db');
  console.log('✓ Stara baza danych usunięta\n');
}

// Import and run initialization
import('./database.js').then(module => {
  module.initializeDatabase().then(() => {
    console.log('✓ Nowa baza danych stworzona!');
    console.log('✓ Zawodnicy zostali załadowani!\n');
    console.log('🎮 Gra gotowa do uruchomienia: npm start\n');
    process.exit(0);
  }).catch(err => {
    console.error('❌ Błąd podczas inicjalizacji:', err);
    process.exit(1);
  });
}).catch(err => {
  console.error('❌ Błąd importu:', err);
  process.exit(1);
});
