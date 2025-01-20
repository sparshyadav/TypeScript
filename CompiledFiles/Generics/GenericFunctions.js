"use strict";
function identity(value) {
    return value;
}
const numberValue = identity(42);
const stringValue = identity('Hello');
console.log(numberValue);
console.log(stringValue);
// Type Inference
const inferredNumber = identity(42);
const inferredString = identity('TypeScript');
console.log(inferredNumber);
console.log(inferredString);
