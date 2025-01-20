"use strict";
// Using Type Annotations
let numbers = [1, 2, 3, 4, 5];
let strings = ["Sparsh", "Yadav"];
let booleans = [true, false];
// Using Generic Array Types
let numbers2 = [12, 34, 65, 15];
let strings2 = ["Yadav", "Sparsh"];
// Array with Mixed Types
let mixed = ["Sparsh", 1, 32, "Yadav"];
console.log(mixed);
let users = [
    { id: 1, name: "Sparsh", isAdmin: true },
    { id: 2, name: "Raghav", isAdmin: false }
];
// Inline Types
let products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 }
];
// Multidimentional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let cube = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
// Readonly Array
let readArray = [1, 2, 3, 4];
// Tuple Array
let tuple = [1, "Sparsh", true];
// Sorting Arrays
let arr = [3, 1, 6, 4, 7, 4, 8, 9, 1];
arr.sort((a, b) => a - b); // Ascending Order
console.log(arr);
arr.sort((a, b) => b - a); // Descending Order
console.log(arr);
