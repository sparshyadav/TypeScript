interface Entity<ID> {
  id: ID;
}

interface Userr<ID> extends Entity<ID> {
  name: string;
}

// Example usage:
const user: Userr<number> = { id: 1, name: "Alice" };
console.log(user); // Output: { id: 1, name: "Alice" }
