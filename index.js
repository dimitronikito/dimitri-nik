const express = require('express');
const path = require('path');
const getScores = require("./livescores.js");

const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/scores", async function(req, res, next) {
  const games = await getScores();
  res.json(games);
});

app.post('/form-submit-url', function(req, res) {
  console.log(JSON.parse(req.body));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build.index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`express app listening on ${port}`);
