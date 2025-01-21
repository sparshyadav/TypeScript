"use strict";
// Write a generic function that accepts an array of any type and returns a reversed array.
function reverseArr(arr) {
    let len = arr.length;
    let revArr = [];
    for (let i = len - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}
const numberss = [1, 2, 3];
const reversedNumbers = reverseArr(numberss);
const stringss = ["a", "b", "c"];
const reversedStrings = reverseArr(stringss);
console.log(reversedNumbers, reversedStrings);
