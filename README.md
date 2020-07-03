# Big O Notation

## Description

This is a project to save all the progress in the course of [Big o Notation](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

## Topics

- [Functions](#functions)
- [Problem solving patterns](#problem-solving-patterns)
  - [Frequency counter](#frequency-counter)
  - [Multiple pointers](#multiple-pointers)
  - [Sliding window](#sliding-window)
  - [Divide and conquer](#divide-and-conquer)
- [Recursive functions](#recursive-functions)
- [Search algorithms](#search-algorithms)
  - [Linear search](#linear-search)
  - [Binary search](#binary-Search)
  - [KMP search](#kmp-Search)
- [Sort algorithms](#sort-algorithms)
  - [Bubble](#bubble)
  - [Selection](#selection)
  - [Insertion](#insertion)
  - [Merging](#merging)
  - [Quick](#quick)
  - [Radix](#radix)
- [Data structures](#data-structures)
  - [Singly linked list](#singly-linked-list)
  - [Doubly linked list](#doubly-linked-list)

## Functions

Function | Description
-------- | -----------
$O(k)$ | It's constant every time
$O(log(n))$ | It's not necessary to iterate all the array
$O(n)$ | It depends on the length of the array
$O(n log(n))$ | It depends on the length of the array but it's not iterating twice the array
$O(n^2)$ | It iterates twice the array
$O(2^n)$ | For each element iterates twice the length of the array. eg. Fibonacci

## Problem solving patterns

These are basic patterns to approach basic problems from more optimal behavior.

### Frequency counter

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

### Multiple pointers

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

### Sliding window

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

### Divide and conquer

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

## Recursive functions

**$O(2^n)$**

These functions help us to write so much code due to that uses the same behavior to its parameters, it's necessary a continuous behavior to use it, also it has to have a base condition to know when it has to stop.

## Search algorithms

These are some algorithms to optimize search in arrays or strings.

### Linear search

**$O(n)$**

This is the more basic search how is going to check one by one until finding the data;

### Binary search

**$O(n)$ or $O(log(n))$**

This works in ordered arrays, it is the same approach that [divide and conquer](#divide-and-conquer).

### KMP search

**$O(n)$**

This is a more complex search algorithm, the main idea is looking for patterns in longer text.
It creates an array with the same length that the pattern in this array is going to save the position how it is going to return if there is no a full match, for example, if in the pattern there is a sequence of data is going to save the position of this.

```javascript
const patter = "hello hello";
const lps    = [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5];
// Each         h  e  l  l  o     h  e  l  l  o
// Reference to h  h  h  h  h  h  e  l  l  o  Space
```

This happens in case there is no complete match it can return and continue compare from the previous match.
Later on, this algorithm starts to read and compare the main text with the pattern if not match used the other array to know where it's going to restart to search in the pattern, only have to validate if there a previous match in another case, it starts at the beginning.

```javascript
const mainText = "hello how are you, hello hello";
//                YYYYYYYN
//                       1
//                      YN
//                       0
//                                   YYYYYYYYYYY FULL MATCH!
```

## Sort algorithms

These some algorithms to approach sorting data in arrays.

### Bubble

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

### Selection

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

### Insertion

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

### Merging

**$O(n log(n))$**

It creates small arrays until only get 1 element in each one, after that, start to merge each array and put them in the right position.

```javascript
const arr = [5, 1, 3, 4, 2, 6, 7, 0];
//          [1][5][3][4][2][6][7][0]
//          [1, 5][3, 4][2, 6][0, 7]
//          [1, 3, 4, 5][0, 2, 6, 7]
//          [0, 1, 2, 3, 4, 5, 6, 7]
```

### Quick

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

### Radix

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

## Data structures

These are some data structures which can be useful to resolve different situations.

### Singly linked list

The singly linked list consists of nodes that connect to the next and have a head and tail. This data structure allows us to insert and delete at the beginning without using such much use of the resources.

Action | Function
------ | --------
Insertion | $O(1)$
Removal | $O(n)$
Searching | $O(n)$
Accessing | $O(n)$

```plain text
 (A).next -> (B).next -> (C).next -> null
```

### Doubly linked list

The doubly linked list seems like the singly linked list, but in this case, it also connects with the previous node.
It also uses more memory.

Action | Function
------ | --------
Insertion | $O(1)$
Removal | $O(1)$
Searching | $O(n)$
Accessing | $O(n)$

```plain text
 null <- prev.(A).next <-> prev.(B).next <-> prev.(C).next -> null
```

### Stack

The main principal is the last in, first out (LIFO). EG. Call stack js.

Action | Function
------ | --------
Insertion | $O(1)$
Removal | $O(1)$

```plain text
 null <- prev.(A) <- prev.(B) <- prev.(C)
 or
 (A).next -> (B).next -> (C).next -> null
```

### Queues

The main principal is the first in, first out (FIFO).

Action | Function
------ | --------
Insertion | $O(1)$
Removal | $O(1)$

```plain text
 (A).next -> (B).next -> (C).next -> null
```
