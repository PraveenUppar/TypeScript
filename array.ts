// String array
const names: string[] = ["Alice", "Bob", "Charlie"];
const cities: Array<string> = ["NYC", "LA"];

// Number array
const numbers: number[] = [1, 2, 3, 4, 5];

// Array of multiple types (union types - covered later)
const mixed: (string | number)[] = [1, "two", 3, "four"];

// Array of objects
interface User {
  id: number;
  name: string;
}
const users: User[] = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
