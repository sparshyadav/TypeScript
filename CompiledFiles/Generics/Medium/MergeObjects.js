"use strict";
//Write a generic function that merges properties from two objects into one. If a key exists in both objects, the second object’s value should override the first one.
function mergeObj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const obj11 = { name: "Sparsh", age: 21 };
const obj21 = { age: 22, city: "Delhi" };
const mergedd = mergeObj(obj1, obj2);
console.log(merged);
