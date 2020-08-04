function capitalizeWords(arr) {
  let result = [];
  const capitalize = arr[0].toUpperCase();
  result.push(capitalize);
  const newArr = arr.slice(1);
  if (newArr.length) result = result.concat(capitalizeWords(newArr));
  return result;
}

// function capitalizeWords (array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length-1)[0].toUpperCase());
//   return res;
// }
const words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
