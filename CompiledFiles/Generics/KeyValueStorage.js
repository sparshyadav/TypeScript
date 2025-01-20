"use strict";
// Create a generic class KeyValueStorage that can store key-value pairs. Provide methods to add, get, and remove items.
class KeyValueStorage {
    constructor() {
        this.storage = new Map();
    }
    add(key, value) {
        this.storage.set(key, value);
    }
    get(key) {
        return this.storage.get(key);
    }
    remove(key) {
        this.storage.delete(key);
    }
}
const storage = new KeyValueStorage();
storage.add('age', 25);
storage.add('score', 100);
console.log(storage.get('age'));
storage.remove('age');
console.log(storage.get('age'));
