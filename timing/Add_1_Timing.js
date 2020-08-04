const { performance } = require('perf_hooks');

const add = (n) => {
  let t = 0;
  for (let i = 1; i <= n; i++) {
    t += i;
  }
  return t;
}

const t1 = performance.now();
add(1000000000);
const t2 = performance.now();
console.log(`Difference ${(t2 - t1) / 1000} seconds`)
