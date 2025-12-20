// Define all types in one place

// Todo

export type TodoStatus = "pending " | "completed";
export interface Todo {
  readonly id: number;
  title: string;
  description: string;
  status: TodoStatus;
  createdAt: Date;
  dueDate?: Date;
  tags: string[];
}

// Create Todo
export interface CreateTodoDTO {
  title: string;
  description: string;
  dueDate?: Date;
  tags?: string[];
}
// Update Todo
export interface UpdateTodoDTO {
  title?: string;
  description?: string;
  status?: TodoStatus;
  dueDate?: Date;
  tags?: string[];
}

// Filter Todo
export interface TodoFilter {
  status?: TodoStatus;
  tag?: string;
  sortBy?: "createdAt" | "dueDate";
}
