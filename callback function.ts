// Function that takes a callback
function processArray(
  numbers: number[],
  callback: (num: number) => void
): void {
  numbers.forEach(callback);
}

processArray([1, 2, 3], (num) => console.log(num * 2));

// The higher-order function accepts a callback as a parameter
function fetchData(id: number, callback: (data: string) => void) {
  console.log(`Fetching data for ${id}...`);
  setTimeout(() => {
    const result = `Data for ${id}`;
    callback(result);
  }, 1000);
}

fetchData(1, (data) => {
  console.log(`Received: ${data}`);
});

// Callback with return type
function filterNumbers(
  numbers: number[],
  predicate: (num: number) => boolean
): number[] {
  return numbers.filter(predicate);
}

filterNumbers([1, 2, 3, 4, 5], (n) => n % 2 === 0);

// JS Callback function

// function sum(a, b, callback) {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 1000);
// }

// sum(3, 2, (data) => console.log(data));

// TS Callback function

// function sum(a:number, b:number, callback: (data:number) => void ):void {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 1000);
// }

// sum(3, 2, (data) => console.log(data));
