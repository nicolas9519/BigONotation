const assert = require('assert').strict;

function coinChange(coins, value) {
  const ways = new Array(value + 1).fill(0);
  ways[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j < ways.length; j++) {
      ways[j] += ways[j - coins[i]];
    }
  }
  return ways[value];
}

const denominations = [1, 5, 10, 25];
assert.equal(coinChange(denominations, 1), 1);
assert.equal(coinChange(denominations, 2), 1);
assert.equal(coinChange(denominations, 5), 2);
assert.equal(coinChange(denominations, 10), 4);
assert.equal(coinChange(denominations, 25), 13);
assert.equal(coinChange(denominations, 100), 242);
assert.equal(coinChange(denominations, 145), 622);
assert.equal(coinChange(denominations, 1451), 425663);
assert.equal(coinChange(denominations, 14511), 409222339);
