function pivot(arr, start, end) {
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  let pivot = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[start]) {
      pivot++;
      swap(arr, pivot, i);
    }
  }
  swap(arr, start, pivot);
  return pivot;
}

function quickSort(arr, start = 0, end = arr.length) {
  if (start >= end) return arr;
  const res = pivot(arr, start, end);
  quickSort(arr, start, res - 1);
  quickSort(arr, res + 1, end);
  return arr;
}

const arr = [5, 2, 1, 4, 6, 9, 3, 7, 0];

const result = quickSort(arr, 0, arr.length - 1);

console.log(arr, result);
