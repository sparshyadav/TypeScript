"use strict";
// Create a function to calculate the factorial of a number using recursion.
function recursiveFactorial(value) {
    if (value == 0) {
        return 1;
    }
    return value * recursiveFactorial(value - 1);
}
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(3));
