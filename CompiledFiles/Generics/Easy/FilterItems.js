"use strict";
// Write a generic function to filter items of a specific type from an array.
function filterByType(arr, typeCheck) {
    return arr.filter(typeCheck);
}
const numbersss = [1, 2, 3, 4, 5];
const evenNumberss = filterByType(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);
const wordss = ["apple", "banana", "cherry"];
const longWordss = filterByType(words, (word) => word.length > 5);
console.log(longWords);
