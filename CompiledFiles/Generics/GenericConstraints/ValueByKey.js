"use strict";
// Write a function getValueByKey<T extends object>(obj: T, key: keyof T): T[keyof T] that retrieves the value of a specific key from an object.
function getValueByKey(obj, key) {
    return obj[key];
}
const person = { id: 1, name: "Sparsh", age: 22 };
console.log(getValueByKey(person, "name"));
console.log(getValueByKey(person, "age"));
