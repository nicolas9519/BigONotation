const assert = require('assert').strict;

function constructNote(message, letters) {
  const countLetters = {};
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    countLetters[letter] = (countLetters[letter] || 0) + 1;
  }
  for (let i = 0; i < message.length; i++) {
    const letter = message[i];
    if (!countLetters[letter] || countLetters[letter] <= 0) return false;
    countLetters[letter]--;
  }
  return true;
}

assert.equal(constructNote('aa', 'abc'), false);
assert.equal(constructNote('abc', 'dcba'), true);
assert.equal(constructNote('aabbcc', 'bcabcaddff'), true);
