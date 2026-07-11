import courses from "./courses.js";
import studyGroups from "./studyGroup.js";

// ============================================
// STEP 1: Define types for the two kinds of events. TypeScript can
// usually infer these from the array literals, but writing them out
// explicitly makes the union type in Step 2 clearer and gives you
// something to reference in function signatures.
// ============================================
type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: "course";
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: "group";
};

// ============================================
// STEP 2: Define a union type representing "any event a student can
// enroll in" — either a Course or a StudyGroup. `eventType` acts as the
// discriminant, letting TypeScript narrow which one you're holding.
// ============================================
type UnionEvent = Course | StudyGroup;

// ============================================
// STEP 3: Combine both lists into one array of UnionEvent, so search
// and enrollment logic only has to deal with one unified list.
// ============================================
const allEvents: UnionEvent[] = [
  ...(courses as Course[]),
  ...(studyGroups as StudyGroup[]),
];

// ============================================
// STEP 4: Write a search function. Given a keyword, return every event
// (course or study group) whose keywords array includes it.
// ============================================
function searchEventsByKeyword(keyword: string): UnionEvent[] {
  return allEvents.filter((event) =>
    event.keywords.includes(keyword.toLowerCase()),
  );
}

// ============================================
// STEP 5: Write a search function by title, for when a student knows
// roughly what they're looking for by name (case-insensitive, partial
// match).
// ============================================
function searchEventsByTitle(title: string): UnionEvent[] {
  const lowerTitle = title.toLowerCase();
  return allEvents.filter((event) =>
    event.title.toLowerCase().includes(lowerTitle),
  );
}

// ============================================
// STEP 6: Track enrolled events in a separate array. This is where the
// "enrolled" state for the student lives throughout the program.
// ============================================
const enrolledEvents: UnionEvent[] = [];

// ============================================
// STEP 7: Write an enroll function. Given an event, add it to
// enrolledEvents — but only if the student isn't already enrolled in it
// (checked by id + eventType, since a course and a group can share an id).
// ============================================
function enroll(event: UnionEvent): void {
  const alreadyEnrolled = enrolledEvents.some(
    (e) => e.id === event.id && e.eventType === event.eventType,
  );

  if (alreadyEnrolled) {
    console.log(`Already enrolled in: ${event.title}`);
    return;
  }

  enrolledEvents.push(event);
  console.log(`Enrolled in: ${event.title}`);
}

// ============================================
// STEP 8: Write a helper that, given a course, finds its paired study
// group (via studyGroupId/courseId), and vice versa. This uses the
// discriminant `eventType` to narrow the union and figure out which
// direction to look.
// ============================================
function findPairedEvent(event: UnionEvent): UnionEvent | undefined {
  if (event.eventType === "course") {
    return studyGroups.find((group) => group.id === event.studyGroupId) as
      | StudyGroup
      | undefined;
  } else {
    return courses.find((course) => course.id === event.courseId) as
      | Course
      | undefined;
  }
}

// ============================================
// STEP 9: Write a function to enroll in an event AND automatically
// enroll in its paired course/study group too, since Unionversity
// students combine both halves of their learning.
// ============================================
function enrollWithPair(event: UnionEvent): void {
  enroll(event);

  const pairedEvent = findPairedEvent(event);
  if (pairedEvent) {
    enroll(pairedEvent);
  }
}

// ============================================
// STEP 10: Print every event the student is currently enrolled in,
// labeled by type.
// ============================================
function printEnrolledEvents(): void {
  console.log("\nCurrently enrolled events:");

  enrolledEvents.forEach((event) => {
    const label = event.eventType === "course" ? "Course" : "Study Group";
    console.log(`- [${label}] ${event.title}`);
  });
}

// ============================================
// Main: search for events, enroll (with paired event), then print
// the enrollment list.
// ============================================
const artResults = searchEventsByKeyword("art");
console.log(
  "Search results for 'art':",
  artResults.map((e) => e.title),
);

if (artResults.length > 0) {
  const firstArtResult = artResults[0];
  if (firstArtResult) {
    enrollWithPair(firstArtResult);
  }
}

const researchResults = searchEventsByTitle("research");
if (researchResults.length > 0) {
  const firstResearchResult = researchResults[0];
  if (firstResearchResult) {
    enrollWithPair(firstResearchResult);
  }
}

printEnrolledEvents();
