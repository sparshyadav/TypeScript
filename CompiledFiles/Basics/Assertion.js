"use strict";
// You have the following code:
// let value: any = "Hello, TypeScript!";
// Use a type assertion to treat the value as a string and call the toUpperCase() method on it.
// What happens if you incorrectly assert it as a number?
let value = "Hello, TypeScript!";
let Up = value.toUpperCase();
console.log(Up);
