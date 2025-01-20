"use strict";
class Storagee {
    constructor() {
        this.items = [];
    }
    addItems(item) {
        this.items.push(item);
    }
    getItems() {
        return this.items;
    }
}
const numStorage = new Storagee();
numStorage.addItems(10);
numStorage.addItems(20);
numStorage.addItems(30);
const stringStorage = new Storagee();
stringStorage.addItems("Hello");
stringStorage.addItems("Sparsh");
stringStorage.addItems("Yadav");
console.log(numStorage.getItems());
console.log(stringStorage.getItems());
