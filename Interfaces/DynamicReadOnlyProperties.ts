// Design an interface DynamicObject where properties are optional, but all string keys should be readonly. Implement a function that takes a DynamicObject and attempts to modify its properties to demonstrate the readonly behavior.
interface DynamicObject {
    readonly [key: string]: string | number | boolean;
}

const obj: DynamicObject = {
    id: 123,
    name: "Sparsh",
    isActive: true
};

