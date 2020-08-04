/**
 * Recursive solution
 * @param {string} mainStr 
 */
// function isPalindrome(str){
//   if(str.length === 1) return true;
//   if(str.length === 2) return str[0] === str[1];
//   if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//   return false;
// }
function isPalindrome(mainStr){
  function helper(insideStr) {
    if(insideStr.length === 0) return '';
    return helper(insideStr.substring(1)) + insideStr[0];  
  }
  const reverse = helper(mainStr);
  return reverse === mainStr;
}
/**
 * Pointers solution
 * @param {string} str 
 */
// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if(str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }

isPalindrome('a'); // true
isPalindrome('awesome'); // false
isPalindrome('foobar'); // false
isPalindrome('tacocat'); // true
isPalindrome('amanaplanacanalpanama'); // true
isPalindrome('amanaplanacanalpandemonium'); // false