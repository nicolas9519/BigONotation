function getDigit(num, i) {
  // const str = String(Math.abs(num));
  // const pos = str.length - 1 - place;
  // return Number(str[pos] || 0);
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  return String(Math.abs(num)).length;
  // if(num === 0) return 1;
  // return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let max = 0;
  for (let num of arr) {
    const count = digitCount(num);
    max = Math.max(max, count);
  }
  return max;
}

function radixSort(arr) {
  const max = mostDigits(arr);
  for (let i = 0; i <= max; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      const numBucket = getDigit(num, i);
      buckets[numBucket].push(num);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

// const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100000));
const arr = [5, 62, 3451, 4, 6, 239, 23, 237, 0];
const result = radixSort(arr);
