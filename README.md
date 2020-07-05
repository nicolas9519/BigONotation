# Big O Notation

## Description

This is a project to save all the progress in the course of [Big o Notation](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

## Topics

- [Functions](#functions)
- [Problem solving patterns](problem_solving_patterns)
  - [Frequency counter](problem_solving_patterns#frequency-counter)
  - [Multiple pointers](problem_solving_patterns#multiple-pointers)
  - [Sliding window](problem_solving_patterns#sliding-window)
  - [Divide and conquer](problem_solving_patterns#divide-and-conquer)
- [Recursive functions](#recursive-functions)
- [Search algorithms](search)
  - [Linear search](search#linear-search)
  - [Binary search](search#binary-Search)
  - [KMP search](search#kmp-Search)
- [Sort algorithms](sort)
  - [Bubble](sort#bubble)
  - [Selection](sort#selection)
  - [Insertion](sort#insertion)
  - [Merging](sort#merging)
  - [Quick](sort#quick)
  - [Radix](sort#radix)
- [Data structures](data_structures)
  - [Singly linked list](data_structures#singly-linked-list)
  - [Doubly linked list](data_structures#doubly-linked-list)
  - [Stack](data_structures#stack)
  - [Queues](data_structures#queues)
  - [Trees](data_structures#trees)

## Functions

Function | Description
-------- | -----------
$O(k)$ | It's constant every time
$O(log(n))$ | It's not necessary to iterate all the array
$O(n)$ | It depends on the length of the array
$O(n log(n))$ | It depends on the length of the array but it's not iterating twice the array
$O(n^2)$ | It iterates twice the array
$O(2^n)$ | For each element iterates twice the length of the array. eg. Fibonacci

## Recursive functions

**$O(2^n)$**

These functions help us to write so much code due to that uses the same behavior to its parameters, it's necessary a continuous behavior to use it, also it has to have a base condition to know when it has to stop.
