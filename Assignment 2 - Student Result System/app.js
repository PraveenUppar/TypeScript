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
function calculateTotal(student) {
    //   return student.marks.reduce((acc, current) => acc + current, 0);
    var total = 0;
    for (var i = 0; i < student.marks.length; i++) {
        total = total + student.marks[i];
    }
    return total;
}
function calculateAverage(student) {
    return calculateTotal(student) / student.marks.length;
}
function getGrade(average) {
    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";
    }
    else {
        return "F";
    }
}
function generateResult(student) {
    var total = calculateTotal(student);
    var average = calculateAverage(student);
    var grade = getGrade(average);
    return {
        id: student.id,
        name: student.name,
        total: total,
        average: average,
        grade: grade,
    };
}
function getResults(students) {
    var resultsList = [];
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var result = generateResult(student);
        resultsList.push(result);
    }
    return resultsList;
}
// function getResults(students: Student[]): Result[] {
//   return students.map((student) => generateResult(student));
// }
// 7. Find the topper (highest average score)
function findTopper(students) {
    if (students.length === 0)
        return null;
    var results = getResults(students);
    // return results.reduce((highest, current) => current.average > highest.average ? current : highest);
    var highest = results[0];
    for (var i = 1; i < results.length; i++) {
        var current = results[i];
        if (current.average > highest.average) {
            highest = current;
        }
    }
    return highest;
}
function filterFailedStudents(students) {
    var allResults = getResults(students);
    var failedResults = [];
    for (var i = 0; i < allResults.length; i++) {
        var result = allResults[i];
        if (result.grade === "F") {
            failedResults.push(result);
        }
    }
    return failedResults;
}
// function filterFailedStudents(students: Student[]): Result[] {
//   return getResults(students).filter((result) => result.grade === "F");
// }
