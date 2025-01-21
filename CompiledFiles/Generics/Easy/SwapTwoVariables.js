"use strict";
// Write a generic function to swap two variables of any type.
function swapVariables(a, b) {
    return [b, a];
}
const res1 = swapVariables(5, 10);
console.log(res1);
const res2 = swapVariables("Hello", "World");
console.log(res2);
