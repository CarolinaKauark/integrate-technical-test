// curl --request GET \
//   --url 'https://api.hubapi.com/crm/v3/objects/contacts?limit=10&archived=false' \
//   --header 'authorization: Bearer YOUR_ACCESS_TOKEN'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const handleContacts = require('./controller/handleContacts');
const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// The route for handle the process
app.get('/create-new-contacts', handleContacts);

// app.use(errorMiddleware);

app.get('/error', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(`<h4>Error: ${req.query.msg}</h4>`);
  res.end();
});

app.listen(PORT, () => console.log(`=== Starting your app on http://localhost:${PORT} ===`));