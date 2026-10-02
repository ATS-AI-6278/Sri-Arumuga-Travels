import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "courtallam-tenkasi-travel-notes",
  title: "Courtallam and Tenkasi travel notes (season-aware)",
  description: "Season-aware travel notes for the Courtallam–Tenkasi belt — water flow caution, footwear, and day pacing from southern Tamil Nadu towns.",
  lang: "en",
  categoryIds: ["southern-tn-travel", "tamil-nadu-tourism"],
  tagIds: ["courtallam", "monsoon", "family", "checklist"],
  publishedAt: "2026-09-07",
  updatedAt: "2026-09-07",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["monsoon-travel-tips-tamil-nadu", "tirunelveli-travel-hub", "southern-tamil-nadu-road-trip-planner"],
  relatedPaths: ["/services/outstation-cab", "/locations/srivilliputtur"],
  body: [
  { type: 'p', text: "Courtallam (Kutralam) is widely known for seasonal waterfalls, with Tenkasi as a nearby urban reference point for many travelers. The experience depends heavily on recent rainfall and local access management — treat social-media “always on” claims carefully." },
  { type: 'h2', id: "season", text: "Season awareness" },
  { type: 'ul', items: [
      "Water volume and spray change with rains.",
      "Paths can be slippery; footwear with grip matters.",
      "Holiday crowds compress parking and walking space.",
      "Some areas may restrict access for safety — follow local instructions.",
    ] },
  { type: 'h2', id: "day", text: "Day shape suggestions" },
  { type: 'ol', items: [
      "Keep the waterfall visit as the primary outdoor module.",
      "Schedule a dry rest and meal window.",
      "Avoid stacking a long temple-city marathon on the same wet day unless the group is strong.",
    ] },
  { type: 'h2', id: "from", text: "From Srivilliputtur and nearby" },
  { type: 'p', text: "Travelers from Srivilliputtur often treat this as a purpose day rather than a tiny detour. Confirm same-day return versus overnight based on age mix and weather." },
  { type: 'callout', text: "Enquire with Sri Arumuga Travels if you want a sedan day toward the Courtallam–Tenkasi belt — share the date so seasonality can be discussed." },
  { type: 'faq', items: [
      { q: "Can you promise the falls will be at peak when I visit?", a: "No. Nature and local management decide. Check closer to your date." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/blog/monsoon-travel-tips-tamil-nadu", label: "Monsoon tips" },
      { href: "/blog/tirunelveli-travel-hub", label: "Tirunelveli hub" },
    ] },
  ],
};

export default post;
