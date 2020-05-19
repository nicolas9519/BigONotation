function KMPSearch(txt, pattern) {
  let count = 0;
  const lps = compute(pattern);
  console.log(lps)
  let i = 0;
  let j = 0;
  while (i < txt.length) {
    if (pattern[j] === txt[i]) {
      j++;
      i++;
    }
    if (j === pattern.length) {
      count++;
      console.log("found", (i - j));
      j = lps[j - 1];
    } else if (i < txt.length && pattern[j] !== txt[i]) {
      if (j != 0) j = lps[j - 1];
      else i++;
    }
  }
  return count;
}

function compute(pattern) {
  const result = [];
  let len = 0;
  let i = 1;
  result[0] = 0;
  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      result[i] = len;
      i++;
    } else if (len != 0) {
      len = result[len - 1];
    } else {
      result[i] = len;
      i++;
    }
  }
  return result;
}

// function naiveStringSearch(mainStr, searchStr) {
//   let count = 0;
//   for (let i = 0; i < mainStr.length; i++) {
//     for (let j = 0; j < searchStr.length; j++) {
//       if (mainStr[i + j] !== searchStr[j]) break;
//       if (j === searchStr.length - 1) count++;
//     }
//   }
//   return count;
// }

console.log(KMPSearch('qwertywqweerqwertywqweeqwertywqweerqwertywqweerrqwertywqweerqwertywqweer', 'qwertywqweerqwertywqweer'));
