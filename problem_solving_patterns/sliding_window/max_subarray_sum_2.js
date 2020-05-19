function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  max = sum;
  for (let j = num; j < arr.length; j++) {
    sum = sum - arr[j -num] + arr[j];
    max = Math.max(sum, max);
  }
  return max;
}

process.stdout.write(`${maxSubarraySum([100, 200, 300, 400], 2)}\n`);
process.stdout.write(`${maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)}\n`);
process.stdout.write(`${maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)}\n`);
process.stdout.write(`${maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)}\n`);
process.stdout.write(`${maxSubarraySum([2, 3], 3)}\n`);
