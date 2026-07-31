// Practice 1: Basic Types

const studentName: string = "Praveen";
let age: number = 22;
let isActive: boolean = true;
let skills: string[] = ["JavaScript", "TypeScript"];

console.log(studentName, age, isActive, skills);

type PracticeStudent = {
  name: string;
  age: number;
  skills: string[];
  isActive: boolean;
};

const student: PracticeStudent = {
  name: studentName,
  age: age,
  skills: skills,
  isActive,
};

console.log(student);

function createSummary(student: PracticeStudent): string {
  return `${student.name} knows ${student.skills.join(", ")}`;
}

console.log(createSummary(student));
