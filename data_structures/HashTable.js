class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const data = this.keyMap[index];
    if (data) {
      for (const values of data) {
        if (key === values[0]) {
          return values[1];
        }
      }
    }
    return undefined;
  }

  keys() {
    return this._mapByIndex(0);
  }

  values() {
    return this._mapByIndex(1);
  }

  _mapByIndex(pos) {
    const arr = [];
    for (const group of this.keyMap) {
      if (!group) continue;
      for (const values of group) {
        if (!arr.includes(values[pos])) {
          arr.push(values[pos]);
        }
      }
    }
    return arr;
  }

  _hash(key) {
    const WEIRD_PRIME = 97;
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 101); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

const hashTable = new HashTable(5);
hashTable.set("hello", "world");
hashTable.set("ola", "k ace");
hashTable.set("tnc", "bn o q");
hashTable.set("node", "js");
hashTable.set("time", "delta");
hashTable.get("hello");
hashTable.keys();
hashTable.values();
