function bubble(arr) {
  const newArr = [...arr];
  let len = newArr.length - 1;
  while (len > 0) {
    let lastSwap = 0;
    for (let i = 0; i < len; i++) {
      console.log(newArr)
      if (newArr[i] > newArr[i + 1]) {
        lastSwap = i;
        const temp = newArr[i + 1];
        newArr[i + 1] = newArr[i];
        newArr[i] = temp;
      }
    }
    console.log('--------------')
    len = Math.min(len, lastSwap);
  }
  return newArr;
}


bubble([5, 1, 3, 4, 2, 6, 7]);
