function selectionSort(arr) {
  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let minimun = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minimun] > arr[j]) {
        minimun = j;
      }
    }
    if(i !== minimun) swap(i, minimun);
  }
  return arr;
}

selectionSort([5, 3, 2, 1, 4, 6, 2]);
