// Create a generic class Queue<T> that supports enqueue (add to the end) and dequeue (remove from the front). Use it for string values.
class Queue<T>{
    private items: T[]=[];

    enqueue(val: T){
        this.items.unshift(val);
    }

    dequeue(){
        this.items.shift();
    }

    getAll(): T[]{
        return this.items;
    }
}

const stringQueue = new Queue<string>();
stringQueue.enqueue("Task 1");
stringQueue.enqueue("Task 2");
console.log(stringQueue.getAll()); 
console.log(stringQueue.dequeue());
console.log(stringQueue.getAll());