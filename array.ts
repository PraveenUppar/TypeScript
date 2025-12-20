// String array
const names: string[] = ["Alice", "Bob", "Charlie"];

// Number array
const numbers: number[] = [1, 2, 3, 4, 5];

// Array of multiple types (union types - covered later)
const mixed: (string | number)[] = [1, "two", 3, "four"];

// This is an Interface defining the structure (shape) of an object. It defines property names and their types.
// access properties by name: users[0].name
// Array of objects
interface User {
  id: number;
  name: string;
}

// user is an array with User as Interface
const users: User[] = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

console.log(users);
