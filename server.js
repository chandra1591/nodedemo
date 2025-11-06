const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Example route with JSON response
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  // Validate inputs
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Invalid input. Numbers expected.' });
  }
  const result = a + b;
  res.status(200).json({ result });
});

module.exports = app;

// Start server
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}
