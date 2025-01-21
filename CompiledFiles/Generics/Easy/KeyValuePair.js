"use strict";
//Write a generic function to create a key-value pair.
function createKeyValPair(first, second) {
    return {
        key: first,
        value: second
    };
}
const pair1 = createKeyValPair("age", 25);
console.log(pair1);
const pair2 = createKeyValPair(1, "one");
console.log(pair2);
