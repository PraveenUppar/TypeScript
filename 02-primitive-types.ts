export {};

// Primitive Types

let firstName: string = "Praveen";
let totalMarks: number = 450;
let passed: boolean = true;
let emptyValue: null = null;
let notAssigned: undefined = undefined;
let bigValue: bigint = 100n;
let id: symbol = Symbol("id");

console.log(firstName, totalMarks, passed);
console.log(emptyValue, notAssigned, bigValue, id);

// unknown is safer than any.
let userInput: unknown = "JavaScript";

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}

// never is used for values that never happen.
function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Something went wrong");
