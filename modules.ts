// // Exporting types and functions (types-module.ts)
// export interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// export type UserRole = "admin" | "user" | "guest";

// export class UserService {
//   getUser(id: number): User | null {
//     // Implementation
//     return null;
//   }
// }

// export const defaultRole: UserRole = "user";

// // Default export
// export default class Logger {
//   log(message: string): void {
//     console.log(`[LOG] ${message}`);
//   }
// }

// // Importing in another file (importing-module.ts)

// import { User, UserRole, UserService } from "./types-module";
// import type { User as UserType } from "./types-module";

// import Logger from "./types-module";
// const logger = new Logger();
// logger.log("Hello");

// // Re-exporting
// export { User, UserService } from "./types-module";
// export type { UserRole } from "./types-module";
