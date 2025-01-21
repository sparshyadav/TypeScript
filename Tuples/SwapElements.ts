// Create a function that takes a tuple of two elements of any type, swaps the elements, and returns a new tuple with the elements swapped.
// The function signature should be swapElements<T, U>(tuple: [T, U]): [U, T].
// The function should work for any types of T and U.
function swapTuple<T, U>(tuple: [T, U]): [U, T]{
    return [tuple[1], tuple[0]];
}

const swapped1 = swapTuple([1, "apple"]);
console.log(swapped1); 

const swapped2 = swapTuple([true, 5]);
console.log(swapped2); 