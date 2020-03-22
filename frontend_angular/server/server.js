'use strict';

const express = require('express');
const path = require('path');

const PORT = 4200;
const HOST = '0.0.0.0';

const app = express();

app.use(express.static(path.join(__dirname, '../frontend/dist/frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/frontend/index.html'));
});

app.listen(PORT, HOST);
console.log(`Frontend -> Running on http://${HOST}:${PORT}`);