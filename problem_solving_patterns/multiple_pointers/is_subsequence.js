function isSubsequence(str1, str2) {
  if (!str1.length || !str2.length || str1.length > str2.length) return false;
  let p1 = 0;
  let p2 = 0;
  while (p1 < str1.length && p2 < str2.length) {
    if (str1[p1] === str2[p2]) {
      p1++;
    }
    if(p1 === str1.length) return true;
    p2++;
  }
  return false;
}

process.stdout.write(`${isSubsequence('hello', 'hello world')}\n`);
process.stdout.write(`${isSubsequence('sing', 'string')}\n`);
process.stdout.write(`${isSubsequence('abc', 'abracadabra')}\n`);
process.stdout.write(`${isSubsequence('abc', 'acb')}\n`);
