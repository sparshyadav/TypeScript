"use strict";
// Write a function that takes a string, a number, or a boolean and returns the type of the value. Use a return type annotation.
function returnType(value) {
    if (typeof value === "string") {
        return "It's a String";
    }
    else if (typeof value === "number") {
        return "It's a Number";
    }
    else {
        return "It's a Boolean";
    }
}
console.log(returnType("Hello World"));
console.log(returnType(45));
console.log(returnType(true));
