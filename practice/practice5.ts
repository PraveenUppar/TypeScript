export {};

// Practice 5: Classes and Async

class TodoStore {
  private todos: string[] = [];

  add(todo: string): void {
    this.todos.push(todo);
  }

  list(): string[] {
    return [...this.todos];
  }
}

const store = new TodoStore();
store.add("Revise classes");
store.add("Revise async");

console.log(store.list());

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

async function getTodo(): Promise<Todo> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = (await response.json()) as Todo;
  return todo;
}

getTodo()
  .then((todo) => console.log(todo.title))
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error(error.message);
    }
  });
