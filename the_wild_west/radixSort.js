function getDigit(num, ind) {
  return Math.floor(Math.abs(num) / Math.pow(10, ind)) % 10;
}

function digitCount(num) {
  return Math.abs(num).toString().length;
}

function mostDigits(nums) {
  let max = 0;
  for (let num of nums) {
    const length = digitCount(num);
    max = Math.max(length, max);
  }
  return max;
}

function radixSort(nums) {
  const most = mostDigits(nums);
  for (let i = 0; i <= most; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let num of nums) {
      const digit = getDigit(num, i);
      buckets[digit].push(num);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}
