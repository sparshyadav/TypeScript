"use strict";
class Animal {
    move() {
        console.log("Moving");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}
const dog = new Dog();
dog.makeSound();
