const assert = require('assert').strict;

function minCoinChange(coins, value) {
  const coinsSorted = [...coins].sort((a, b) => a - b);
  const table = new Array(value + 1).fill(Infinity);
  const tableRes = new Array(value + 1).fill([]);
  table[0] = 0;
  for (let i = 1; i < table.length; i++) {
    for (let j = 0; coinsSorted[j] <= i; j++) {
      const index = i - coinsSorted[j];
      const subRes = table[index];
      if (subRes + 1 < table[i]) {
        table[i] = subRes + 1;
        tableRes[i] = tableRes[index].concat(coinsSorted[j]);
      }
    }
  }
  return tableRes[value];
}

const denominations = [1, 5, 6, 9, 25];
assert.deepEqual(minCoinChange(denominations, 1), [1]);
assert.deepEqual(minCoinChange(denominations, 10), [9, 1]);
assert.deepEqual(minCoinChange(denominations, 6), [6]);
assert.deepEqual(minCoinChange(denominations, 11), [6, 5]);
