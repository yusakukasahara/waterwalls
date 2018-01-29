const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
// const waterWalls = require('./functions/waterWalls.js');

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
  res.json({'result': output})
});

// Server listening at port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000!')
});


function waterWalls(array) {
  var water = [];
  var valleys = [];
  var output = [0, 0, 0];

  for (var i = 0; i < array.length; i++) {
    var left = null;
    for (var j = 0; j < i; j++) {
      if (array[j] > array[i]) {
        left = j;
      }
    }

    var right = null;
    for (var k = i; k < array.length; k++) {
      if (array[k] > array[i]) {
        right = k;
      }
    }

    if (right === null || left === null) {
      water.push(0);
    } else {
      water.push(Math.min(array[left], array[right]) - array[i]);
    }

  };

  for (var l = 0; l < array.length; l++) {
    for (var m = l + 1; m < array.length; m++) {
      if (array[m] > array[l]) {
        var sum = water.slice(l, m).reduce((sum, wall) => sum += wall, 0)
        console.log('sum', sum)
        valleys.push([l, m, sum])
      }
    }
  }

  for (var n = 0; n < valleys.length; n++) {
    if (valleys[n][2] >= output[2]) {
      output = valleys[n];
    }
  }
  console.log('water: ', water)
  console.log('valleys: ', valleys)
  return [output[0] + 2, output[1] + 1, output[2]];
}