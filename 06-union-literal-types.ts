export {};

// Union and Literal Types

let id: string | number;

id = 101;
id = "USER-101";

console.log(id);

function printId(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printId("abc");
printId(123);

// Literal types allow only specific values.
let status: "pending" | "completed" | "failed";

status = "pending";
status = "completed";
// status = "done"; // Error

type Role = "admin" | "editor" | "viewer";

function canDelete(role: Role): boolean {
  return role === "admin";
}

console.log(canDelete("admin"));
console.log(canDelete("viewer"));
