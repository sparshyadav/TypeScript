//Write a generic function to create a key-value pair.
function createKeyValPair<T, U>(first: T, second: U): {key: T, value: U}{
    return {
        key: first,
        value: second
    }
}

const pair1 = createKeyValPair<string, number>("age", 25);
console.log(pair1); 

const pair2 = createKeyValPair<number, string>(1, "one");
console.log(pair2);