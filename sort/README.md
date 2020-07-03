
# Sort algorithms

These some algorithms to approach sorting data in arrays.

## Topics

- [Bubble](#bubble)
- [Selection](#selection)
- [Insertion](#insertion)
- [Merging](#merging)
- [Quick](#quick)
- [Radix](#radix)

## Bubble

**$O(n^2)$**

This consists of a move the highest values to the end but comparing it in pairs. The local approach takes into account the latest swap.

```javascript
const arr = [5, 1, 3, 4, 2, 6, 7, 0];
//          [1, 3, 4, 2, 5, 6, 0, 7]
//          [1, 3, 2, 4, 5, 0, 6, 7]
//          [1, 2, 3, 4, 0, 5, 6, 7]
//          [1, 2, 3, 0, 4, 5, 6, 7]
//          [1, 2, 0, 3, 4, 5, 6, 7]
//          [1, 0, 2, 3, 4, 5, 6, 7]
//          [0, 1, 2, 3, 4, 5, 6, 7]
```

## Selection

**$O(n^2)$**

This takes the minimum value and swaps with it until organizing all the array.

```javascript
const arr = [5, 1, 3, 4, 2, 6, 7, 0];
//          [0, 1, 3, 4, 2, 6, 7, 5]
//          [0, 1, 3, 4, 2, 6, 7, 5]
//          [0, 1, 2, 4, 3, 6, 7, 5]
//          [0, 1, 2, 3, 4, 6, 7, 5]
//          [0, 1, 2, 3, 4, 5, 7, 6]
//          [0, 1, 2, 3, 4, 5, 6, 7]
```

## Insertion

**$O(n^2)$**

This takes each value and compares it to put in the position where is greater than the previous and minor than the next.

```javascript
const arr = [5, 1, 3, 4, 2, 6, 7, 0];
//          [1, 5, 3, 4, 2, 6, 7, 0]
//          [1, 3, 5, 4, 2, 6, 7, 0]
//          [1, 3, 4, 5, 2, 6, 7, 0]
//          [1, 2, 3, 4, 5, 6, 7, 0]
//          [1, 2, 3, 4, 5, 6, 7, 0]
//          [1, 2, 3, 4, 5, 6, 7, 0]
//          [0, 1, 2, 3, 4, 5, 6, 7]
```

## Merging

**$O(n log(n))$**

It creates small arrays until only get 1 element in each one, after that, start to merge each array and put them in the right position.

```javascript
const arr = [5, 1, 3, 4, 2, 6, 7, 0];
//          [1][5][3][4][2][6][7][0]
//          [1, 5][3, 4][2, 6][0, 7]
//          [1, 3, 4, 5][0, 2, 6, 7]
//          [0, 1, 2, 3, 4, 5, 6, 7]
```

## Quick

**$O(n log(n))$**

It works selecting 1 item and putting it in the right position, after that, it creates another call from the numbers that are in the left and the right until its noting to order. The local approach selects the first item, but it could be the middle, the last, or a random one.

```javascript
const arr = [5, 1, 3, 4, 2, 6, 7, 0];
//          [1, 3, 4, 2, 0][5][6, 7]
//          [0][1][3, 4, 2][5][6][7]
//          [0][1][2][3][4][5][6][7]
//          [0, 1, 2, 3, 4, 5, 6, 7]
// It modifies the main array and doesn't create new arrays I used arrays to understand the behavior.
```

## Radix

**$O(nk)$**

In radix sort doesn't compare the values between them, first checks what is the longest number of digits in the array, after that, it creates buckets with the digits, later on, creates a new array with the same order that have in the buckets.

```javascript
const arr = [5, 62, 3451, 4, 6, 239, 23, 237, 0];
// longest = 4
// {0: [0], 1 [3451], 2: [62], 3: [23], 4: [4], 5: [5], 6: [6], 7: [237], 8:[], 9: [239]}
// [0, 3451, 62, 23, 4, 5, 6, 237, 239]
// {0: [0, 4, 5, 6], 1 [], 2: [23], 3: [237, 239], 4: [], 5: [3451], 6: [62], 7: [], 8:[], 9: []}
// [0, 4, 5, 6, 23, 237, 239, 3451, 62]
// {0: [0, 4, 5, 6, 23, 62], 1 [], 2: [237, 239], 3: [], 4: [3451], 5: [], 6: [], 7: [], 8:[], 9: []}
// [0, 4, 5, 6, 23, 62, 237, 239, 3451]
// {0: [0, 4, 5, 6, 23, 62, 237, 239], 1 [], 2: [], 3: [3451], 4: [], 5: [], 6: [], 7: [], 8:[], 9: []}
// [0, 4, 5, 6, 23, 62, 237, 239, 3451]
```
