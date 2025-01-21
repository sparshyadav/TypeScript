// Create a generic class Container<T> that holds a value of type T. Then create a generic class NestedContainer<T> that holds a Container<T>. Add methods to get and set the inner value.
class Containner<T>{
    private value: T;

    constructor(val: T){
        this.value=val;
    }

    getValue(): T{
        return this.value;
    }

    setValue(val: T): void{
        this.value=val;
    }
}

class NestedContainer<T>{
    private con: Containner<T>;

    constructor(value: T){
        this.con=new Containner(value);
    }

    getConVal(){
        return this.con.getValue();
    }

    setConVal(val:T){
        this.con.setValue(val);
    }
}

const nested = new NestedContainer<number>(10);
console.log(nested.getConVal()); 
nested.setConVal(20);
console.log(nested.getConVal());