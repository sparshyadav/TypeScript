function identity<T>(value: T): T {
    return value;
}

const numberValue = identity<number>(42);
const stringValue = identity<string>('Hello');

console.log(numberValue);
console.log(stringValue);

// Type Inference
const inferredNumber = identity(42);
const inferredString = identity('TypeScript');

console.log(inferredNumber);
console.log(inferredString);