// Using Type Annotations
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["Sparsh", "Yadav"];
let booleans: boolean[] = [true, false];



// Using Generic Array Types
let numbers2: Array<number> = [12, 34, 65, 15];
let strings2: Array<string> = ["Yadav", "Sparsh"];



// Array with Mixed Types
let mixed: (number | string)[] = ["Sparsh", 1, 32, "Yadav"];
console.log(mixed);



// Arrays of Objects
interface User {
    id: number;
    name: string;
    isAdmin: boolean;
}

let users: User[] = [
    { id: 1, name: "Sparsh", isAdmin: true },
    { id: 2, name: "Raghav", isAdmin: false }
]

// Inline Types
let products: { id: number; name: string; price: number }[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 }
];



// Multidimentional Arrays
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let cube: number[][][] = [
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
let readArray: readonly number[] = [1, 2, 3, 4];



// Tuple Array
let tuple: [number, string, boolean] = [1, "Sparsh", true];



// Sorting Arrays
let arr = [3, 1, 6, 4, 7, 4, 8, 9, 1];

arr.sort((a, b) => a - b); // Ascending Order
console.log(arr);

arr.sort((a, b) => b - a); // Descending Order
console.log(arr);