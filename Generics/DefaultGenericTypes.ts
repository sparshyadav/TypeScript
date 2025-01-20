interface Container<T = string> {
    value: T;
}

const stringContainer: Container = { value: "Default Type" };
const numberContainer: Container<number> = { value: 22 };

console.log(stringContainer.value);
console.log(numberContainer.value);