"use strict";
//Create a generic function filterArray that filters elements from an array based on a condition. The function should work with any type of array.
function filterArray(array, predicate) {
    return array.filter(predicate);
}
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
const words = ['TypeScript', 'Generics', 'Functions'];
const longWords = filterArray(words, (word) => word.length > 8);
console.log(evenNumbers);
console.log(longWords);
