// Write a function that accepts a value of type unknown and safely performs operations based on the value's type.
function performOperations(value: unknown): void {
    if (typeof value === "number") {
        let squareOfNumber = value * value;
        console.log(squareOfNumber);
    }
    else if (typeof value === "string") {
        console.log(`The String Says: ${value}`);
    }
    else if (typeof value === "boolean") {
        console.log(`The Initial Value is: ${value}`);
        value = !value;
        console.log(`The Modified Value is: ${value}`);
    }
    else {
        console.log("No Such Operation Found");
    }
}

performOperations(4);
performOperations("Hello World");
performOperations(true);