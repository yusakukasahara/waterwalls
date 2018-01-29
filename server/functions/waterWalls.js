function waterWalls(array) {
  var water = [];
  var valleys = [];
  var output = [0, 0, 0];

  for (var i = 0; i < array.length; i++) {
    var left = null;
    for (var j = 0; j < i; j++) {
      if (array[j] > array[i]) {
        if (left === null || array[left] < array[j]) {
          left = j;
        }
      }
    }

    var right = null;
    for (var k = i; k < array.length; k++) {
      if (array[k] > array[i]) {
        if (right === null || array[right] < array[k]) {
          right = k;
        }
      }
    }

    if (right === null || left === null) {
      water.push(0);
    } else {
      water.push(Math.min(array[left], array[right]) - array[i]);
    }

  };

  for (var l = 0; l < array.length; l++) {
    for (var m = l + 2; m < array.length; m++) {
      var valley = [];
      var valleyArea = [];
      for (var n = l + 1; n < m; n++) {
        valley.push(array[n]);
        valleyArea.push(n);
      }
      var maxMiddle = Math.max(...valley)
      console.log('maxMiddle', maxMiddle)
      if (maxMiddle < array[m] && maxMiddle < array[l]) {
        console.log('valleyArea', valleyArea, valleyArea.map(i => water[i]))
        var sum = valleyArea.map(i => water[i]).reduce((sum, wall) => sum += wall, 0)
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
  return {walls: array, water: water, largest: [output[0] + 1, output[1] + 1, output[2]]};
}

// console.log(waterWalls([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]))

module.exports = waterWalls;