// The Park Service has just inherited two parks: Wolf Point Park and Raccoon Meadows. Each park has a volunteer program where volunteers help maintain the parks by cleaning campsites, planning educational events, and maintaining hiking trails.

// The Park Service would like to combine their volunteers and introduce a volunteer appreciation program, where the top volunteers get a special edition park badge for their service. It’s your job to help complete a program that was partially written by a colleague to help the Park Service determine this season’s top volunteers.

// You’ll need to take your colleague’s code, combine data from both park’s volunteer logs, then calculate which volunteers have the most hours. Get your bug spray and hiking boots and let’s type out this program!

import {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
  raccoonMeadowsVolunteers,
} from "./raccoon-meadows-log";

import {
  WolfPointVolunteers,
  WolfPointActivity,
  wolfPointVolunteers,
} from "./wolf-point-log";

type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

function combineVolunteers(
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[],
) {}

function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map((volunteer) => {
    let hours = 0;

    volunteer.activities.forEach((activity) => {});

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}

const combinedVolunteers = combineVolunteers(
  [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers),
);
