export {};

// Generics

function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("hello"));
console.log(identity<number>(100));
console.log(identity(true));

function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

console.log(getFirst<number>([10, 20, 30]));
console.log(getFirst<string>(["a", "b", "c"]));

type ApiResponse<T> = {
  success: boolean;
  data: T;
  error?: string;
};

type User = {
  id: number;
  name: string;
};

const response: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Praveen",
  },
};

console.log(response.data.name);
