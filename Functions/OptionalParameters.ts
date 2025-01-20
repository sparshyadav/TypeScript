// Optional Parameters
function greetUser(name: string, greeting?: string): string {
    return `${greeting || "Hello"} ${name}`;
}

console.log(greetUser("Sparsh", "Hi"));
console.log(greetUser("Sparsh"));