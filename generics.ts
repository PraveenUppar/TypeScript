// Generics enable you to create components that work with any data type while still providing compile-time type safety.

// Generic function - works with any type
function getFirstElement<T>(arr: T[]): T[] {
  return arr;
}

const firstNumber = getFirstElement([1, 2, 3]); // T inferred as number
const firstName = getFirstElement(["a", "b"]); // T inferred as string

// Example
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// Generic with multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair("hello", 42); // [string, number]

// Generic classes
class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }

  setContent(content: T): void {
    this.content = content;
  }
}

const stringBox = new Box("hello");
const numberBox = new Box(42);

// Generic interfaces
interface Repository<T> {
  getById(id: number): T | null;
  getAll(): T[];
  create(item: T): void;
  update(id: number, item: T): void;
  delete(id: number): void;
}

interface User {
  id: number;
  name: string;
}

class UserRepository implements Repository<User> {
  private users: User[] = [];

  getById(id: number): User | null {
    return this.users.find((u) => u.id === id) || null;
  }

  getAll(): User[] {
    return this.users;
  }

  create(item: User): void {
    this.users.push(item);
  }

  update(id: number, item: User): void {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users[index] = item;
    }
  }

  delete(id: number): void {
    this.users = this.users.filter((u) => u.id !== id);
  }
}
