const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const waterWalls = require('./functions/waterWalls.js');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Returns index.html for get request at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

// Grabs value from input field named wall_heights
app.post('/render', (req, res) => {
  let input = req.body.wall_heights
                .split(',')
                .map(str => parseInt(str));
  console.log('input', input)
  let output = waterWalls(input);
  console.log('output', output)
  res.json(output)
});

// Server listening at port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000!')
});


