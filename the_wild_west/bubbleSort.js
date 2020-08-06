function defaultComparator(a, b) {
  return a - b;
}

function bubbleSort(arr, comparator = defaultComparator) {
  let length = arr.length - 1;
  const newArr = [...arr];
  while (length > 0) {
    let lastSwap = 0;
    for (let i = 0; i < length; i++) {
      const res = comparator(newArr[i], newArr[i + 1]);
      if (res > 0) {
        const temp = newArr[i];
        newArr[i] = newArr[i + 1];
        newArr[i + 1] = temp;
        lastSwap = i;
      }
    }
    length = Math.min(length, lastSwap);
  }
  return newArr;
}

bubbleSort([4, 20, 12, 10, 7, 9]);
