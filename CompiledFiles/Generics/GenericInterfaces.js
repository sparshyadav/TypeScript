"use strict";
const stringBox = { content: "Hello" };
const numberBox = { content: 55 };
console.log(stringBox.content);
console.log(numberBox.content);
function printPair(pair) {
    console.log(`Key: ${pair.key}, Value: ${pair.value}`);
}
const pair = { key: "Age", value: 22 };
printPair(pair);
