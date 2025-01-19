// Write a function that accepts a list of user objects (with id and name) as rest parameters and filters out users with duplicate ids. Ensure the function provides type safety for the rest parameters.

type User = { id: number; name: string };

function filterUsers(...users: User[]): User[] {
    let set = new Set<number>();
    return users.filter((user) => {
        if (set.has(user.id)) {
            return false;
        }

        set.add(user.id);
        return true;
    });
}

const result = filterUsers(
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" },
    { id: 3, name: "Charlie" }
);

console.log(result); 