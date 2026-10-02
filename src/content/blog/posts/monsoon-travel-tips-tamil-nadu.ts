import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "monsoon-travel-tips-tamil-nadu",
  title: "Monsoon travel tips for Tamil Nadu road journeys",
  description: "Monsoon-season road travel tips for Tamil Nadu — flexibility, footwear, waterfall caution, and cab communication — without pretending rain follows a clock.",
  lang: "en",
  categoryIds: ["travel-planning", "tamil-nadu-tourism"],
  tagIds: ["monsoon", "checklist", "hills", "coast"],
  publishedAt: "2026-09-12",
  updatedAt: "2026-09-12",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["courtallam-tenkasi-travel-notes", "tamil-nadu-hill-station-basics", "packing-for-south-india-road-travel"],
  relatedPaths: ["/services/outstation-cab"],
  body: [
  { type: 'p', text: "Monsoon months can make southern landscapes lush and roads slower. Plans that stay slightly flexible are more enjoyable than itineraries that punish every cloud." },
  { type: 'h2', id: "flex", text: "Build flexibility" },
  { type: 'ul', items: [
      "Keep outdoor waterfall or viewpoint plans as optional modules.",
      "Carry rain protection that packs small.",
      "Allow extra time for wet-road caution.",
      "Watch for local advisories on hill and ghat stretches.",
    ] },
  { type: 'h2', id: "footwear", text: "Footwear and temple days" },
  { type: 'p', text: "Wet footwear areas become slippery. Choose shoes with grip and patience at counters." },
  { type: 'h2', id: "cab", text: "Talk to your driver early" },
  { type: 'p', text: "If heavy rain is forecast, ask whether departure timing should shift. A later start in safer conditions can beat an early start in poor visibility." },
  { type: 'callout', text: "Share monsoon-season travel dates with Sri Arumuga Travels when you enquire so pacing can be discussed." },
  { type: 'faq', items: [
      { q: "Are Courtallam falls always accessible in rain?", a: "Access and safety vary with water flow and local management. Confirm the same day." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/blog/courtallam-tenkasi-travel-notes", label: "Courtallam & Tenkasi notes" },
      { href: "/blog/tamil-nadu-hill-station-basics", label: "Hill basics" },
    ] },
  ],
};

export default post;
