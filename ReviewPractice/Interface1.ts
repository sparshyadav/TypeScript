// Create an interface User with optional properties and a method to display the user's details.
interface UserD {
    name: string;
    age: number;
    userDetails(): string;
}

const userNumber1: UserD = {
    name: "Sparsh Yadav",
    age: 22,
    userDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

console.log(userNumber1.userDetails());