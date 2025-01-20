class Employee2 {
    private _salary: number;

    constructor(salary: number) {
        this._salary = salary;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
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