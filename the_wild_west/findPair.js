const assert = require('assert').strict;

function findPair(arr, goal) {
  const values = {};
  for (let number of arr) {
    if (values[number - goal] || values[number + goal]) return true;
    values[number] = true;
  }
  return false;
}

assert.equal(findPair([6, 1, 4, 10, 2, 4], 2), true);
assert.equal(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1), true);
assert.equal(findPair([4, -2, 3, 10], -6), true);
assert.equal(findPair([6, 1, 4, 10, 2, 4], 22), false);
assert.equal(findPair([], 0), false);
