// Basic Types:
// Primitive Types:

// String type
const name: string = "John";
const message: string = `Hello, ${name}`;

// Number type (includes integers and floats)
const age: number = 25;
const height: number = 5.8;
const hex: number = 0xf00d;

// Boolean type
const isActive: boolean = true;
const isStudent: boolean = false;

// Any type (avoid this - loses type safety)
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Void type (no return value)
function logMessage(msg: string): void {
  console.log(msg);
}

// Never type (function never returns - throws or infinite loop)
function throwError(message: string): never {
  throw new Error(message);
}
