// A tuple is an array with a fixed number of elements, where each element has a known, specific type at a specific position.

// Tuple with specific types
type Coordinates = [number, number];
const point: Coordinates = [10, 20];
// const invalid: Coordinates = [10, "20"];  // Error

// Tuples with names (better readability)
// access elements by index: user[0] for ID, user[1] for name, user[2] for active status.
type User = [id: number, name: string, active: boolean];
const user: User = [1, "John", true];
