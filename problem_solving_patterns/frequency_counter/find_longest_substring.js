function findLongestSubstring(str) {
  let start = 0;
  let longest = 0;
  const seen = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

findLongestSubstring('');
findLongestSubstring('rithmschool');
findLongestSubstring('thisisawesome');
findLongestSubstring('thecatinthehat');
findLongestSubstring('bbbbbb');
findLongestSubstring('longestsubstring');
findLongestSubstring('thisishowwedoit');
