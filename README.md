# waterwalls

# implementation
Given an array of integers representing walls of different heights, return how many units of water will be trapped between the walls.

input: [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]
output: 
5 -> left: none -> right: 7 -> 0 units
3 -> left: 5 -> right: 7 -> 5 - 3 = 2 units
7 -> left: none -> right: 9 -> 0 units
2 -> left: 7 -> right: 9 -> 7 - 2 = 5 units
6 -> left: 7 -> right: 9 -> 7 - 6 = 1 units
4 -> left: 7 -> right: 9 -> 7 - 4 = 3 units
5 -> left: 7 -> right: 9 -> 7 - 5 = 2 units
9 -> left: none -> right: none -> 0 units
1 -> left: 9 -> right: 2 -> 2 - 1 = 1 units
2 -> left: 9 -> right: none -> 0 units

0 + 2 + 0 + 5 + 1 + 3 + 2 + 0 + 1 + 0 = 14 units of water

[wall1, wall2, units of water]
[3, 8, 11]

# strategy
Iterate through all walls, and for each find how much water can be held on top. Find the tallest to the left and right of the wall, subtract the shorter of the two from the current wall's height. If a wall has no boundary greater boundary or at ends, this wall cannot hold any water. Iterate through walls and find two walls with no wall taller in between and return the water inside.

# constraints
None.

# stubbing
function waterWalls() {
  var water = [];
  var valleys = [];
  var output = [];
  //for loop through each wall
    //loop left to find the tallest wall larger than current
    //loop right to find the tallest wall larget than current
    //shorter of the two - current wall
      //push into water
  //for loop through each wall finding largest the index of the next tallest wall
    //push indicies to valleys
  //for loop through valleys
    //set output to indicies if sum of water is greater than output amount
  return output;
}