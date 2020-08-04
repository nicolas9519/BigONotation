const { performance } = require('perf_hooks');

function quickSort(arr) {
  if (arr.length <= 1) return arr.length ? [arr[0]] : [];
  const pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  return [...left, pivot, ...right];
}

const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
const t1 = performance.now();
const result = quickSort(arr);
// const result = arr.sort((a, b) => a - b);
console.log(performance.now() - t1);
