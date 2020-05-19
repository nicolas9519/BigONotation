function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);
  if (str1.length !== str2.length) return false;
  const frequency = {};
  for (let num of str1) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  for (let num of str2) {
    if (!frequency[num]) return false;
    frequency[num]--;
  }
  return true;
}

process.stdout.write(`${sameFrequency(182, 281)}\n`);
process.stdout.write(`${sameFrequency(34, 14)}\n`);
process.stdout.write(`${sameFrequency(3589578, 5879385)}\n`);
process.stdout.write(`${sameFrequency(22, 222)}\n`);
