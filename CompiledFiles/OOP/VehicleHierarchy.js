"use strict";
class Car3 {
    constructor(brand, model, year, fuelType) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
    }
    drive() {
        console.log(`${this.brand} (${this.fuelType} is driving)`);
    }
}
class EV extends Car3 {
    constructor(brand, model, year, fuelType, battery = "Electric") {
        super(brand, model, year, fuelType);
        this.batteryCapacity = battery;
    }
    drive() {
        console.log(`${this.brand} (Battery: ${this.batteryCapacity}) is driving silently.`);
    }
}
const car = new Car3("Toyota", "Corolla", 2020, "Petrol");
car.drive();
const electricCar = new EV("Tesla", "Model 3", 2023, "75 kWh");
electricCar.drive();
