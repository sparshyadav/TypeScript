// Create two interfaces: Vehicle and ElectricVehicle.
// Vehicle should include brand, model, and year.
// ElectricVehicle should extend Vehicle and add batteryCapacity and chargingTime.
// Implement a function that calculates the average charging time for a list of ElectricVehicle objects.
interface Vehicle1 {
    brand: string;
    model: string;
    year: number;
}

interface ElectricVehicle2 extends Vehicle1 {
    batteryCapacity: string;
    chargingTime: string;
}

function averageChargingTime(arr: ElectricVehicle2[]): number {
    let ans: number = arr.reduce((acc: number, obj: ElectricVehicle2) => {
        return acc + parseFloat(obj.chargingTime);
    }, 0);

    let avg: number = parseFloat((ans / arr.length).toFixed(2));
    return avg;
}

const vehicles: ElectricVehicle2[] = [
    { brand: "Tesla", model: "Model S", year: 2020, batteryCapacity: "100kWh", chargingTime: "1.5" },
    { brand: "Nissan", model: "Leaf", year: 2021, batteryCapacity: "60kWh", chargingTime: "1.0" },
    { brand: "BMW", model: "i3", year: 2022, batteryCapacity: "50kWh", chargingTime: "0.8" }
];

console.log(averageChargingTime(vehicles));