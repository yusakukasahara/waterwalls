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

// waterWalls([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])

module.exports.waterWalls = waterWalls;