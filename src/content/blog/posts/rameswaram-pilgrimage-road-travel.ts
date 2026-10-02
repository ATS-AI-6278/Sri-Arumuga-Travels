import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "rameswaram-pilgrimage-road-travel",
  title: "Rameswaram pilgrimage road travel: pace before distance",
  description: "Plan a Rameswaram pilgrimage road journey from southern Tamil Nadu with family pacing, heat management, and cab questions — without invented km or fares.",
  lang: "en",
  categoryIds: ["southern-tn-travel", "tamil-nadu-tourism"],
  tagIds: ["rameswaram", "pilgrimage", "temple", "family"],
  publishedAt: "2026-09-27",
  updatedAt: "2026-09-27",
  heroImage: "/hero-highway.webp",
  heroAlt: "Pilgrimage road travel in Tamil Nadu",
  relatedSlugs: ["temple-pilgrimage-family-travel", "planning-multi-stop-temple-circuit", "madurai-from-srivilliputtur-travel-tips"],
  featured: true,
  relatedPaths: ["/locations/rameswaram", "/services/temple-pilgrimage"],
  body: [
  { type: 'p', text: "Rameswaram draws pilgrims and families for temple darshan and sea-edge visits. From inland southern towns such as Srivilliputtur, the journey is a full travel day for many groups — especially with elders." },
  { type: 'p', text: "Prioritize pacing over packing every stop. Heat, walking, and queue time at sacred sites often matter more than the map line between two pins." },
  { type: 'h2', id: "pace", text: "Pacing principles" },
  { type: 'ul', items: [
      "Start with a realistic wake-up and meal plan, not only a departure boast.",
      "Decide whether Rameswaram is a same-day return or an overnight stay before you book the car.",
      "Keep hydration and shade breaks non-negotiable in warm months.",
      "If combining temples, choose a primary shrine focus for the day.",
    ] },
  { type: 'h2', id: "family", text: "Family and elder considerations" },
  { type: 'ol', items: [
      "Ask about seating comfort and stop frequency when you enquire.",
      "Pack light food that elders actually eat, not only snacks for children.",
      "Agree who will stay with someone who needs to sit out a queue.",
      "Avoid stacking a late-night return after a physically long darshan day unless the group is used to it.",
    ] },
  { type: 'h2', id: "ask", text: "What to confirm with your cab" },
  { type: 'ul', items: [
      "Waiting time expectations at the temple area",
      "Whether the trip is one-way, return the same day, or multi-day",
      "Luggage and passenger count for a sedan",
      "Night driving if your plan slips late",
    ] },
  { type: 'callout', text: "Sri Arumuga Travels can discuss sedan pilgrimage trips toward Rameswaram from Srivilliputtur. Share dates, passenger ages, and whether you need an overnight plan." },
  { type: 'h2', id: "faq", text: "FAQ" },
  { type: 'faq', items: [
      { q: "Can you quote exact travel hours here?", a: "No. Road and stop patterns vary. Ask for an estimate with your pickup point and date." },
      { q: "Is sea-edge sightseeing mandatory with temple darshan?", a: "No. Many families keep the day temple-focused, especially with limited mobility." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/locations/rameswaram", label: "Srivilliputtur to Rameswaram" },
      { href: "/services/temple-pilgrimage", label: "Temple & pilgrimage" },
      { href: "/blog/temple-pilgrimage-family-travel", label: "Family temple travel" },
    ] },
  ],
};

export default post;
