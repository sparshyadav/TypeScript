// Create a generic Stack class that supports push, pop, and peek operations. The stack should work only with types that extend a custom Printable interface with a print() method.
interface Printable {
    print(): string;
}

class Stack<T extends Printable> {
    private items: T[] = [];

    push(val: T): void {
        this.items.push(val);
    }

    pop(): void {
        this.items.pop();
    }

    peek(): T {
        let len = this.items.length;
        let last = this.items[len - 1];

        return last;
    }

    print(): void {
        console.log(this.items.map(item => item.print()).join(", "));
    }
}


class Book implements Printable {
    constructor(public title: string, public author: string) { }
    print(): string {
        return `Book: ${this.title} by ${this.author}`;
    }
}

const stack = new Stack<Book>();
stack.push(new Book("1984", "George Orwell"));
stack.push(new Book("Brave New World", "Aldous Huxley"));
stack.print();
stack.pop();
stack.print();
