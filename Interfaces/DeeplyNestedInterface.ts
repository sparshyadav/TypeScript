// Create an interface Company with the following structure:
// name (string, required)
// employees (array of Employee objects, required)

// The Employee interface should include:
// id (number, readonly)
// details (nested interface with name and optional department)

// Write a function to add new employees to the Company, ensuring that readonly constraints are maintained.

interface Company {
    name: string;
    employees: Employee[];
}

interface Employee {
    readonly id: number;
    details: Details;
}

interface Details {
    name: string;
    department?: string;
}

function addEmployees(company: Company, newEmployee: Employee) {
    company.employees.push(newEmployee);
}

const company: Company = {
    name: "Magic Software",
    employees: [
        {
            id: 1,
            details: { name: "Sparsh", department: "Engineering" }
        },
        {
            id: 2,
            details: { name: "Rakshit" }
        }
    ]
};

const newEmployee: Employee = {
    id: 3,
    details: {
        name: "Raghav",
        department: "IT"
    }
};

addEmployees(company, newEmployee);
console.log(company);
