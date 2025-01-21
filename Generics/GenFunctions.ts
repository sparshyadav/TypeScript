function identitty<T>(value: T): T{
    return value;
}

console.log(identitty<string>("Hello World"));
console.log(identitty<number>(55));