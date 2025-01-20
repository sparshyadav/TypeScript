// Create an abstract class Employee with the following:
// Properties: name (public), age (protected), salary (protected).
// Methods:
// Abstract method calculateBonus().
// Concrete method getDetails() to display employee details.
// Create two subclasses Manager and Developer. Implement the calculateBonus() method:
// Managers get a 20% bonus on their salary.
// Developers get a 10% bonus on their salary.
abstract class Employee5 {
    public name: string;
    protected age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract calculateBonus(): number;

    getDetails(): object {
        return {
            name: this.name,
            age: this.age,
            salary: this.salary
        }
    }
}

class Manager2 extends Employee5 {
    calculateBonus(): number {
        return this.salary * 0.2;
    }
}

class Developer extends Employee5 {
    calculateBonus(): number {
        return this.salary * 0.1;
    }
}

const man = new Manager2("Alice", 40, 100000);
const developer = new Developer("Bob", 25, 80000);

console.log(man.getDetails());
console.log("Manager Bonus:", man.calculateBonus());
console.log(developer.getDetails());
console.log("Developer Bonus:", developer.calculateBonus());