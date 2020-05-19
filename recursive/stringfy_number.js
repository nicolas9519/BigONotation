function stringifyNumbers(obj) {
  const newObj = {};
  for (let prop in obj) {
    if (typeof obj[prop] === 'object' && !Array.isArray(obj[prop])) newObj[prop] = stringifyNumbers(obj[prop]);
    else if (typeof obj[prop] === 'number') newObj[prop] = String(obj[prop]);
    else newObj[prop] = obj[prop];
  }
  return newObj;
}

/*
let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}
/*

stringifyNumbers(obj)

/*
{
  num: "1",
  test: [],
  data: {
      val: "4",
      info: {
          isRight: true,
          random: "66"
      }
  }
}
*/