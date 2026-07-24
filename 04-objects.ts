export {};

// Objects and Object Types

let student: {
  id: number;
  name: string;
  marks: number[];
  isActive: boolean;
} = {
  id: 1,
  name: "Praveen",
  marks: [90, 85, 95],
  isActive: true,
};

console.log(student.name);

student.name = "Pavii";
student.marks.push(100);

console.log(student);

// Nested object type
let course: {
  title: string;
  teacher: {
    name: string;
    experience: number;
  };
} = {
  title: "TypeScript",
  teacher: {
    name: "Mentor",
    experience: 5,
  },
};

console.log(course.teacher.name);
