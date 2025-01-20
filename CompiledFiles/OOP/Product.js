"use strict";
// Create a Product class with the following:
// Properties: name, price, and discount (all private).
// Getters for all properties.
// A setter for price to ensure it is non-negative.
class Product2 {
    constructor(name, price, discount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get discount() {
        return this._discount;
    }
    set price(value) {
        if (value < 0)
            throw new Error("Price cannot be negative.");
        this._price = value;
    }
    finalPrice() {
        return this._price - (this._price * this._discount) / 100;
    }
}
const prod = new Product2("Laptop", 1000, 10);
console.log(prod.finalPrice());
prod.price = 1200;
console.log(prod.finalPrice());
