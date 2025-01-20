// Arrays of Objects
interface User {
    id: number;
    name: string;
    isAdmin: boolean;
}

let userss: User[] = [
    { id: 1, name: "Sparsh", isAdmin: true },
    { id: 2, name: "Raghav", isAdmin: false }
]

// Inline Types
let productss: { id: number; name: string; price: number }[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 }
];