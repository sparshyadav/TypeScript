// Rest Parameters
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, num) => {
        return acc + num;
    }, 0);
}

console.log(sumAll(1, 2, 3, 4, 5, 6));