// Write a function that takes an array of numbers and returns the sum of all elements. Use type annotations.

function sum(arr: number[]): number {
    let ans = arr.reduce((acc, num) => {
        return acc + num;
    }, 0);

    return ans;
}

console.log(sum([1, 2, 3, 4]));
console.log(sum([11, 29, 31, 45]));