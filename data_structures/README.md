
# Data structures

These are some data structures which can be useful to resolve different situations.

## Topics

- [Singly linked list](#singly-linked-list)
- [Doubly linked list](#doubly-linked-list)
- [Stack](#stack)
- [Queues](#queues)
- [Trees](#trees)
  - [Binary Search Trees](#binary-search-trees)

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
     10  13         26
```
