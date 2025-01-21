"use strict";
// Write a generic function to get the first element of an array.
function firstLargest(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr.reduce((max, current) => {
        return current > max ? current : max;
    });
}
console.log(firstLargest([10, 20, 30]));
console.log(firstLargest(["apple", "banana"]));
