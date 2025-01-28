// Write a function doubleValue that takes a parameter input which can either be a number or a string. If it's a number, return input * 2. If it's a string, return the string concatenated with itself.
function doubleValue(input: number | string): (number | string) {
    if (typeof input === "number") {
        return input * 2;
    }
    else {
        return input + input;
    }
}


console.log(doubleValue(10));
console.log(doubleValue("Hello"));