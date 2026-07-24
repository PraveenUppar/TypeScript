export {};

// Practice 2: Functions, Unions, Arrays

type Grade = "A" | "B" | "C" | "F";

function calculateAverage(marks: number[]): number {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return total / marks.length;
}

function getGrade(average: number): Grade {
  if (average >= 90) return "A";
  if (average >= 75) return "B";
  if (average >= 50) return "C";
  return "F";
}

const marks: number[] = [90, 85, 95];
const average = calculateAverage(marks);

console.log(average);
console.log(getGrade(average));

function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value * 2);
  }
}

printValue("typescript");
printValue(50);
