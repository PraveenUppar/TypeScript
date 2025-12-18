"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String type
const name = "John";
const message = `Hello, ${name}`;
// Number type (includes integers and floats)
const age = 25;
const height = 5.8;
const hex = 0xf00d;
// Boolean type
const isActive = true;
const isStudent = false;
// Any type (avoid this - loses type safety)
let notSure = 4;
notSure = "maybe a string";
notSure = false;
// Void type (no return value)
function logMessage(msg) {
    console.log(msg);
}
// Never type (function never returns - throws or infinite loop)
function throwError(message) {
    throw new Error(message);
}
//# sourceMappingURL=basic.js.map