import careersData from "@/data/careers.json";

export type CareerRole = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
  remoteOption: string;
  remoteDetails: string;
  compensation: string;
  stack: string[];
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
};

export type CareersData = {
  applyEmail: string;
  roles: CareerRole[];
};

export const careers = careersData as CareersData;

export const careerTeams = ["All", ...Array.from(new Set(careers.roles.map((role) => role.team))).sort()] as const;

export function getCareerBySlug(slug: string): CareerRole | undefined {
  return careers.roles.find((role) => role.slug === slug);
}

export function getAllCareerSlugs(): string[] {
  return careers.roles.map((role) => role.slug);
}

function roleSearchText(role: CareerRole): string {
  return [
    role.title,
    role.team,
    role.location,
    role.type,
    role.remoteOption,
    role.summary,
    role.about,
    role.compensation,
    ...role.stack,
    ...role.responsibilities,
    ...role.requirements,
    ...role.niceToHave,
    ...role.benefits,
  ]
    .join(" ")
    .toLowerCase();
}

export function filterCareers(roles: CareerRole[], query: string, team: string): CareerRole[] {
  const normalizedQuery = query.trim().toLowerCase();
  const normalizedTeam = team.trim();

  return roles.filter((role) => {
    const matchesTeam = !normalizedTeam || normalizedTeam === "All" || role.team === normalizedTeam;
    const matchesQuery = !normalizedQuery || roleSearchText(role).includes(normalizedQuery);
    return matchesTeam && matchesQuery;
  });
}
