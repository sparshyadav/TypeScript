// Add Function - Normal Way
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(3, 5));



// Using Void as a Return Value
function message(msg: string): void {
    console.log(msg);
}

message("This is the use of Void Return Type");



// Optional Parameters
function greetUser(name: string, greeting?: string): string {
    return `${greeting || "Hello"} ${name}`;
}

console.log(greetUser("Sparsh", "Hi"));
console.log(greetUser("Sparsh"));



// Default Parameters
function calculateArea(length: number = 12, breadth: number = 10): number {
    return length * breadth;
}

console.log(calculateArea(4, 6));
console.log(calculateArea());



// Rest Parameters
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, num) => {
        return acc + num;
    }, 0);
}

console.log(sumAll(1, 2, 3, 4, 5, 6));



// Arrow Functions
const sum = (a: number, b: number): number => {
    return a + b;
}

console.log(sum(4, 6));