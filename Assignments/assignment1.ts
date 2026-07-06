// Exercise 1: Declare variables with proper type annotations
// TODO: Create a string variable called 'userEmail'
// TODO: Create a number variable called 'score' with value 95
// TODO: Create a boolean variable called 'isPremium' with value false

// Exercise 2: Create an array of student objects
// TODO: Define an interface called Student with: id (number), name (string), grade (number)
// TODO: Create an array of at least 3 students

// Exercise 3: Work with tuples
// TODO: Create a tuple type for a product: [productId: number, productName: string, price: number]
// TODO: Create a constant that uses this tuple type

// Exercise 4: Function with type annotations
// TODO: Create a function that takes a string and returns the length as a number
// TODO: Create a function that takes two numbers and returns their sum

// BONUS: Create a function that takes an array of numbers and returns the average

// Exercise 1
const userEmail: string = "user@example.com";
const score: number = 95;
const isPremium: boolean = false;

// Exercise 2
interface Student {
  id: number;
  name: string;
  grade: number;
}

const students: Student[] = [
  { id: 1, name: "Alice", grade: 90 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
];

// Exercise 3
type Product = [productId: number, productName: string, price: number];
const laptop: Product = [1, "Dell Laptop", 999.99];

// Exercise 4
function getStringLength(str: string): number {
  return str.length;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

// BONUS
function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Test your functions
console.log(getStringLength("TypeScript")); // Should output: 10
console.log(addNumbers(5, 10)); // Should output: 15
console.log(calculateAverage([10, 20, 30])); // Should output: 20
