import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "thoothukudi-coastal-travel",
  title: "Thoothukudi coastal travel notes for road visitors",
  description: "Practical coastal-city travel notes for Thoothukudi-bound road visitors — purpose clarity, heat, and onward tip geography — without invented harbour tours.",
  lang: "en",
  categoryIds: ["southern-tn-travel"],
  tagIds: ["thoothukudi", "coast", "checklist"],
  publishedAt: "2026-09-05",
  updatedAt: "2026-09-05",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["tirunelveli-travel-hub", "kanyakumari-from-southern-tn", "southern-tamil-nadu-road-trip-planner"],
  relatedPaths: ["/services/outstation-cab"],
  body: [
  { type: 'p', text: "Thoothukudi (Tuticorin) draws road visitors for family, work, coastal-city needs, and as part of wider southern circuits. Arrive with a purpose: city tasks differ from leisurely beach expectations." },
  { type: 'h2', id: "purpose", text: "Purpose first" },
  { type: 'ul', items: [
      "Family or work appointment timing",
      "Transit as part of a longer coastal loop",
      "Not every coastal city equals a resort day — set expectations with your group",
    ] },
  { type: 'h2', id: "heat", text: "Heat and timing" },
  { type: 'p', text: "Coastal heat and glare can be intense. Schedule outdoor walking earlier or later in the day when possible, and keep water available in the car." },
  { type: 'callout', text: "For sedan travel discussions that include Thoothukudi from the Srivilliputtur side, contact Sri Arumuga Travels with your date and drop locality." },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/blog/tirunelveli-travel-hub", label: "Tirunelveli hub" },
      { href: "/services/outstation-cab", label: "Outstation cab" },
    ] },
  ],
};

export default post;
