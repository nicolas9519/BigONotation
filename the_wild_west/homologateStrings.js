/**
 * p = 'abba' s = 'cat dog dog cat' => true
 * p = 'abbb' s = 'cat dog dog cat' => false
 * p = 'abbc' s = 'cat dog dog cat' => false
 */
const assert = require('assert').strict;

function homologateStrings(p, s) {
  if (!p.length || !s.length) return !p.length && !s.length;
  const pMap = {};
  const sMap = {};
  const pArray = p.split('');
  const sArray = s.split(' ');
  if (pArray.length !== sArray.length) return false;
  for (let i = 0; i < pArray.length; i++) {
    const pValue = pArray[i];
    const sValue = sArray[i];
    if (!pMap[pValue] && !sMap[sValue]) {
      pMap[pValue] = sValue;
      sMap[sValue] = pValue;
    } else if (pMap[pValue] !== sValue || sMap[sValue] !== pValue) {
      return false;
    }
  }
  return true;
}
const words = 'cat dog dog cat';
assert.equal(homologateStrings('abba', words), true);
assert.equal(homologateStrings('', ''), true);
assert.equal(homologateStrings('', words), false);
assert.equal(homologateStrings('abba', ''), false);
assert.equal(homologateStrings('abbb', words), false);
assert.equal(homologateStrings('abbc', words), false);
