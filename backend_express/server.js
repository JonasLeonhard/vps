'use strict';

const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/api', (req, res) => {
  res.send('Welcome to the api service. This is currently under construction.');
});

app.listen(PORT, HOST);
console.log(`Backend -> Running on http://${HOST}:${PORT}`);