// Assignment 8: Mini Task Tracker
// ===============================
//
// Build a small typed task tracker.
//
// Task:
// {
//   id: number;
//   title: string;
//   description?: string;
//   status: "todo" | "in-progress" | "done";
//   priority: "low" | "medium" | "high";
//   createdAt: Date;
// }
//
// Requirements:
// 1. Create Task type
// 2. Create TaskStatus and TaskPriority union types
// 3. Create addTask()
// 4. Create updateTask(id, updates)
// 5. Create changeStatus(id, status)
// 6. Create filterByStatus(status)
// 7. Create filterByPriority(priority)
// 8. Create getTaskSummary()
export {};

type TaskStatus = "todo" | "in-progress" | "done";
type TaskPriority = "low" | "medium" | "high";

interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: Date;
}

// State management
let tasks: Task[] = [];
let nextId = 1;

// 3. Add Task
function addTask(
  title: string,
  priority: TaskPriority,
  description?: string,
): Task {
  const newTask: Task = {
    id: nextId++,
    title,
    description,
    status: "todo",
    priority,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  return newTask;
}

// 4. Update Task (Partial updates except ID and CreatedAt)
function updateTask(
  id: number,
  updates: Partial<Omit<Task, "id" | "createdAt">>,
): Task | null {
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex === -1) return null;

  tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
  return tasks[taskIndex];
}

// 5. Change Status
function changeStatus(id: number, status: TaskStatus): Task | null {
  return updateTask(id, { status });
}

// 6. Filter by Status
function filterByStatus(status: TaskStatus): Task[] {
  return tasks.filter((t) => t.status === status);
}

// 7. Filter by Priority
function filterByPriority(priority: TaskPriority): Task[] {
  return tasks.filter((t) => t.priority === priority);
}

// 8. Get Task Summary
interface TaskSummary {
  todo: number;
  "in-progress": number;
  done: number;
  total: number;
}

function getTaskSummary(): TaskSummary {
  return tasks.reduce(
    (summary, task) => {
      summary[task.status]++;
      summary.total++;
      return summary;
    },
    { todo: 0, "in-progress": 0, done: 0, total: 0 },
  );
}
