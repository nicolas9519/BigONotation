
# Data structures

These are some data structures which can be useful to resolve different situations.

## Topics

- [Singly linked list](#singly-linked-list)
- [Doubly linked list](#doubly-linked-list)
- [Stack](#stack)
- [Queues](#queues)
- [Trees](#trees)
  - [Binary Search Trees](#binary-search-trees)
  - [Traversing a tree](#traversing-a-tree)
  - [Binary heaps](#binary-heaps)
- [Hash tables](#hash-tables)

## Singly linked list

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

## Doubly linked list

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

## Stack

The main principal is the last in, first out (LIFO). EG. Call stack js.

Action | Function
------ | --------
Insertion | $O(1)$
Removal | $O(1)$

```plain text
 null <- prev.(A) <- prev.(B) <- prev.(C)
 or
 (A).next -> (B).next -> (C).next -> null
 [] -> [1] -> [1, 2] -> [1, 2, 3] -> [1, 2] -> [1] -> []
```

## Queues

The main principal is the first in, first out (FIFO).

Action | Function
------ | --------
Insertion | $O(1)$
Removal | $O(1)$

```plain text
 (A).next -> (B).next -> (C).next -> null
 [] -> [1] -> [1, 2] -> [1, 2, 3] -> [2, 3] -> [3] -> []
```

## Trees

A tree have just one node of beginning, it just increase to the bottom, they just have a relations with their parents or child.
Applications. HTML DOM, Networks, Artificial intelligence, folders structure

```plain text
       A
     /   \
    B     C
   / \
  D   F
```

### Binary Search Trees

The parent can't have more than two children, the left has to be lower than his parent and the right has to be greater.

Action | Function
------ | --------
Insertion | $O(log n)$
Removal | $O(log n)$

**Note:** _In the worst scenario, it will be $O(n)_

```plain text
           14
    9          22
  6    11    19    30
     10  13      26
```

### Traversing a tree

Methods to search in a tree.

#### Breadth-first Search (BFS)

In this approach, it moves vertically checking all the children at the same level.

```plain text
Output from main example
[14, 9, 22, 6, 11, 19, 30, 10, 13, 26]
```

#### Depth-first Search (DFS)

**PreOrder:** Start from the root and go down just in one direction, when it finished starts in the other one.

```plain text
Output from main example
[14, 9, 6, 11, 10, 13, 22, 19, 30, 26]
```

**PostOrder:** Visit first the children before than the father

```plain text
Output from main example
[6, 10, 13, 11, 9, 19, 26, 30, 22, 14]
```

**InOrder:** Visit first the left side before to visit right

```plain text
Output from main example
[6, 9, 10, 11, 13, 14, 19, 22, 26, 30]
```

### Binary heaps

It is similar to binary search tree, but have different conditionals, it's fully complete the level before to create a new one, the left side it's full first.

Action | Function
------ | --------
Insertion | $O(log n)$
Removal | $O(log n)$
Search  | $O(n)$

Some kinds of Binary heaps are:

- **MaxBinaryHeap**, parent nodes are always larger than the child nodes.

  ```plain text
                80
        60              30
    47      58      27      15
  25  10  53  24  20  11
  ```

- **MinBinaryHeap**, parent nodes are always smaller than the child nodes.

  ```plain text
                10
        24              11
    25      53      20      15
  47  80  58  60  27  30
  ```

It could be saved in an array, following the formula $2n+1$ for the left child, and $2n+2$ for the right child where n is the element index.

```plain text
[80, 60, 30, 47, 58, 27, 15, 25, 10, 53, 24, 20, 11]
 0   1   2   3   4   5   6   7   8   9   10  11  12
60 (2(0) + 1 = 1) <- 80 -> (2(0) + 2 = 2) 30
47 (2(1) + 1 = 3) <- 60 -> (2(1) + 2 = 4) 58
...
20 (2(5) + 1 = 11) <- 27 -> (2(5) + 2 = 12) 11
```

To find the parent it follows the formula $(n-1)/2$ and floor the result

```plain text
[10, 24, 11, 25, 53, 20, 15, 47, 80, 58, 60, 27, 30]
 0   1   2   3   4   5   6   7   8   9   10  11  12
11 -> ((2 - 1)/ 2 = 0.5 = 0) 10
58 -> ((9 - 1)/ 2 = 4) 53
```

## Hash tables

Store key and value pairs. The keys don't have any order. Faster than array to finding, adding and removing values. In JS is an Object or a Map.

Action | Function
------ | --------
Insertion | $O(1)$
Removal | $O(1)$
Access | $O(1)$

```plain text
hashFunction('pink') = 3
hashFunction('orange') = 1
hashFunction('brown') = 1

// Separate chaining
|  0  |  1  |  2  |  3  |  4  |  5  |
                     ^
            [['pink', '#FFC0CB']]
         ^
  [['orange', '#FFA500'],
  ['brown', '#A52A2A']]

// Linear Probing
      ['brown', '#A52A2A']
               v
|  0  |  1  |  2  |  3  |  4  |  5  |
                     ^
             ['pink', '#FFC0CB']
         ^
    ['orange', '#FFA500']
```
