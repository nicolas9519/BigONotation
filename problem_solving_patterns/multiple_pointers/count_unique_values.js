// function countUniqueValues(arr) {
//   let p1 = 0;
//   let p2 = 1;
//   let count = 0;
//   while (p2 < arr.length) {
//     if (p1 === 0) count++;
//     if (arr[p1] !== arr[p2]) count++;
//     p1++;
//     p2++;
//   }
//   return count;
// }
function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let p1 = 0;
  let p2 = 1;
  while (p2 < arr.length) {
    if (arr[p1] !== arr[p2]) {
      p1++;
      arr[p1] = arr[p2];
    }
    p2++;
  }
  return p1 + 1;
}

process.stdout.write(`${countUniqueValues([1, 1, 1, 1, 1, 2])}\n`);
process.stdout.write(`${countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])}\n`);
process.stdout.write(`${countUniqueValues([])}\n`);
process.stdout.write(`${countUniqueValues([-2, -1, -1, 0, 1])}\n`);
process.stdout.write(`${countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6])}\n`);
