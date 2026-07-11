import type {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
} from "./raccoon-meadows-log.js";
import { raccoonMeadowsVolunteers } from "./raccoon-meadows-log.js";

import type {
  WolfPointVolunteers,
  WolfPointActivity,
} from "./wolf-point-log.js";
import { wolfPointVolunteers } from "./wolf-point-log.js";

// ============================================
// STEP 1: Define one common shape for an activity, regardless of which
// park it came from. Every activity, once normalized, has a description,
// hours (a number), and verified (a boolean).
// ============================================
type CombinedActivity = {
  description: string;
  hours: number;
  verified: boolean;
};

// ============================================
// STEP 2: Define one common shape for a volunteer. id must be string
// since Wolf Point's ids are strings ("400sg") — Raccoon Meadows'
// numeric ids will get converted to strings to match.
// ============================================
type Volunteer = {
  id: string;
  name: string;
  activities: CombinedActivity[];
};

// ============================================
// STEP 3: Write a type guard to tell the two activity shapes apart.
// Wolf Point activities have a "notes" field; Raccoon Meadows activities
// have a "description" field. Checking for one of these tells TypeScript
// (and us) which shape we're looking at.
// ============================================
function isWolfPointActivity(
  activity: RaccoonMeadowsActivity | WolfPointActivity,
): activity is WolfPointActivity {
  return "notes" in activity;
}

// ============================================
// STEP 4: Normalize a single activity into the common CombinedActivity
// shape, no matter which park it came from.
// ============================================
function normalizeActivity(
  activity: RaccoonMeadowsActivity | WolfPointActivity,
): CombinedActivity {
  if (isWolfPointActivity(activity)) {
    return {
      description: activity.notes,
      hours: activity.time,
      verified: activity.verified,
    };
  }

  return {
    description: activity.description,
    hours: activity.hours,
    verified: activity.verified === "Yes",
  };
}

// ============================================
// STEP 5: Write a type guard to tell the two volunteer shapes apart.
// Wolf Point ids are strings; Raccoon Meadows ids are numbers.
// ============================================
function isWolfPointVolunteer(
  volunteer: RaccoonMeadowsVolunteers | WolfPointVolunteers,
): volunteer is WolfPointVolunteers {
  return typeof volunteer.id === "string";
}

// ============================================
// STEP 6: combineVolunteers() takes the mixed list from both parks and
// returns a single array of Volunteer, with ids as strings and
// activities normalized into CombinedActivity.
// ============================================
function combineVolunteers(
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[],
): Volunteer[] {
  return volunteers.map((volunteer) => {
    return {
      id: isWolfPointVolunteer(volunteer) ? volunteer.id : String(volunteer.id),
      name: volunteer.name,
      activities: volunteer.activities.map(normalizeActivity),
    };
  });
}

// ============================================
// STEP 7: calculateHours() sums each volunteer's activity hours now that
// every activity has a normalized "hours" field to add up.
// ============================================
function calculateHours(volunteers: Volunteer[]) {
  return volunteers.map((volunteer) => {
    let hours = 0;

    volunteer.activities.forEach((activity) => {
      hours += activity.hours;
    });

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}

// ============================================
// STEP 8: Combine both parks' volunteers, then calculate total hours,
// then sort descending so top volunteers appear first.
// ============================================
const combinedVolunteers = combineVolunteers(
  ([] as (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]).concat(
    wolfPointVolunteers,
    raccoonMeadowsVolunteers,
  ),
);

const volunteerHours = calculateHours(combinedVolunteers);

const topVolunteers = [...volunteerHours].sort((a, b) => b.hours - a.hours);

console.log(topVolunteers);
