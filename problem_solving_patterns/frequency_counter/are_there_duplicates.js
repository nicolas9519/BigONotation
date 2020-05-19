function areThereDuplicates(...arg) {
  const parameters = arg;
  const frequency = {};
  for (let val of parameters) {
    if (frequency[val]) {
      return true
    }
    frequency[val] = true;
  }
  return false;
}

process.stdout.write(`${areThereDuplicates(1, 2, 3)}\n`);
process.stdout.write(`${areThereDuplicates(1, 2, 2)}\n`);
process.stdout.write(`${areThereDuplicates('a', 'b', 'c', 'a')}\n`);
