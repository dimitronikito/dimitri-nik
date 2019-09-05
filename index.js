const express = require('express');
cont path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join.join(__dirname+'/client/build.index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`express app listening on ${port}`);
