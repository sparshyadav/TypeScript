"use strict";
function averageChargingTime(arr) {
    let ans = arr.reduce((acc, obj) => {
        return acc + parseFloat(obj.chargingTime);
    }, 0);
    let avg = parseFloat((ans / arr.length).toFixed(2));
    return avg;
}
const vehicles = [
    { brand: "Tesla", model: "Model S", year: 2020, batteryCapacity: "100kWh", chargingTime: "1.5" },
    { brand: "Nissan", model: "Leaf", year: 2021, batteryCapacity: "60kWh", chargingTime: "1.0" },
    { brand: "BMW", model: "i3", year: 2022, batteryCapacity: "50kWh", chargingTime: "0.8" }
];
console.log(averageChargingTime(vehicles));
