// Write a generic function to get the first element of an array.
function firstLargest<T extends string | number>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined;
    }

    return arr.reduce((max, current) => {
        return current > max ? current : max;
    });
}

console.log(firstLargest<number>([10, 20, 30]));
console.log(firstLargest<string>(["apple", "banana"])); 