"use strict";
//Create a generic class Cache<K, V> that acts as a key-value store. Implement the following methods:
// add(key: K, value: V) - Adds a key-value pair.
// get(key: K): V | undefined - Retrieves the value for a key.
// remove(key: K): void - Removes a key-value pair.
// getKeys(): K[] - Returns all the keys in the cache.
class Cachee {
    constructor() {
        this.store = new Map();
    }
    add(key, value) {
        this.store.set(key, value);
    }
    get(key) {
        return this.store.get(key);
    }
    remove(key) {
        this.store.delete(key);
    }
    getKeys() {
        return Array.from(this.store.keys());
    }
}
const cache = new Cachee();
cache.add("age", 25);
cache.add("height", 180);
console.log(cache.get("age"));
cache.remove("age");
console.log(cache.getKeys());
