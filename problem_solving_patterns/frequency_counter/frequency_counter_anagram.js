function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const obj1 = {};
  for (let letter of str1) {
    obj1[letter] = (obj1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    if (!obj1[letter]) return false
    obj1[letter] -= 1;
  }
  return true;
}
process.stdout.write(`${validAnagram('', '')}\n`);
process.stdout.write(`${validAnagram('aaz', 'zza')}\n`);
process.stdout.write(`${validAnagram('anagram', 'nagaram')}\n`);
process.stdout.write(`${validAnagram('rat', 'car')}\n`);
process.stdout.write(`${validAnagram('awesome', 'awesom')}\n`);
process.stdout.write(`${validAnagram('qwerty', 'qeywrt')}\n`);
process.stdout.write(`${validAnagram('texttwisttime', 'timetwisttext')}\n`);