const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const waterWalls = require('./functions/waterWalls.js');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.post('/submit', (req, res) => {
  console.log('Submitted!');
});


app.listen(3000, () => {
  console.log('Listening on port 3000!')
});