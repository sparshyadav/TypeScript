// Create a Calculator function that takes an enum value (Add, Subtract, Multiply, Divide) and two numbers, then performs the corresponding operation.
enum Operation {
    Add = "ADD",
    Subtract = "SUBTRACT",
    Multiply = "MULTIPLY",
    Divide = "DIVIDE",
}

function calculator(op: Operation, num1: number, num2: number): number {
    switch (op) {
        case Operation.Add:
            return num1 + num2;
        case Operation.Subtract:
            return num1 - num2;
        case Operation.Multiply:
            return num1 * num2;
        case Operation.Divide:
            if (num2 === 0) throw new Error("Cannot divide by zero");
            return num1 / num2;
        default:
            throw new Error("Invalid operation");
    }
}

console.log(calculator(Operation.Add, 10, 5));       // Output: 15
console.log(calculator(Operation.Subtract, 10, 5));  // Output: 5
console.log(calculator(Operation.Multiply, 10, 5));  // Output: 50
console.log(calculator(Operation.Divide, 10, 5));    // Output: 2
