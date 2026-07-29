// Assignment 1: Typed Calculator
// ==============================
//
// Build a calculator with TypeScript types.
//
// Requirements:
// 1. Create add, subtract, multiply, divide functions
// 2. Type all parameters as number
// 3. Type all return values
// 4. Create an Operator union type: "+", "-", "*", "/"
// 5. Create calculate(a, b, operator)
// 6. Handle division by zero

function add(a: number, b: number): number {
  return a + b;
}

function sub(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number | string {
  if (b === 0) {
    return "Division not possible by zero";
  } else {
    return a / b;
  }
}

type operations = "+" | "-" | "*" | "/";

function calculator(
  a: number,
  b: number,
  operations: operations,
): number | string {
  if (operations === "+") {
    return add(a, b);
  } else if (operations === "-") {
    return sub(a, b);
  } else if (operations === "*") {
    return multiply(a, b);
  } else if (operations === "/") {
    return divide(a, b);
  } else {
    return "Not a valid operator";
  }
}

console.log(calculator(5, 6, "+"));
