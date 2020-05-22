class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
    return this
  }

  get(key) {
    let index = this._hash(key)
    if (!this.keyMap[index]) return undefined
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1]
      }
    }
    return undefined
  }

  
}

const hash = new HashTable(17)

hash.set("maroon", "Richard")
hash.set("yellow", "Peter")
hash.set("olive", "PenutButter")
hash.set("salmon", "100")
hash.set("lightcoral", "100")
hash.set("mediumvioletred", "yes")
hash.set("plum", "grape")


console.log(hash.get("maroon"))