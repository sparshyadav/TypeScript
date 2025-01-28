"use strict";
const userNumber1 = {
    name: "Sparsh Yadav",
    age: 22,
    userDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};
console.log(userNumber1.userDetails());
