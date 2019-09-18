const express = require('express');
const path = require('path');
const getScores = require("./livescores.js");
const { Client } = require('pg');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

const client = new Client({
  connectionString: process.env.DATABSE_URL,
  ssl: true,
});

app.get("/scores", async function(req, res, next) {
  const games = await getScores();
  res.json(games);
});

app.post('/form-submit-url', function(req, res) {
  var data = req.body;
  client.connect();
  client.query('INSERT INTO form_submissions(name, company, email, reason, message) VALUES (data.name, data.company, data.email, data.reason, data.message);', (err, res) => {
    if (err) throw err;
    client.end();
  });

});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build.index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`express app listening on ${port}`);
