// String literals
type Direction = "up" | "down" | "left" | "right";
const move: Direction = "up";
// const invalid: Direction = "diagonal";  // Error

// Number literals
type Dice = 1 | 2 | 3 | 4 | 5 | 6;
const roll: Dice = 4;

// Boolean literals
type IsActive = true;
const active: IsActive = true;
// const inactive: IsActive = false;  // Error

// Combining literal and union types
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type SuccessCode = 200 | 201;
type ErrorCode = 400 | 401 | 404 | 500;
type StatusCode = SuccessCode | ErrorCode;
