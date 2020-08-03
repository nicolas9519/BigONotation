
# Dynamic programming

**$O(n^2)$**

This method tries to break the problem in small pieces that constantly repeat and make simple use of it. The problem must have two attributes it has to be overlapping sub-problems and optimal substructure.

**Overlapping sub-problem:** The solution to the biggest problem its the union of the solution of the smallest problem.

´´´plain text
  Exponentiation
  2^2 = 2 X 2 = 4
  2^3 = 2 X 2 X 2 = 8
  2^4 = 2 X 2 X 2 X 2 = 16
´´´

**Optimal substructure:** The smallest solutions repeat inside.

´´´plain text
  Fibonacci
                 fb(5)
          fb(4)          fb(3)
      fb(3)   fb(2)  fb(2)   fb(1)
  fb(2)   fb(1)
´´´

**Memoization:** This technique helps saving the calculated values to subsequent uses.
**Tabulation:** This approach work from bottom to up, creates the base case and increase until the end of the sequence required.
