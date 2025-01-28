"use strict";
function describeData(input) {
    if (typeof input === "string") {
        return "This is a Strng";
    }
    else if (typeof input === "number") {
        return "This is a Number";
    }
    else if (input.kind) {
        return `This is a Person named ${input.name}, aged ${input.age}`;
    }
    return "Hello";
}
console.log(describeData("Hello"));
console.log(describeData(42));
console.log(describeData({ kind: "person", name: "Alice", age: 30 }));
