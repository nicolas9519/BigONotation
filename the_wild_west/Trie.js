const assert = require('assert').strict;

class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  /**
   * Recursive function to add a Trie for each character
   * @param {string} word Word to add
   * @param {number} index Current character
   */
  addWord(word, index = 0) {
    const letter = word[index];
    if (index < word.length) {
      let trie = this.characters[letter] || new Trie();
      trie.addWord(word, index + 1);
      this.characters[letter] = trie;
    } else {
      this.isWord = true;
    }
  }
  /**
   * Go down until the last letter and unmarked as a word
   * If doesn't have children delete the Trie
   * @param {string} word Word to remove
   * @param {number} index Current character
   */
  removeWord(word, index = 0) {
    let letter = word[index];
    if (!letter) {
      this.isWord = false;
    } else {
      const trie = this.characters[letter];
      trie.removeWord(word, index + 1);
      if (!Object.keys(trie.characters).length && !trie.isWord) {
        delete this.characters[letter];
      }
    }
  }
  /**
   * @param {string} word Word to find
   * @returns trie for the last character of the word
   */
  findWord(word) {
    let trie = this;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (trie.characters[letter]) {
        trie = trie.characters[letter];
      } else {
        return undefined;
      }
    }
    return trie;
  }
  getWords(words = [], currentWord = '') {
    if (this.isWord) {
      words.push(currentWord);
    }
    for (let character in this.characters) {
      const newWord = currentWord + character;
      this.characters[character].getWords(words, newWord);
    }
    return words;
  }
  autoComplete(prefix) {
    let current = this;
    for (let char of prefix) {
      if (!current.characters[char]) return [];
      current = current.characters[char];
    }
    return current.getWords([], prefix);
  }
}

const firstTrie = new Trie();
firstTrie.addWord("fun");
assert(firstTrie.characters['f']);
assert(firstTrie.characters['f'].characters['u']);
assert(firstTrie.characters['f'].characters['u'].characters['n']);
assert.equal(firstTrie.characters['f'].characters['u'].characters['n'].isWord, true);

const secondTrie = new Trie();
secondTrie.addWord('ha');
secondTrie.addWord('hat');
secondTrie.addWord('has');
secondTrie.addWord('have');
secondTrie.addWord('hate');
assert.equal(secondTrie.characters['h'].characters['a'].isWord, true);
assert.equal(secondTrie.characters['h'].characters['a'].characters['t'].isWord, true);
assert.equal(secondTrie.characters['h'].characters['a'].characters['v'].isWord, false);
assert.equal(secondTrie.characters['h'].characters['a'].characters['t'].characters['e'].isWord, true);
assert.equal(secondTrie.characters['h'].characters['a'].characters['v'].characters['e'].isWord, true);

const thirdTrie = new Trie();
thirdTrie.addWord('fun');
thirdTrie.addWord('fast');
thirdTrie.addWord('fat');
thirdTrie.addWord('fate');
thirdTrie.addWord('fates');
thirdTrie.addWord('father');
thirdTrie.addWord('forget');
thirdTrie.addWord('awesome');
thirdTrie.addWord('argue');
assert.deepEqual(thirdTrie.getWords(), [
  'fun', 'fast', 'fat', 'fate', 'fates',
  'father', 'forget', 'awesome', 'argue'
]);
assert.deepEqual(thirdTrie.autoComplete('fa'), ['fast', 'fat', 'fate', 'fates', 'father']);
assert.deepEqual(thirdTrie.autoComplete('a'), ['awesome', 'argue']);
assert.deepEqual(thirdTrie.autoComplete('arz'), []);
thirdTrie.removeWord('fat');
assert.equal(thirdTrie.characters['f'].characters['a'].characters['t'].isWord, false);
assert.equal(thirdTrie.characters['f'].characters['a'].characters['t'].characters['e'].isWord, true);
thirdTrie.removeWord('argue');
assert.equal(thirdTrie.characters['a'].characters['r'], undefined);
thirdTrie.removeWord('fates');
assert.equal(thirdTrie.characters['f'].characters['a'].characters['t'].characters['e'].isWord, true);
assert.equal(thirdTrie.characters['f'].characters['a'].characters['t'].characters['e'].characters['s'], undefined);

const fourthTrie = new Trie();
fourthTrie.addWord("fun");
fourthTrie.addWord("fast");
fourthTrie.addWord("fat");
fourthTrie.addWord("fate");
fourthTrie.addWord("father");
assert.equal(fourthTrie.findWord('taco'), undefined);
assert(fourthTrie.findWord('fat').characters);
assert.deepEqual(fourthTrie.findWord('father').characters, {});
assert.deepEqual(fourthTrie.findWord('father').isWord, true);
