function hash(key, arrayLen) {
  let total = 0;
  const WEIRD_PRIME = 97;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

hash("pink", 5);
hash("orange", 5);
hash("brown", 5);
