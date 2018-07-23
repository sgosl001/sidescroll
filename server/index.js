// run "heroku create <app-name>" from here and not in client
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '../')));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'../index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);
