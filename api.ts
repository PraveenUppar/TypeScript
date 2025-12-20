interface ApiResponse<T> {
  status: number;
  data?: T;
  error?: string;
  message?: string;
  timestamp: number;
}

interface ApiRequest {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: any;
}
