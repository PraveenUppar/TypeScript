export {};
// Assignment 5: Generic API Response
// ==================================
//
// Build reusable API response types with generics.
//
// Requirements:
// 1. Create ApiSuccess<T>
// 2. Create ApiError
// 3. Create ApiResponse<T> union type
// 4. Create successResponse(data)
// 5. Create errorResponse(message, statusCode)
// 6. Create handleResponse(response)
// 7. Test with User[], Product[], and Todo[]

interface User {
  readonly id: number;
  name: string;
}

interface Product {
  readonly id: number;
  name: string;
  price: number;
}

interface Todo {
  readonly id: number;
  title: string;
  completed: boolean;
}

const Users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const Products: Product[] = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 499.99 },
];

const Todos: Todo[] = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Build a project", completed: true },
];

type ApiSuccess<T> = {
  success: true;
  data: T;
};

type ApiError = {
  success: false;
  error: {
    message: string;
    statusCode: number;
  };
};

type ApiResponse<T> = ApiSuccess<T> | ApiError;

function successResponse<T>(data: T): ApiSuccess<T> {
  return {
    success: true,
    data,
  };
}

function errorResponse(message: string, statusCode: number): ApiError {
  return {
    success: false,
    error: {
      message,
      statusCode,
    },
  };
}

function handleResponse(response: ApiResponse<unknown>) {
  if (response.success) {
    console.log("Success:", response.data);
  } else {
    console.error("Error:", response.error.message, response.error.statusCode);
  }
}

const userResponse = successResponse<User[]>(Users);
handleResponse(userResponse);

const productResponse = successResponse<Product[]>(Products);
handleResponse(productResponse);

const todoErrorResponse = errorResponse(
  "Failed to fetch todos from server.",
  500,
);

handleResponse(todoErrorResponse);
