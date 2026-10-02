import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "kodaikanal-weekend-from-south-tn",
  title: "Kodaikanal weekend from southern Tamil Nadu: plan the hill day wisely",
  description: "Hill-weekend planning toward Kodaikanal from southern Tamil Nadu — weather, motion sickness, sedan limits, and pacing — without fake viewpoints lists priced as facts.",
  lang: "en",
  categoryIds: ["southern-tn-travel", "road-trips"],
  tagIds: ["kodaikanal", "hills", "family", "packing"],
  publishedAt: "2026-09-26",
  updatedAt: "2026-09-26",
  heroImage: "/hero-scene.webp",
  heroAlt: "Hill road travel planning in Tamil Nadu",
  relatedSlugs: ["tamil-nadu-hill-station-basics", "packing-for-south-india-road-travel", "overnight-vs-day-travel-outstation"],
  relatedPaths: ["/locations/kodaikanal", "/services/outstation-cab"],
  body: [
  { type: 'p', text: "Kodaikanal is a popular hill escape for Tamil Nadu families. From southern plains towns, the journey involves altitude change, cooler air, and winding roads — factors that affect children, elders, and drivers differently." },
  { type: 'h2', id: "before", text: "Before you lock the weekend" },
  { type: 'ul', items: [
      "Check recent weather and road advisories from reliable public sources.",
      "Decide overnight lodging before you treat viewpoints as a checklist.",
      "Ask who in the group gets motion sickness on ghat roads.",
      "Clarify whether your sedan trip is one-way drop, return, or multi-day with the same car.",
    ] },
  { type: 'h2', id: "pack", text: "Packing for a short hill stay" },
  { type: 'ul', items: [
      "A light warm layer even after hot plains mornings",
      "Medicines you already use for motion sickness if advised by your clinician",
      "Comfortable walking shoes with grip",
      "Rain protection in wet months",
      "Documents and a power bank",
    ] },
  { type: 'h2', id: "pace", text: "Pacing on arrival" },
  { type: 'p', text: "Many visitors feel better if the first evening is quiet: check-in, a simple meal, and short outdoor time rather than an immediate viewpoint marathon. Fog and crowd patterns change by season and holiday calendars." },
  { type: 'callout', text: "For outstation sedan discussions toward Kodaikanal from Srivilliputtur, contact Sri Arumuga Travels with dates and passenger details." },
  { type: 'h2', id: "faq", text: "FAQ" },
  { type: 'faq', items: [
      { q: "Do you publish a must-see ranked list with timings?", a: "No. Viewpoint access and crowd conditions change. Use local guidance after you arrive." },
      { q: "Is a small car suitable for hill weekends?", a: "Sedans are common for small families; luggage volume and passenger comfort still need an honest count when you enquire." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/locations/kodaikanal", label: "Kodaikanal route" },
      { href: "/services/outstation-cab", label: "Outstation cab" },
      { href: "/blog/tamil-nadu-hill-station-basics", label: "Hill station basics" },
    ] },
  ],
};

export default post;
