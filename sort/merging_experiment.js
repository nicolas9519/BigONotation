const { performance } = require('perf_hooks');
function merge(arr1, arr2) {
  let newArr = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      newArr.push(arr1[p1]);
      p1++;
    } else if (arr1[p1] > arr2[p2]) {
      newArr.push(arr2[p2]);
      p2++;
    } else {
      newArr = newArr.concat([arr1[p1], arr2[p2]]);
      p2++;
      p1++;
    }
  }
  return newArr.concat(arr1.slice(p1)).concat(arr2.slice(p2));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
const t1 = performance.now();
const result = mergeSort(arr);
// const result = arr.sort((a, b) => a - b);
console.log(performance.now() - t1);