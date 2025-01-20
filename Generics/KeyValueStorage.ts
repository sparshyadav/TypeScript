// Create a generic class KeyValueStorage that can store key-value pairs. Provide methods to add, get, and remove items.
class KeyValueStorage<K, V> {
    private storage: Map<K, V> = new Map();

    add(key: K, value: V): void {
        this.storage.set(key, value);
    }

    get(key: K): V | undefined {
        return this.storage.get(key);
    }

    remove(key: K): void {
        this.storage.delete(key);
    }
}

const storage = new KeyValueStorage<string, number>();
storage.add('age', 25);
storage.add('score', 100);

console.log(storage.get('age'));
storage.remove('age');
console.log(storage.get('age'));
