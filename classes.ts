// Basic class
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    console.log("Some generic animal sound");
  }

  getInfo(): string {
    return `${this.name} is ${this.age} years old`;
  }
}

const dog = new Animal("Buddy", 5);
console.log(dog.getInfo()); // "Buddy is 5 years old"

// Access modifiers
class BankAccount {
  private balance: number; // Only accessible inside the class
  protected accountNumber: string; // Accessible inside class and subclasses
  public accountHolder: string; // Accessible everywhere (default)

  constructor(accountHolder: string, initialBalance: number) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.accountNumber = Math.random().toString();
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

// Inheritance
class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  makeSound(): void {
    console.log("Woof! Woof!");
  }

  getFullInfo(): string {
    return `${this.getInfo()} and is a ${this.breed}`;
  }
}

// Getters and Setters
class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge >= 0 && newAge <= 150) {
      this._age = newAge;
    } else {
      console.log("Invalid age");
    }
  }
}

// Static members
class MathUtils {
  static PI: number = 3.14159;

  static calculateCircleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.calculateCircleArea(5));
