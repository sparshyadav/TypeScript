"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello My name is: ${this.name} and I am ${this.age} years old`;
    }
}
const sparsh = new Person("Sparsh", 22);
console.log(sparsh.greet());
