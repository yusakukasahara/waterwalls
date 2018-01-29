const express = require('express')
const app = express()
const waterWalls = require('./functions/waterWalls.js');


app.get('/', waterWalls)

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});