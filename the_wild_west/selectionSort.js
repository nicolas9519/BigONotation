function defaultComparator(a, b) {
  return a - b;
}

function selectionSort(arr, comparator = defaultComparator) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      const res = comparator(arr[minimum], arr[j]);
      if (res > 0) {
        minimum = j;
      }
    }
    if (i !== minimum) {
      const temp = arr[i];
      arr[i] = arr[minimum];
      arr[minimum] = temp;
    }
  }
  return arr;
}

selectionSort([4, 20, 12, 10, 7, 9]);
