// Write a generic function to swap two variables of any type.
function swapVariables<T>(a: T, b: T): T[] {
    return [b, a];
}

const res1 = swapVariables<number>(5, 10);
console.log(res1);

const res2 = swapVariables<string>("Hello", "World");
console.log(res2);