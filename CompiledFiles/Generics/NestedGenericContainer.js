"use strict";
// Create a generic class Container<T> that holds a value of type T. Then create a generic class NestedContainer<T> that holds a Container<T>. Add methods to get and set the inner value.
class Containner {
    constructor(val) {
        this.value = val;
    }
    getValue() {
        return this.value;
    }
    setValue(val) {
        this.value = val;
    }
}
class NestedContainer {
    constructor(value) {
        this.con = new Containner(value);
    }
    getConVal() {
        return this.con.getValue();
    }
    setConVal(val) {
        this.con.setValue(val);
    }
}
const nested = new NestedContainer(10);
console.log(nested.getConVal());
nested.setConVal(20);
console.log(nested.getConVal());
