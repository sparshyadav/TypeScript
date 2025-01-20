// Create a Product class with the following:
// Properties: name, price, and discount (all private).
// Getters for all properties.
// A setter for price to ensure it is non-negative.
class Product2 {
    private _name: string;
    private _price: number;
    private _discount: number;

    constructor(name: string, price: number, discount: number) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get discount(): number {
        return this._discount;
    }

    set price(value: number) {
        if (value < 0) throw new Error("Price cannot be negative.");
        this._price = value;
    }

    finalPrice(): number {
        return this._price - (this._price * this._discount) / 100;
    }
}

const prod = new Product2("Laptop", 1000, 10);
console.log(prod.finalPrice());
prod.price = 1200;
console.log(prod.finalPrice());