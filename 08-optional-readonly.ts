export {};

// Optional and Readonly Properties

type User = {
  readonly id: number;
  name: string;
  email?: string;
  phone?: string;
};

const user: User = {
  id: 1,
  name: "Praveen",
};

user.name = "Pavii";
user.email = "pavii@example.com";

// user.id = 2; // Error because id is readonly

console.log(user);

function printUser(user: User): void {
  console.log(`Name: ${user.name}`);

  if (user.email) {
    console.log(`Email: ${user.email}`);
  }
}

printUser(user);

// Optional chaining
console.log(user.phone?.toUpperCase());
