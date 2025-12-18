// Basic function with typed parameters and return type
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function with multiple parameters
function calculateArea(width: number, height: number): number {
  return width * height;
}

// Function with optional parameters (use ?)
function createUser(name: string, email?: string): void {
  console.log(name);
  if (email) {
    console.log(email);
  }
}

// Function with default parameters
function sayHello(greeting: string = "Hello"): void {
  console.log(greeting);
}

// Function with rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Function type (variable that stores a function)
type MathFunction = (a: number, b: number) => number;

const add: MathFunction = (a, b) => a + b;
const multiply: MathFunction = (a, b) => a * b;

// Arrow functions
const square = (num: number): number => num * num;

// Function overloading
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  return (a as number) + (b as number);
}
