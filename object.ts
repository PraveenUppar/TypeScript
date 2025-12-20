// Basic interface
interface Person {
  name: string;
  age: number;
  email: string;
}

const person: Person = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

// Optional properties
interface Car {
  brand: string;
  model: string;
  year?: number; // Optional
  color?: string; // Optional
}

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  // year and color are optional
};

// Readonly properties
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
  maxRetries: number;
}

const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  maxRetries: 3,
};

// Cannot modify readonly properties
// config.apiUrl = "https://other.com";  // Error

// Method definitions in interfaces
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
}

const simpleCalculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
};

type User = {
  id: number;
  name: string;
  active: boolean;
};

// Partial type (make all properties optional)
type PartialUser = Partial<User>;
const updateUser: PartialUser = { name: "Jane" }; // Only name required

// Required type (make all properties required)
type RequiredUser = Required<User>; // All properties must be present

// Pick type (select specific properties)
type UserPreview = Pick<User, "id" | "name">;
const preview: UserPreview = { id: 1, name: "John" };
