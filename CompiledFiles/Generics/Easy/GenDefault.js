"use strict";
// Create a generic class Container<T> with a default type of string. It should have a method getValue that returns the stored value.
class Container {
    constructor(val) {
        this.value = val;
    }
    getValue() {
        return this.value;
    }
}
const stringContainer = new Container("Default Value");
console.log(stringContainer.getValue());
const numberContainer = new Container(42);
console.log(numberContainer.getValue());
