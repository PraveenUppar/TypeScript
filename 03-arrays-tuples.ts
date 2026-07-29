export {};

// Arrays and Tuples

let numbers: number[] = [1, 2, 3, 4];
let skills: string[] = ["HTML", "CSS", "TypeScript"];

numbers.push(5);
skills.push("Node.js");

console.log(numbers);
console.log(skills);

let mixedValues: (string | number)[] = ["score", 95, "rank", 1];
console.log(mixedValues);

// Tuple: fixed length and fixed type order.
let user: [number, string, boolean] = [1, "Praveen", true];
console.log(user);

const [userId, userName, isActive] = user;
console.log(userId, userName, isActive);

// Readonly array
const days: readonly string[] = ["Monday", "Tuesday"];
console.log(days);

// days.push("Wednesday"); // Error
