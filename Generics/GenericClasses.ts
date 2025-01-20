class Storagee<T> {
    private items: T[] = [];

    addItems(item: T): void {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }
}

const numStorage = new Storagee<number>();
numStorage.addItems(10);
numStorage.addItems(20);
numStorage.addItems(30);

const stringStorage = new Storagee<string>();
stringStorage.addItems("Hello");
stringStorage.addItems("Sparsh");
stringStorage.addItems("Yadav");

console.log(numStorage.getItems());
console.log(stringStorage.getItems());
