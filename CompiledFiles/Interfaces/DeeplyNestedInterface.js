"use strict";
// Create an interface Company with the following structure:
// name (string, required)
// employees (array of Employee objects, required)
function addEmployees(company, newEmployee) {
    company.employees.push(newEmployee);
}
const company = {
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
const newEmployee = {
    id: 3,
    details: {
        name: "Raghav",
        department: "IT"
    }
};
addEmployees(company, newEmployee);
console.log(company);
