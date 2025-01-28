// Write a function reverseTuple<T extends any[]>(tuple: T): T that reverses the elements in a tuple.
function reverseTuple<T extends any[]>(tuple: T): T[]{
    return tuple.slice().reverse();
}

const tuple = [1, "hello", true];
const reversed = reverseTuple(tuple);
console.log(reversed);