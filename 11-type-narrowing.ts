export {};

// Type Narrowing

function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toUpperCase();
  }

  return value.toFixed(2);
}

console.log(formatValue(" typescript "));
console.log(formatValue(99.567));

type SuccessResult = {
  status: "success";
  data: string[];
};

type ErrorResult = {
  status: "error";
  message: string;
};

type Result = SuccessResult | ErrorResult;

function handleResult(result: Result): void {
  if (result.status === "success") {
    console.log(result.data.join(", "));
  } else {
    console.log(result.message);
  }
}

handleResult({ status: "success", data: ["A", "B"] });
handleResult({ status: "error", message: "Something failed" });
