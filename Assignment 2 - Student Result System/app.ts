// Assignment 2: Student Result System
// ===================================
//
// Build a typed student result system.
//
// Types:
// - Student
// - Grade
// - Result
//
// Requirements:
// 1. Student should have id, name, marks
// 2. Grade should allow only "A", "B", "C", "F"
// 3. Create calculateTotal(student)
// 4. Create calculateAverage(student)
// 5. Create getGrade(average)
// 6. Create generateResult(student)
// 7. Find topper
// 8. Filter failed students
//
// Bonus:
// - Add readonly id
// - Add optional email
// - Sort results by average

type Student = {
  readonly id: number;
  name: string;
  marks: number[];
  email?: string;
};

type Grade = "A" | "B" | "C" | "F";

type Result = {
  id: number;
  name: string;
  total: number;
  average: number;
  grade: Grade;
};

function calculateTotal(student: Student): number {
  //   return student.marks.reduce((acc, current) => acc + current, 0);
  let total = 0;
  for (let i = 0; i < student.marks.length; i++) {
    total = total + student.marks[i];
  }
  return total;
}

function calculateAverage(student: Student): number {
  return calculateTotal(student) / student.marks.length;
}

function getGrade(average: number): Grade {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else {
    return "F";
  }
}

function generateResult(student: Student): Result {
  const total = calculateTotal(student);
  const average = calculateAverage(student);
  const grade = getGrade(average);

  return {
    id: student.id,
    name: student.name,
    total,
    average,
    grade,
  };
}

function getResults(students: Student[]): Result[] {
  let resultsList: Result[] = [];
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let result = generateResult(student);
    resultsList.push(result);
  }
  return resultsList;
}
// function getResults(students: Student[]): Result[] {
//   return students.map((student) => generateResult(student));
// }

// 7. Find the topper (highest average score)
function findTopper(students: Student[]): Result | null {
  if (students.length === 0) return null;
  const results = getResults(students);

  // return results.reduce((highest, current) => current.average > highest.average ? current : highest);

  let highest = results[0];
  for (let i = 1; i < results.length; i++) {
    let current = results[i];
    if (current.average > highest.average) {
      highest = current;
    }
  }
  return highest;
}

function filterFailedStudents(students: Student[]): Result[] {
  let allResults = getResults(students);
  let failedResults: Result[] = [];
  for (let i = 0; i < allResults.length; i++) {
    let result = allResults[i];
    if (result.grade === "F") {
      failedResults.push(result);
    }
  }
  return failedResults;
}
// function filterFailedStudents(students: Student[]): Result[] {
//   return getResults(students).filter((result) => result.grade === "F");
// }
