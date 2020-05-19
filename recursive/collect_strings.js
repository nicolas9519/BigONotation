function collectStrings(obj) {
  let result = [];
  for (let prop in obj) {
    const value = obj[prop];
    if (typeof value === 'object') result = result.concat(collectStrings(value));
    else if (typeof value === 'string') result.push(value);
  }
  return result;
}

const obj = {
  stuff: "foo",
  temp: ["test", 0, 34, true, false, "okay"],
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
