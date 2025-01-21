// Write a generic function to reverse an array of any type.
function reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse();
}

const numArray = [1, 2, 3, 4];
console.log(reverseArray(numArray)); 

const strArray = ["a", "b", "c"];
console.log(reverseArray(strArray));

