"use strict";
// Write a generic function to reverse an array of any type.
function reverseArray(arr) {
    return arr.slice().reverse();
}
const numArray = [1, 2, 3, 4];
console.log(reverseArray(numArray));
const strArray = ["a", "b", "c"];
console.log(reverseArray(strArray));
