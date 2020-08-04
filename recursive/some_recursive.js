const isOdd = val => val % 2 !== 0;

/**
 * 
 * @param {number[]} arr 
 * @param {Function} cb 
 */
function someRecursive(arr, cb) {
  if (arr.length <= 0) return false;
  const result = cb(arr[0]);
  return result || someRecursive(arr.slice(1), cb);
}

someRecursive([1, 2, 3, 4], isOdd); // true
someRecursive([4, 6, 8, 9], isOdd); // true
someRecursive([4, 6, 8], isOdd); // false
someRecursive([4, 6, 8], val => val > 10); // false