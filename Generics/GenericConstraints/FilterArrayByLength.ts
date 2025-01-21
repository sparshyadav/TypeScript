// Write a function filterByLength<T extends { length: number }>(arr: T[], minLength: number): T[] that filters an array of elements to include only those whose length property is greater than or equal to minLength.
function filterByLength<T extends { length: number }>(arr: T[], minLength: number): T[] {
    let filteredArr = arr.filter((item) => {
        return item.length >= minLength;
    })

    return filteredArr;
}

console.log(filterByLength(["hello", "world", "hi"], 3));
console.log(filterByLength([[1, 2], [1, 2, 3]], 3));