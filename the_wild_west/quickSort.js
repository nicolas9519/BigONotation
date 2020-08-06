function defaultComparator(a, b) {
  return a - b;
}

function pivot(arr, comparator = defaultComparator, start = 0, end = arr.length - 1) {
  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let pivot = start;
  for (let i = pivot + 1; i <= end; i++) {
    const res = comparator(arr[start], arr[i]);
    if (res > 0) {
      pivot++;
      swap(i, pivot);
    }
  }
  swap(start, pivot);
  return pivot;
}

function quickSort(arr, comparator = defaultComparator, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  const pivotSelected = pivot(arr, comparator, start, end);
  quickSort(arr, comparator, start, pivotSelected - 1);
  quickSort(arr, comparator, pivotSelected + 1, end);
  return arr;
}
