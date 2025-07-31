// index.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// GET route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js API!');
});

// POST route
app.post('/greet', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.json({ message: `Hello, ${name}!` });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
