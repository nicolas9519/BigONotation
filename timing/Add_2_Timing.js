const { performance } = require('perf_hooks');

const add = (n) => {
  return n * (n + 1) / 2;
}

const t1 = performance.now();
console.log(add(1000000000));
const t2 = performance.now();
console.log(`Difference ${(t2 - t1) / 1000} seconds`)
