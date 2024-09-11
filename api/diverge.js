const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/diverge', (req, res) => {
  const userMessage = req.body.message || 'Hello from Diverge API!';
  const divergeResponse = `Diverge says: ${userMessage}`;
  res.status(200).json({ response: divergeResponse });
});

app.listen(port, () => {
  console.log(`Diverge API listening at http://localhost:${port}`);
});
