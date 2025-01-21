interface KeyValuePair<K, V>{
    key: K;
    value: V;
}

const numToStrPair: KeyValuePair<number, string> = { key: 1, value: "one" };
const strToBoolPair: KeyValuePair<string, boolean> = { key: "isActive", value: true };

console.log(numToStrPair); 
console.log(strToBoolPair);