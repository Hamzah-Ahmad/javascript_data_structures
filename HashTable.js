//A hash table is a data structure that uses hashing to implement associative arrays or mapping of key-value pairs.

class HashTable {
  constructor() {
    this.table = new Array(3);
  }
  getItem(key) {
    const indx = this.hash(key, this.table.length);
    if (!this.table[indx]) {
      return null;
    }
    return this.table[indx].find((x) => x[0] === key)[1];
  }

  setItem(key, value) {
    const indx = this.hash(key, this.table.length);

    //checing for collisions in the bucket
    if (this.table[indx]) {
      this.table[indx].push([key, value]);
    } else {
      this.table[indx] = [[key, value]];
    }
  }

  hash(str, size) {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
      hash = hash + str.charCodeAt(i);
    }
    //Taking the modular of the key with the array size, so that the index will always stay between 0 and tableSize - 1.)
    return hash % size;
  }
}

const myTable = new HashTable();
myTable.setItem("firstName", "Hamzah");
myTable.setItem("lastName", "Ahmad");
myTable.setItem("age", 24);

console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
console.log(myTable.getItem("age"));
console.log(myTable);
