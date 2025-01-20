"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(val) {
        this.items.push(val);
    }
    pop() {
        this.items.pop();
    }
    peek() {
        let len = this.items.length;
        let last = this.items[len - 1];
        return last;
    }
    print() {
        console.log(this.items.map(item => item.print()).join(", "));
    }
}
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    print() {
        return `Book: ${this.title} by ${this.author}`;
    }
}
const stack = new Stack();
stack.push(new Book("1984", "George Orwell"));
stack.push(new Book("Brave New World", "Aldous Huxley"));
stack.print();
stack.pop();
stack.print();
