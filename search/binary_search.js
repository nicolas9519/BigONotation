function binarySearch(arr, search) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right - left) / 2);
  while (left <= right) {
    if (arr[middle] === search) return middle;
    else if (arr[middle] < search) left = middle + 1;
    else right = middle - 1;
    middle = left + Math.floor((right - left) / 2);
  }
  return -1;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17];
binarySearch(numbers, 8);
binarySearch(numbers, 10);
binarySearch([], 10);