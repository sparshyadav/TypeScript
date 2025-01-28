// Define a Data type that can be either:
// A string
// A number
// An object of type { kind: "person"; name: string; age: number }.
// Write a function describeData that returns:
// "This is a string: ..." if it's a string
// "This is a number: ..." if it's a number
// "This is a person named ..." if it's an object of kind person.
type Data = string | number | { kind: "person"; name: string; age: number };

function describeData(input: Data): string {
    if (typeof input === "string") {
        return "This is a Strng";
    }
    else if (typeof input === "number") {
        return "This is a Number";
    }
    else if (input.kind){
        return `This is a Person named ${input.name}, aged ${input.age}`;
    }

    return "Hello";
}

console.log(describeData("Hello"));
console.log(describeData(42));
console.log(describeData({ kind: "person", name: "Alice", age: 30 }));