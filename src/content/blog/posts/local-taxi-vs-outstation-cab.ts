import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "local-taxi-vs-outstation-cab",
  title: "Local taxi vs outstation cab: choose the right pattern",
  description: "Understand the difference between local day taxi hire and outstation cab journeys in Tamil Nadu — when each fits, and what to confirm.",
  lang: "en",
  categoryIds: ["taxi-cab", "outstation"],
  tagIds: ["sedan", "checklist"],
  publishedAt: "2026-09-19",
  updatedAt: "2026-09-19",
  heroImage: "/fleet-scene.webp",
  heroAlt: "Local and outstation sedan travel patterns",
  relatedSlugs: ["how-to-book-outstation-cab-tamil-nadu", "srivilliputtur-day-trip-ideas", "overnight-vs-day-travel-outstation"],
  relatedPaths: ["/services/local-taxi", "/services/outstation-cab"],
  body: [
  { type: 'p', text: "Travelers sometimes ask for an “outstation” car when they need a local day hire — or the reverse. Matching the pattern to the day prevents under-planned waiting and over-tired drivers." },
  { type: 'h2', id: "local", text: "Local / day taxi pattern" },
  { type: 'ul', items: [
      "Stays around a town or nearby cluster",
      "Often includes multiple short stops",
      "Waiting time is part of the day’s logic",
      "Useful for temple towns, errands, and relatives’ homes",
    ] },
  { type: 'h2', id: "outstation", text: "Outstation pattern" },
  { type: 'ul', items: [
      "Connects cities or longer corridors",
      "May be one-way or return",
      "Night duty and driver rest become central topics",
      "City-entry timing matters at the destination",
    ] },
  { type: 'h2', id: "choose", text: "Quick chooser" },
  { type: 'table', headers: ["Your day looks like…", "Lean toward"], rows: [
      ["Several stops near Srivilliputtur / Madurai area", "Local / day hire conversation"],
      ["One long transfer to another city", "Outstation conversation"],
      ["Temple circuit with long waits + later city drop", "Say both needs explicitly — hybrid days need clarity"],
    ] },
  { type: 'callout', text: "Sri Arumuga Travels offers both local day and outstation patterns from Srivilliputtur — describe the day you actually want." },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/services/local-taxi", label: "Local & day taxi" },
      { href: "/services/outstation-cab", label: "Outstation cab" },
    ] },
  ],
};

export default post;
