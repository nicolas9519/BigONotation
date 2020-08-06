function defaultComparator(a, b) {
  return a - b;
}

function merge(arr1, arr2, comparator = defaultComparator) {
  let ind1 = 0;
  let ind2 = 0;
  const newArr = [];
  while (ind1 < arr1.length && ind2 < arr2.length) {
    const res = comparator(arr1[ind1], arr2[ind2]);
    if (res > 0) {
      newArr.push(arr2[ind2]);
      ind2++;
    } else if (res === 0) {
      newArr.push(arr1[ind1]);
      ind1++;
      newArr.push(arr2[ind2]);
      ind2++;
    } else {
      newArr.push(arr1[ind1]);
      ind1++;
    }
  }
  return newArr.concat(arr1.slice(ind1)).concat(arr2.slice(ind2));
}

function mergeSort(arr, comparator = defaultComparator) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const temp1 = mergeSort(arr.slice(0, middle), comparator);
  const temp2 = mergeSort(arr.slice(middle), comparator);
  return merge(temp1, temp2, comparator);
}

mergeSort([4, 20, 12, 10, 7, 9]);
