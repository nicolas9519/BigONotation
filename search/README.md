
# Search algorithms

These are some algorithms to optimize search in arrays or strings.

## Topics

- [Linear search](#linear-search)
- [Binary search](#binary-Search)
- [KMP search](#kmp-Search)

## Linear search

**$O(n)$**

This is the more basic search how is going to check one by one until finding the data;

## Binary search

**$O(n)$ or $O(log(n))$**

This works in ordered arrays, it is the same approach that [divide and conquer](#divide-and-conquer).

## KMP search

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
