const express = require('express');
const app = express();

// Middleware to parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Middleware to parse application/json
app.use(express.json());

app.get('/', (req, res) => {
  // Access parsed data via req.body
  console.log(req.body);
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});