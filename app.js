const express = require('express');
const app = express();

// Nomor WhatsApp tujuan Anda
const waNumber = '6285380779466';
const waUrl = `https://wa.me/${waNumber}`;

app.get('/', (req, res) => {
  res.redirect(301, waUrl);
});

app.get('*', (req, res) => {
  res.redirect(301, waUrl);
});

// PENTING: Untuk Vercel, kita export app-nya, BUKAN menggunakan app.listen()
module.exports = app;
