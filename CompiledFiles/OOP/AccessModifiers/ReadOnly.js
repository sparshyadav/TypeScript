"use strict";
class ReadonlyExample {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return this.name;
    }
}
const readonlyObj = new ReadonlyExample("Sparsh");
console.log(readonlyObj.showName());
// readonlyObj.name="Rakshit"; // Error
