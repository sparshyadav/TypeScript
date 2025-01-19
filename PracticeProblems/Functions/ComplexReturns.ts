// Write a function that accepts a string and a boolean. If the boolean is true, the function should return an object containing the string and its length. If the boolean is false, it should return just the length of the string. Ensure the function enforces proper type safety with TypeScript.
function stringLength(str: string, bool: boolean): { value: string, length: number } | number {
    if (bool == true) {
        return {
            value: str,
            length: str.length
        }
    }
    else {
        return str.length;
    }
}

let result1 = stringLength("Typescript", true);
let result2 = stringLength("Typescript", false);

console.log(result1);
console.log(result2);