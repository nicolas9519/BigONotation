function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
}

process.stdout.write(`${sumZero([-4, -3, -2, -1, 0, 1, 2, 5])}\n`);
process.stdout.write(`${sumZero([-3, -2, -1, 0, 1, 2, 3])}\n`);
process.stdout.write(`${sumZero([])}\n`);
