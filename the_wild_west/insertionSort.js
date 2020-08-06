function defaultComparator(a, b) {
  return a - b;
}

function insertionSort(arr, comparator = defaultComparator) {
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    let j = i - 1;
    while (j >= 0) {
      const res = comparator(arr[j], value);
      if (res < 0) break;
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = value;
  }
  return arr;
}

insertionSort([4, 20, 12, 10, 7, 9]);
