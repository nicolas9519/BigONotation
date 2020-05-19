function searchTxt(str, pat) {
  const lps = computePattern(pat);
  let i = 0;
  let j = 0;
  let counter = 0;
  while (i < str.length) {
    if (str[i] === pat[j]) {
      i++;
      j++;
    }
    if (j === pat.length - 1) {
      counter++;
      j = lps[j - 1];
    } else if (i < str.length && pat[j] !== str[i]) {
      if (j != 0) j = lps[j - 1];
      else i++;
    }
  }
  return counter;
}

function computePattern(pattern) {
  const result = [];
  let len = 0;
  let i = 1;
  result[0] = 0;
  while (i < pattern.length) {
    if (pattern[len] === pattern[i]) {
      len++;
      result[i] = len;
      i++;
    } else if (len !== 0) {
      len = result[len - 1];
    } else {
      result[i] = len;
      i++
    }
  }
  return result;
}

searchTxt('mymy text, my rules, mymymy', 'mymy');
