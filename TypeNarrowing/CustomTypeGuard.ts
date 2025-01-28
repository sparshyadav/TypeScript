// Create a custom type guard function called isString that checks if a value is a string. Use this guard in a function processValue that takes a parameter input of type number | string. If it’s a string, return it in uppercase; otherwise, return the square of the number.
function isString(input: unknown): input is string {
    return typeof input === "string";
}

console.log(isString("sparsh"));
console.log(isString(8));

function processValue(input: number | string): (number | string) {
    if (isString(input)) {
        return input.toUpperCase();
    }
    else {
        return (input * input);
    }
}

console.log(processValue("SparshYadav"));
console.log(processValue(125));