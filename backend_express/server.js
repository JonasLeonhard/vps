'use strict';

const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Send backend dist here ...');
});

app.listen(PORT, HOST);
console.log(`Backend -> Running on http://${HOST}:${PORT}`);