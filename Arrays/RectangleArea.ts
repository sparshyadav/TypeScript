// Write a function that accepts a tuple of [number, number] representing the dimensions of a rectangle and returns its area.

function area(arr: [number, number]): number {
    return arr[0] * arr[1];
}

console.log(area([4, 5]));
console.log(area([25, 12]));