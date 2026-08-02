import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { initializeDatabase, getDatabase } from './database.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const db = getDatabase();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize database on server start
await initializeDatabase();

// API Endpoints

// Get random player
app.get('/api/player/random', (req, res) => {
  db.get('SELECT * FROM players ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(row);
    }
  });
});

// Search players by name
app.get('/api/players/search', (req, res) => {
  const query = req.query.q || '';
  const searchPattern = `%${query}%`;
  
  db.all(
    'SELECT id, name, club FROM players WHERE name LIKE ? LIMIT 10',
    [searchPattern],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows || []);
      }
    }
  );
});

// Get player by ID
app.get('/api/player/:id', (req, res) => {
  const playerId = req.params.id;
  
  db.get('SELECT * FROM players WHERE id = ?', [playerId], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: 'Player not found' });
    } else {
      res.json(row);
    }
  });
});

// Get all players (for hints/filtering)
app.get('/api/players', (req, res) => {
  db.all('SELECT * FROM players', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows || []);
    }
  });
});

// Check if guess is correct
app.post('/api/guess', (req, res) => {
  const { playerId, guessId } = req.body;
  
  const correct = parseInt(playerId) === parseInt(guessId);
  
  db.get('SELECT * FROM players WHERE id = ?', [guessId], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({
        correct,
        player: row
      });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
