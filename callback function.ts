// Function that takes a callback
function processArray(
  numbers: number[],
  callback: (num: number) => void
): void {
  numbers.forEach(callback);
}

// Using the function
processArray([1, 2, 3], (num) => console.log(num * 2));

// Callback with return type
function filterNumbers(
  numbers: number[],
  predicate: (num: number) => boolean
): number[] {
  return numbers.filter(predicate);
}

const evenNumbers = filterNumbers([1, 2, 3, 4, 5], (n) => n % 2 === 0);
