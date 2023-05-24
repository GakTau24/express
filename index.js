const express = require('express');
const serverless = require('serverless-http')
const app = express();
const Trending = require('./src/trending')
const Pc = require('./src/pcgames');
const Mobile = require('./src/mobilegames');
const Apps = require('./src/apps')
const router = express.Router();

// Meng-handle permintaan GET ke endpoint /games
app.get('/trending', (req, res) => {
  res.json(Trending);
});
app.get('/trending/:slug', (req, res) => {
  const slug = req.params.slug;
  const item = Trending.find(item => item.slug === slug);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Data not found' });
  }
});

app.get('/pcgames', (req, res) => {
  res.json(Pc);
});
app.get('/pcgames/:slug', (req, res) => {
  const slug = req.params.slug;
  const item = Pc.find(item => item.slug === slug);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Data not found' });
  }
});

app.get('/mobilegames', (req, res) => {
  res.json(Mobile);
});
app.get('/mobilegames/:slug', (req, res) => {
  const slug = req.params.slug;
  const item = Mobile.find(item => item.slug === slug);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Data tidak ditemukan' });
  }
});
app.get('/apps', (req, res) => {
  res.json(Apps);
});
app.get('/apps/:slug', (req, res) => {
  const slug = req.params.slug;
  const item = Apps.find(item => item.slug === slug);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Data not found' });
  }
});

// Jalankan server pada port 3000
app.listen(5000, () => {
  console.log('Server berjalan pada port 5000');
});

module.exports = app;
module.exports.handler = serverless(app)