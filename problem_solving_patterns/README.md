# Problem solving patterns

These are basic patterns to approach basic problems from more optimal behavior.

## Topics

- [Frequency counter](#frequency-counter)
- [Multiple pointers](#multiple-pointers)
- [Sliding window](#sliding-window)
- [Divide and conquer](#divide-and-conquer)

## Frequency counter

**$O(n)$**

This pattern consists in create a new object which is going to save the reference and count how many of this exists.

```javascript
const arr = [1,2,3,1,2,2,4];
const counter = {
  1: 2,
  2: 3,
  3: 1,
  4: 1
}
const word = "hello";
const counterWord = {
  h: 1,
  e: 1,
  l: 2,
  o: 1
}
```

## Multiple pointers

**$O(n)$**

This uses two pointer in order to find pairs or sequences, this is useful in ordered arrays. This works moving one of the pointers at the time to see in each iteration the behavior.

```javascript
// Find two numbers that sum 10
const arr = [1, 3, 4, 5, 6, 7, 8];
// First     ^                 ^
// Second       ^              ^
// Third        ^           ^
// 7 + 3 = 10
```

## Sliding window

**$O(n)$**

This creates a range of data and advances through the array moving this range. One use could be to find sum of ranges that sum certain number.

```javascript
// How many pairs do a sum is an even number?
const arr = [1, 2, 5, 2, 8, 1, 5];
// First     [ 3  ]
// Second       [ 7 ]
// Third           [ 7 ]
// Fourth            [ 10 ]
// Fifth                [ 9 ]
// Sixth                   [ 6 ]
// Total = 2
```

## Divide and conquer

**$O(n)$ or $O(log(n))$**

This works well in organize data and selecting a middle point how is going to be evaluated with the search value, after we look in the new array.

```javascript
// Look for 17
const arr = [1, 3, 4, 7, 8, 9, 12, 13, 14, 17, 22, 24];
// First                    ^
//                            [12, 13, 14, 17, 22, 24]
// Second                               ^
//                                        [17, 22, 24]
// Third                                        ^
//                                        [17]
// Fourth                                   ^
// Found!
```
