function nestedEvenSum(obj) {
  let total = 0;
  for (let prop in obj) {
    if (typeof obj[prop] === 'object') total += nestedEvenSum(obj[prop]);
    else if (typeof obj[prop] === 'number' && obj[prop] % 2 === 0) total += obj[prop];
  }
  return total;
}


const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10