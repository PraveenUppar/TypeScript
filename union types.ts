// A variable can be one of multiple types
type Status = string | number;
const status1: Status = "active";
const status2: Status = 404;

// Union with multiple types
type Response = string | number | boolean;
const response: Response = true;

// Union with objects
type Result =
  | { success: true; data: string }
  | { success: false; error: string };

const success: Result = { success: true, data: "Data loaded" };
const failure: Result = { success: false, error: "Failed to load" };

// Type narrowing with union types
function processInput(input: string | number): void {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else {
    console.log(input * 2);
  }
}

// Discriminated union (tagged union)
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; sideLength: number };
type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.sideLength * shape.sideLength;
  }
}
