// Assignment 3: Typed Todo Manager
// ================================
//
// Build a todo manager using interfaces and union types.
//
// Todo:
// {
//   id: number;
//   title: string;
//   completed: boolean;
//   priority: "low" | "medium" | "high";
// }
//
// Requirements:
// 1. Start with 3 sample todos
// 2. Create addTodo(title, priority)
// 3. Create listTodos()
// 4. Create markComplete(id)
// 5. Create deleteTodo(id)
// 6. Create updateTodo(id, data)
// 7. Create getTodoById(id)
//
// Bonus:
// - Add dueDate
// - Sort by priority
// - Use a TodoStatus union type

type Todopriority = "low" | "medium" | "high";
type TodoStatus = "pending" | "completed";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  dueDate?: Date;
  priority: Todopriority;
  status: TodoStatus;
}

const todos: Todo[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    completed: false,
    dueDate: new Date("2023-12-31"),
    priority: "high",
    status: "pending",
  },
  {
    id: 2,
    title: "Build a todo app",
    completed: false,
    priority: "medium",
    status: "pending",
  },
  {
    id: 3,
    title: "Deploy the app",
    completed: false,
    priority: "low",
    status: "pending",
  },
];

function addTodo(title: string, priority: Todopriority): Todo {
  const newTodo: Todo = {
    id: todos.length + 1,
    title: title,
    completed: false,
    priority: priority,
    status: "pending",
  };
  todos.push(newTodo);
  return newTodo;
}

function listTodos(todos: Todo[]): void {
  console.log(todos);
}

function markComplete(id: number): Todo[] | string {
  for (let i = 0; i < todos.length; i += 1) {
    let curr_todo = todos[i];
    if (curr_todo.id === id) {
      curr_todo.completed = true;
      curr_todo.status = "completed";
      return todos;
    }
  }
  return "Todo NOT FOUND";
}

function deleteTodo(id: number): Todo[] | string {
  for (let i = 0; i < todos.length; i += 1) {
    if (todos[i].id === id) {
      todos.splice(i, 1);
      return todos;
    }
  }
  return "Todo NOT FOUND";
}

function updateTodo(id: number, data: Todo): Todo[] | string {
  for (let i = 0; i < todos.length; i += 1) {
    if (todos[i].id === id) {
      todos[i] = { ...todos[i], ...data };
      return todos;
    }
  }
  return "Todo NOT FOUND";
}
// ...todos[i] expands the old data:{ id: 1, title: "Buy milk", completed: false }
// ...data injects the new data right next to it:{ id: 1, title: "Buy milk", completed: false, completed: true }
// Overwriting duplicates:JavaScript cannot have two keys with the same name. Since completed: true comes last,
// it overwrites completed: false.

function getTodoById(id: number): Todo | string {
  for (let i = 0; i < todos.length; i += 1) {
    if (todos[i].id === id) {
      return todos[i];
    }
  }
  return "Todo NOT FOUND";
}

function sortTodosByPriority(todos: Todo[]): Todo[] {
  const priorityOrder: Todopriority[] = ["high", "medium", "low"];
  return todos.sort((a, b) => {
    return (
      priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
    );
  });
}
