// Create a function createPair that takes two values of any type and returns a tuple containing
function createPair<T, U>(first: T, second: U): [T, U]{
    return [first, second];
}

console.log(createPair(1, "apple")); 
console.log(createPair("hello", true));