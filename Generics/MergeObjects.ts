//Write a generic function that merges properties from two objects into one. If a key exists in both objects, the second object’s value should override the first one.
function mergeObjj<T, U>(obj1: T, obj2: U): T&U{
    return {...obj1, ...obj2};
}

const obj1 = { name: "Sparsh", age: 21 };
const obj2 = { age: 22, city: "Delhi" };
const merged = mergeObj(obj1, obj2);
console.log(merged);
