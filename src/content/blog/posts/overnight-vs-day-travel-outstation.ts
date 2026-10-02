import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "overnight-vs-day-travel-outstation",
  title: "Overnight vs day travel for outstation cab journeys",
  description: "Compare overnight and daytime outstation sedan travel in Tamil Nadu — fatigue, city entry, family sleep, and questions to settle before departure.",
  lang: "en",
  categoryIds: ["outstation", "travel-planning"],
  tagIds: ["night-travel", "sedan", "family"],
  publishedAt: "2026-09-16",
  updatedAt: "2026-09-16",
  heroImage: "/hero-highway.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["safe-night-travel-practices-tn", "chennai-outstation-travel-checklist", "how-to-book-outstation-cab-tamil-nadu"],
  relatedPaths: ["/services/outstation-cab"],
  body: [
  { type: 'p', text: "Families often ask whether leaving at night “saves time.” Sometimes it reduces certain congestion; it also shifts fatigue onto drivers and passengers. Choose deliberately." },
  { type: 'h2', id: "day", text: "Day travel strengths" },
  { type: 'ul', items: [
      "Easier meal stops and visible landmarks",
      "Often better for travelers who do not sleep in cars",
      "Simpler coordination with daytime appointments",
    ] },
  { type: 'h2', id: "night", text: "Night travel strengths and costs" },
  { type: 'ul', items: [
      "May avoid some peak urban congestion on certain corridors",
      "Demands honest driver rest planning",
      "Harder for some elders and children to rest well",
      "Arrival timing may hit early-morning city constraints",
    ] },
  { type: 'h2', id: "decide", text: "Decision prompts" },
  { type: 'table', headers: ["If…", "Consider"], rows: [
      ["You have a hard morning appointment", "A plan that protects sleep and buffer — not bravado"],
      ["The group includes infants or frail elders", "Lean toward humane day pacing unless medically advised otherwise"],
      ["The driver duty would be extremely long", "Ask about rest strategy or splitting the journey"],
    ] },
  { type: 'callout', text: "When you enquire with Sri Arumuga Travels, say whether you prefer day or night departure so expectations stay aligned." },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/blog/safe-night-travel-practices-tn", label: "Safe night travel" },
      { href: "/services/outstation-cab", label: "Outstation cab" },
    ] },
  ],
};

export default post;
