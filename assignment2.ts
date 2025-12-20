// Exercise 1: Function with multiple parameters
// TODO: Create a function 'calculateBMI' that takes height (number) and weight (number)
// TODO: Return the BMI as a number. Formula: weight / (height * height)

function calculateBMI(height: number, weight: number): number {
  return weight / (height * height);
}

calculateBMI(120, 23);

// Exercise 2: Optional and default parameters
// TODO: Create a function 'greetUser' that takes:
//   - name: string (required)
//   - title: string (optional, default: "Mr/Ms")
//   - age: number (optional)
// TODO: Return a personalized greeting string

function greetUser(name: string, age: number, title?: string): void {
  console.log(`Heelo ${title}${name} ${age}  `);
}
greetUser("Pavi", 20);

// Exercise 3: Rest parameters
// TODO: Create a function 'findMax' that takes any number of numbers
// TODO: Return the maximum number using rest parameters

function findMax(...numbers: number[]): void {
  console.log(Math.max(...numbers));
}

findMax(1, 2, 3, 4);

// Exercise 4: Callback function
// TODO: Create a function 'mapArray' that:
//   - Takes an array of numbers
//   - Takes a callback function that transforms each number
//   - Returns a new array with transformed values

function mapArray(nums: number[], callback: (num: number) => number): number[] {
  return nums.map(callback);
}

const result = mapArray([1, 2, 3, 4], (num) => num * 2);
console.log(result);
