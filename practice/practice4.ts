export {};

// Practice 4: Generics

function getLast<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}

console.log(getLast<number>([1, 2, 3]));
console.log(getLast<string>(["HTML", "CSS", "TS"]));

type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const todoResponse: ApiResponse<Todo[]> = {
  success: true,
  data: [
    { id: 1, title: "Learn generics", completed: false },
    { id: 2, title: "Practice TypeScript", completed: true },
  ],
};

console.log(todoResponse.data);
