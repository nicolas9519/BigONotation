function averagePair(arr, avg) {
  if (arr.length < 2) return false;
  const total = avg * 2;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum > total) {
      right--;
    } else if (sum < total) {
      left++;
    } else {
      return true;
    }
  }
  return false;
}

process.stdout.write(`${averagePair([1, 2, 3], 2.5)}\n`);
process.stdout.write(`${averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)}\n`);
process.stdout.write(`${averagePair([-1, 0, 3, 4, 5, 6], 4.1)}\n`);
process.stdout.write(`${averagePair([], 4)}\n`);
