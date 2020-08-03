function fibonacciMemoization(num, memo = {}) {
  if (memo[num]) return memo[num]
  if (num <= 2) return 1;
  const value = fibonacciMemoization(num - 2, memo) + fibonacciMemoization(num - 1, memo);
  memo[num] = value;
  return value;
}

function fibonacciTabulation(num) {
  if (num < 2) return 1;
  const fibSeq = [0, 1, 1];
  for (let i = 3; i <= num; i++) {
    fibSeq[i] = fibSeq[i - 2] + fibSeq[i - 1];
  }
  return fibSeq[num];
}
