// Create an interface Vehicle with properties brand, model, and year. Create a class Car that implements this interface and adds:
// A property fuelType.
// A method drive() that logs the car's brand and fuel type. Create another class ElectricCar that extends Car and overrides drive() to mention the battery capacity.
interface Vehicle4 {
    brand: string;
    model: string;
    year: number;
}

class Car3 implements Vehicle4 {
    brand: string;
    model: string;
    year: number;
    fuelType: string;

    constructor(brand: string, model: string, year: number, fuelType: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
    }

    drive(): void {
        console.log(`${this.brand} (${this.fuelType} is driving)`);
    }
}

class EV extends Car3 {
    batteryCapacity: string;

    constructor(brand: string, model: string, year: number, fuelType: string, battery: string = "Electric") {
        super(brand, model, year, fuelType);
        this.batteryCapacity = battery;
    }

    drive(): void {
        console.log(`${this.brand} (Battery: ${this.batteryCapacity}) is driving silently.`);
    }
}

const car = new Car3("Toyota", "Corolla", 2020, "Petrol");
car.drive();

const electricCar = new EV("Tesla", "Model 3", 2023, "75 kWh");
electricCar.drive();