// Type aliases can do everything interfaces do, plus more
type Age = number;
type Email = string;

// Union types (type aliases only)
type ID = number | string;
const userId: ID = 123;
const orderId: ID = "ORD-456";

// Intersection types (combine multiple types)
type HasName = { name: string };
type HasAge = { age: number };
type Person = HasName & HasAge;

const person: Person = {
  name: "John",
  age: 30,
};

// Type aliases for functions
type Predicate = (value: any) => boolean;

// Interface extension
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Buddy",
  age: 5,
  breed: "Golden Retriever",
};
