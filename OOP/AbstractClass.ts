abstract class Animal { // Abstract Class
    abstract makeSound(): void; // Abstract Method

    move(): void {
        console.log("Moving");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark");
    }
}

const dog = new Dog();
dog.makeSound();

