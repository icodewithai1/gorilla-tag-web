// server.js - Node.js Express Server for Gorilla Tag Web (Unity WebGL)
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve proper headers for Unity WebGL / static files
app.use((req, res, next) => {
  if (req.url.endsWith('.unityweb')) {
    res.setHeader('Content-Type', 'application/octet-stream');
    // Unity JS loader handles decompression via JS inflator if Content-Encoding is not gzip
  }
  next();
});

// Serve static files from repository root
app.use(express.static(path.join(__dirname, '/')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🦍 Gorilla Tag Web (Unity WebGL) listening on http://0.0.0.0:${PORT}`);
});
