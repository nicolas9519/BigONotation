function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
power(2, 0); // 1
power(2, 2); // 4
power(2, 4); // 16


function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
factorial(1); // 1
factorial(2); // 2
factorial(4); // 24
factorial(7); // 5040


function productOfArray(mainArray) {
  let total = 1;
  (function helper(arr) {
    if (arr.length === 0) return;
    total *= arr[0];
    helper(arr.slice(1));
  })(mainArray);
  return total;
}
productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60


function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
recursiveRange(6); // 21
recursiveRange(10); // 55 


function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 2) + fib(n - 1);
}
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
