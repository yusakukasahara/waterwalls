const { waterWalls } = require('../waterwalls.js');

describe('waterwalls', () => {

  it('Expecting an array as an output', () => {
    expect.assertions(1);
    expect(waterWalls([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])).toBeInstanceOf(Array);
  });

})