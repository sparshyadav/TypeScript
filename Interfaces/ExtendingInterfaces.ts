interface Vehicle {
    brand: string;
    speed: number;
}

interface Car extends Vehicle {
    doors: number;
}

const myCar: Car = {
    brand: "Hyundai",
    speed: 180,
    doors: 4
}

console.log(myCar);