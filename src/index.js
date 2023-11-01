require('dotenv').config();
const express = require('express');
const cors = require('cors');
const handleContacts = require('./controller/contact.controller');
const errorMiddleware = require('./middleware/errorMiddleware');
const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// The route for handle the process
app.put('/create-new-contacts', handleContacts);

app.use(errorMiddleware);

app.get('/error', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(`<h4>Error: ${req.query.msg}</h4>`);
  res.end();
});

app.listen(PORT, () => console.log(`=== Starting your app on http://localhost:${PORT} ===`));