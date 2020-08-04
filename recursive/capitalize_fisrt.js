function capitalizeFirst (arr) {
  let result = [];
  const str = arr[0];
  const capitalize = str.slice(0,1).toUpperCase() + str.slice(1);
  result.push(capitalize)
  const newArray = arr.slice(1);
  if(newArray.length) result = result.concat(capitalizeFirst(newArray));
  return result;
}

// function capitalizeFirst (array) {
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].substr(1)];
//   }
//   const res = capitalizeFirst(array.slice(0, -1));
//   const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//   res.push(string);
//   return res;
// }

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
