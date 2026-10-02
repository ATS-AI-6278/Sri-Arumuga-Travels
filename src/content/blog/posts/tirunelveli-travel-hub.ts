import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "tirunelveli-travel-hub",
  title: "Using Tirunelveli as a southern travel hub",
  description: "How Tirunelveli works as a logistics and family hub for southern Tamil Nadu travel — onward coasts, waterfalls, and pacing tips.",
  lang: "en",
  categoryIds: ["southern-tn-travel", "travel-planning"],
  tagIds: ["tirunelveli", "checklist", "coast"],
  publishedAt: "2026-09-06",
  updatedAt: "2026-09-06",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["courtallam-tenkasi-travel-notes", "thoothukudi-coastal-travel", "kanyakumari-from-southern-tn"],
  relatedPaths: ["/services/outstation-cab"],
  body: [
  { type: 'p', text: "Tirunelveli functions for many travelers as a southern hub: transport connections, services, lodging density, and a springboard toward Courtallam, coastal towns, and the Kanyakumari tip." },
  { type: 'h2', id: "why-hub", text: "Why use a hub night" },
  { type: 'ul', items: [
      "Reduce pressure to “finish everything” in a festival-crowded smaller town the same night.",
      "Access meals and pharmacies more predictably.",
      "Split long theme days into humane legs.",
    ] },
  { type: 'h2', id: "spokes", text: "Common spoke ideas" },
  { type: 'table', caption: "Themes only — confirm conditions and timing for your dates.", headers: ["Spoke", "Theme"], rows: [
      ["Courtallam / Tenkasi belt", "Seasonal water"],
      ["Thoothukudi area", "Coastal city / port region travel"],
      ["Kanyakumari area", "Land’s-end visits"],
    ] },
  { type: 'callout', text: "If your sedan journey starts from Srivilliputtur and uses Tirunelveli as a pause or turn point, mention that shape when you enquire with Sri Arumuga Travels." },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/blog/southern-tamil-nadu-road-trip-planner", label: "South TN planner" },
      { href: "/blog/kanyakumari-from-southern-tn", label: "Kanyakumari notes" },
    ] },
  ],
};

export default post;
