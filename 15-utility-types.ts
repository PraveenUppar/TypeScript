export {};

// Utility Types

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

// Partial makes all properties optional.
const userUpdate: Partial<User> = {
  name: "Pavii",
};

console.log(userUpdate);

// Pick selects specific properties.
type UserPreview = Pick<User, "id" | "name">;

const preview: UserPreview = {
  id: 1,
  name: "Praveen",
};

console.log(preview);

// Omit removes specific properties.
type PublicUser = Omit<User, "email">;

const publicUser: PublicUser = {
  id: 1,
  name: "Praveen",
  isActive: true,
};

console.log(publicUser);

// Record creates an object type with known key/value types.
type RolePermissions = Record<string, string[]>;

const permissions: RolePermissions = {
  admin: ["create", "read", "update", "delete"],
  viewer: ["read"],
};

console.log(permissions);
