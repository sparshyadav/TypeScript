"use strict";
const userResponse = {
    data: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ],
    total: 50,
    page: 1,
    perPage: 10,
};
console.log(userResponse.data[0].name);
