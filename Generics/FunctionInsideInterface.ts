interface Mapper<T, U> {
    map: (input: T) => U;
}

const stringToNumberMapper: Mapper<string, number> = {
    map: (input) => input.length
};

console.log(stringToNumberMapper.map("Hello"));