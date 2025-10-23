const express = require('express');
const app = express();

// Use the port Railway provides, or fallback to 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Railway!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});