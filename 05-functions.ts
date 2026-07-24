export {};

// Functions

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3));

const greet = (name: string): string => {
  return `Hello, ${name}`;
};

console.log(greet("Praveen"));

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Learning TypeScript");

function createUser(name: string, role: string = "user"): { name: string; role: string } {
  return {
    name,
    role,
  };
}

console.log(createUser("Praveen"));

function total(...numbers: number[]): number {
  return numbers.reduce((sum, current) => sum + current, 0);
}

console.log(total(10, 20, 30));
