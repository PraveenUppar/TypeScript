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
//
// Bonus:
// - Use generics for reusable storage
// - Persist tasks in localStorage
// - Build a simple DOM UI
