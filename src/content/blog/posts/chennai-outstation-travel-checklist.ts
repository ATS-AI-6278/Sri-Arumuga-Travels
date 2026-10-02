import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "chennai-outstation-travel-checklist",
  title: "Srivilliputtur to Chennai outstation checklist",
  description: "A practical checklist for longer outstation sedan travel toward Chennai — night vs day choices, luggage, and confirmation questions — without invented highway times.",
  lang: "en",
  categoryIds: ["outstation", "travel-planning"],
  tagIds: ["chennai", "checklist", "sedan", "night-travel"],
  publishedAt: "2026-09-25",
  updatedAt: "2026-09-25",
  heroImage: "/hero-highway.webp",
  heroAlt: "Long-distance road travel checklist",
  relatedSlugs: ["overnight-vs-day-travel-outstation", "how-to-book-outstation-cab-tamil-nadu", "what-to-ask-before-booking-taxi"],
  relatedPaths: ["/locations/chennai", "/services/outstation-cab"],
  body: [
  { type: 'p', text: "Chennai trips from southern Tamil Nadu are longer outstation journeys for most families. The useful planning work is less about memorizing a single map duration and more about departure window, rest needs, and city-entry timing." },
  { type: 'h2', id: "checklist", text: "Pre-departure checklist" },
  { type: 'ol', items: [
      "Confirm pickup address and a backup landmark.",
      "Share passenger count and luggage honestly.",
      "Decide day departure vs overnight running with the group’s sleep needs in mind.",
      "Carry water, light food, medicines, and phone charging options.",
      "Save driver and family contact numbers offline.",
      "Note the Chennai drop area precisely (neighbourhood, station, airport, or hotel).",
    ] },
  { type: 'h2', id: "city", text: "City-entry realities" },
  { type: 'p', text: "Chennai traffic density varies by corridor and hour. If you have a train, flight, or appointment, build buffer after the highway stretch — the last urban segment is where tight plans break." },
  { type: 'h2', id: "ask", text: "Confirm with your operator" },
  { type: 'ul', items: [
      "Whether tolls are discussed up front when they apply",
      "Driver duty limits and rest approach on long runs",
      "Waiting versus fresh return car if you need a later pickup",
      "Cancellation or retiming norms if plans shift",
    ] },
  { type: 'callout', text: "Enquire with Sri Arumuga Travels for Srivilliputtur–Chennai sedan journeys by call or WhatsApp." },
  { type: 'faq', items: [
      { q: "Should we always travel at night to “save time”?", a: "Not automatically. Night driving reduces some congestion but increases fatigue risk. Choose based on the group, not a social-media tip." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/locations/chennai", label: "Chennai route page" },
      { href: "/services/outstation-cab", label: "Outstation cab" },
      { href: "/blog/overnight-vs-day-travel-outstation", label: "Overnight vs day travel" },
    ] },
  ],
};

export default post;
