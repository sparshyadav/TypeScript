// Write a function that calculates the sum of an array of numbers using rest parameters.
function sumOfNumber(...numbers: number[]): number {
    const sum = numbers.reduce((acc, num) => {
        return acc + num;
    })

    return sum;
}

console.log(sumOfNumber(1, 2, 3, 4));
console.log(sumOfNumber(1, 2, 3, 4, 5, 34, 5, 34));
console.log(sumOfNumber(9, 8, 7, 6, 5));