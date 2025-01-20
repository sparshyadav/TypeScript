class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello My name is: ${this.name} and I am ${this.age} years old`;
    }
}

const sparsh = new Person("Sparsh", 22);
console.log(sparsh.greet());