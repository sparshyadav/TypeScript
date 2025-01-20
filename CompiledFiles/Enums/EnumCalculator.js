"use strict";
// Create a Calculator function that takes an enum value (Add, Subtract, Multiply, Divide) and two numbers, then performs the corresponding operation.
var Operation;
(function (Operation) {
    Operation["Add"] = "ADD";
    Operation["Subtract"] = "SUBTRACT";
    Operation["Multiply"] = "MULTIPLY";
    Operation["Divide"] = "DIVIDE";
})(Operation || (Operation = {}));
function calculator(op, num1, num2) {
    switch (op) {
        case Operation.Add:
            return num1 + num2;
        case Operation.Subtract:
            return num1 - num2;
        case Operation.Multiply:
            return num1 * num2;
        case Operation.Divide:
            if (num2 === 0)
                throw new Error("Cannot divide by zero");
            return num1 / num2;
        default:
            throw new Error("Invalid operation");
    }
}
console.log(calculator(Operation.Add, 10, 5)); // Output: 15
console.log(calculator(Operation.Subtract, 10, 5)); // Output: 5
console.log(calculator(Operation.Multiply, 10, 5)); // Output: 50
console.log(calculator(Operation.Divide, 10, 5)); // Output: 2
