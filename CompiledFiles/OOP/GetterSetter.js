"use strict";
class Employee2 {
    constructor(salary) {
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value < 0) {
            throw new Error("Salary cannot be Negative");
        }
        else {
            this._salary = value;
        }
    }
}
const emp = new Employee2(50000);
console.log(emp.salary);
emp.salary = 75000;
console.log(emp.salary);
