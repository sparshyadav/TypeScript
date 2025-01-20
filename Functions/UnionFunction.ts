//Write a function that accepts either a string or a number and returns the length of the string or the number of digits in the number.

function len(num: string | number): number {
    if (typeof num === "string") {
        return num.length;
    }
    else {
        return num.toString().length;
    }
}

console.log(len("Sparsh"));
console.log(len(32516));