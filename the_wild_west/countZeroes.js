function countZeroes(arr) {
  let firstFound = arr.length;
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(arr.length / 2);
  while (left <= right) {
    if (arr[middle] === 0) {
      firstFound = middle;
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = left + Math.floor((right - left) / 2);
  }
  return arr.length - firstFound;
}

countZeroes([1, 1, 1, 1, 0, 0]);
countZeroes([1, 0, 0, 0, 0]);
countZeroes([0, 0, 0]);
countZeroes([1, 1, 1, 1]);
