export {};

// Modules
// TypeScript files become modules when they use import or export.

// Example:
// math.ts
// export function add(a: number, b: number): number {
//   return a + b;
// }

// app.ts
// import { add } from "./math";
// console.log(add(2, 3));

// Default export example:
// logger.ts
// export default function log(message: string): void {
//   console.log(message);
// }

// app.ts
// import log from "./logger";
// log("Hello");

type Config = {
  appName: string;
  version: string;
};

const config: Config = {
  appName: "TypeScript Revision",
  version: "1.0.0",
};

console.log(config);
