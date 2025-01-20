class ReadonlyExample {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    showName(): string {
        return this.name;
    }
}

const readonlyObj = new ReadonlyExample("Sparsh");
console.log(readonlyObj.showName());
// readonlyObj.name="Rakshit"; // Error