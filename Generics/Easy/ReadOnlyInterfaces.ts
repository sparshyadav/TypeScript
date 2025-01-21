// Create a generic interface ReadonlyCollection<T> that has a single method getAll to return an array of type T. Implement it for a collection of string items.
interface ReadonlyCollection<T> {
    getAll(): T[];
}

const stringCollection: ReadonlyCollection<string> = {
    getAll: () => ["apple", "banana", "cherry"]
}

console.log(stringCollection.getAll());
