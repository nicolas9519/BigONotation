function findRotatedIndex(arr, int) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(arr.length / 2);
  while (left <= right) {
    if (arr[middle] === int) return middle;
    if (arr[left] > arr[right] && arr[left] < int) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = left + Math.floor((right - left) / 2);
  }
  return -1;
}

findRotatedIndex([3, 4, 1, 2], 4);
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8);
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3);
findRotatedIndex([37, 44, 66, 102, 10, 22], 14);
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12);
findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16);
