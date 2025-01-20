"use strict";
// Write a function that accepts a list of user objects (with id and name) as rest parameters and filters out users with duplicate ids. Ensure the function provides type safety for the rest parameters.
function filterUsers(...users) {
    let set = new Set();
    return users.filter((user) => {
        if (set.has(user.id)) {
            return false;
        }
        set.add(user.id);
        return true;
    });
}
const result = filterUsers({ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 1, name: "Alice" }, { id: 3, name: "Charlie" });
console.log(result);
