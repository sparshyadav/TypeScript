// Create a generic function getArrayLength that takes an array of any type and returns its length.
function getLength<T>(arr: T[]){
    return arr.length;
}

console.log(getLength([1, 2, 3])); 
console.log(getLength(["apple", "banana", "cherry"])); 
console.log(getLength([true, false]));