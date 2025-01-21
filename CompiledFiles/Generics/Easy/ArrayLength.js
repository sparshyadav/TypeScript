"use strict";
// Create a generic function getArrayLength that takes an array of any type and returns its length.
function getLength(arr) {
    return arr.length;
}
console.log(getLength([1, 2, 3]));
console.log(getLength(["apple", "banana", "cherry"]));
console.log(getLength([true, false]));
