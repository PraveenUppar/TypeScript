export {};

// TypeScript Basics
// Type-check: tsc --noEmit

let studentName: string = "Praveen";
let age: number = 22;
let isLearning: boolean = true;

console.log(studentName);
console.log(age);
console.log(isLearning);

// Type inference: TypeScript understands the type automatically.
let course = "TypeScript";
let score = 95;

console.log(course, score);

// Reassignment must match the original type.
course = "Advanced TypeScript";
score = 100;

// course = 123; // Error
// score = "high"; // Error

const appName: string = "Revision App";
console.log(appName);

// any disables type checking. Avoid it unless necessary.
let unknownInput: any = "hello";
unknownInput = 123;
unknownInput = true;

console.log(unknownInput);
