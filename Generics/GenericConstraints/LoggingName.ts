// Create a function logNames<T extends { name: string }>(items: T[]): void that logs the name property of each item in the array.
function logNames<T extends { name: string }>(items: T[]): void {
    items.forEach((item) => {
        console.log(item.name);
    });
}

logNames([{ name: "Alice" }, { name: "Bob", age: 30 }]);