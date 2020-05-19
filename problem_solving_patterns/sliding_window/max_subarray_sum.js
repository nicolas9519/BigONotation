function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

process.stdout.write(`${maxSubarraySum([1, 2, 5, 2, 8, 1, 5, 1, 2, 5, 2, 8, 1, 5, 1, 2, 5, 2, 8, 1, 5], 10)}\n`);
process.stdout.write(`${maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)}\n`);
process.stdout.write(`${maxSubarraySum([4, 2, 1, 6], 1)}\n`);
process.stdout.write(`${maxSubarraySum([4, 2, 1, 6, 2], 4)}\n`);
process.stdout.write(`${maxSubarraySum([], 4)}\n`);
