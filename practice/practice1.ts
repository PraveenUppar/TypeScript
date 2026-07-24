export {};

// Practice 1: Basic Types

const studentName: string = "Praveen";
let age: number = 22;
let isActive: boolean = true;
let skills: string[] = ["JavaScript", "TypeScript"];

console.log(studentName, age, isActive, skills);

type Student = {
  name: string;
  age: number;
  skills: string[];
  isActive: boolean;
};

const student: Student = {
  name: studentName,
  age,
  skills,
  isActive,
};

console.log(student);

function createSummary(student: Student): string {
  return `${student.name} knows ${student.skills.join(", ")}`;
}

console.log(createSummary(student));
