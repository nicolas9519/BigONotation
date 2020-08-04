function sortedFrequency(arr, num) {
  let left = 0;
  let right = arr.length;
  while (left <= right) {
    if (arr[left] === num && arr[right] === num) {
      return right - left + 1;
    }
    if (arr[left] !== num) {
      left++;
    }
    if (arr[right] !== num) {
      right--;
    }
  }
  return -1;
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2);
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3);
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1);
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4);
