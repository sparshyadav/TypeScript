//Write a function getLength that takes a parameter input which can either be a string or an instance of Array. Return the length of the string or the length of the array.
function getLengthh(input: string | any[]): number {
    if (input instanceof Array) {
        return input.length;
    }
    else {
        return input.length;
    }
}

console.log(getLengthh("TypeScript"));
console.log(getLengthh([1, 2, 3, 4]));