function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};
  for(let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for(let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  for(let key in obj1) {
    if(!(key ** 2 in obj2)) {
      return false;
    }
    if(obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

process.stdout.write(`${same([1,3,2], [9,1,4])}\n`);
process.stdout.write(`${same([1,2], [3])}\n`);
process.stdout.write(`${same([1,2], [3, 3])}\n`);

