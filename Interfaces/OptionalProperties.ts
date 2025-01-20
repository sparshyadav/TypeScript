// Optional Properties
interface Product {
    id: number;
    name: string;
    description?: string;
}

const product1: Product = {
    id: 1,
    name: "Nirma Soap",
    description: "Washing Powder Nirma Soap for Clothes Cleaning"
}

const product2: Product = {
    id: 2,
    name: "Safolla Oats"
}

console.log(product1);
console.log(product2);