interface Box<T> {
    content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 55 };

console.log(stringBox.content);
console.log(numberBox.content);



// Generic Interface in Functions
interface Pair<K, V> {
    key: K;
    value: V;
}

function printPair<K, V>(pair: Pair<K, V>) {
    console.log(`Key: ${pair.key}, Value: ${pair.value}`);
}

const pair: Pair<string, number> = { key: "Age", value: 22 };
printPair(pair);