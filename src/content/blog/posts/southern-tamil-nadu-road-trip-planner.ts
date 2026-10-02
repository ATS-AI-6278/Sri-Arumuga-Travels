import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "southern-tamil-nadu-road-trip-planner",
  title: "Southern Tamil Nadu road-trip planner (purpose-first)",
  description: "A purpose-first road-trip planner for southern Tamil Nadu — temple, coast, hills, and hub cities — without fake day-by-day kilometre charts.",
  lang: "en",
  categoryIds: ["southern-tn-travel", "road-trips"],
  tagIds: ["checklist", "temple", "coast", "hills"],
  publishedAt: "2026-09-08",
  updatedAt: "2026-09-08",
  heroImage: "/hero-highway.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["courtallam-tenkasi-travel-notes", "kanyakumari-from-southern-tn", "tirunelveli-travel-hub"],
  featured: true,
  relatedPaths: ["/locations", "/services/outstation-cab"],
  body: [
  { type: 'p', text: "Southern Tamil Nadu rewards road travelers who pick a theme: temple heritage, coast, seasonal waterfalls, or family hubs. Mixing every theme into three days usually produces photographs and fatigue in equal measure." },
  { type: 'h2', id: "themes", text: "Choose a theme" },
  { type: 'table', headers: ["Theme", "Example anchors", "Watch-outs"], rows: [
      ["Temple heritage", "Srivilliputtur, Madurai, Rameswaram", "Queues and walking load"],
      ["Seasonal water", "Courtallam / Tenkasi belt", "Rain safety and access"],
      ["Coastal tip", "Kanyakumari area", "Wind, crowds on holidays"],
      ["Hills", "Kodaikanal corridor", "Ghat stamina and weather"],
    ] },
  { type: 'h2', id: "skeleton", text: "A healthy trip skeleton" },
  { type: 'ol', items: [
      "Day 0: arrive and rest near your first anchor.",
      "Day 1: primary purpose only.",
      "Day 2: one secondary add-on or a true rest day.",
      "Buffer afternoon before any long return.",
    ] },
  { type: 'h2', id: "hub", text: "Use hubs without worshipping them" },
  { type: 'p', text: "Madurai and Tirunelveli often work as logistics hubs — airports, stations, medical, and lodging density. Sleeping in a hub can be wiser than forcing every night into a tiny overcrowded festival town." },
  { type: 'callout', text: "From Srivilliputtur, Sri Arumuga Travels can help you discuss sedan legs that match a theme — enquire with your date window." },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/locations", label: "Destinations" },
      { href: "/blog/tirunelveli-travel-hub", label: "Tirunelveli hub" },
      { href: "/blog/courtallam-tenkasi-travel-notes", label: "Courtallam notes" },
    ] },
  ],
};

export default post;
