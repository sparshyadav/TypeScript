// Create a generic class Container<T> with a default type of string. It should have a method getValue that returns the stored value.
class Container<T=string>{
    private value: T;

    constructor(val: T){
        this.value=val;
    }

    getValue(): T{
        return this.value;
    }
}

const stringContainer = new Container("Default Value");
console.log(stringContainer.getValue()); 

const numberContainer = new Container<number>(42);
console.log(numberContainer.getValue());