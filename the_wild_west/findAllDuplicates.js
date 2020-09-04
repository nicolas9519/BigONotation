const assert = require('assert').strict;

function findAllDuplicates(numbers) {
  const counter = {};
  const duplicates = [];
  for (let number of numbers) {
    counter[number] = (counter[number] || 0) + 1;
    if (counter[number] === 2) {
      duplicates.push(number);
    }
  }
  return duplicates;
}

assert.deepEqual(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]), [2, 3]);
assert.deepEqual(findAllDuplicates([4, 3, 2, 1, 0]), []);
assert.deepEqual(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]), [1, 2, 3]);
