import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "packing-for-south-india-road-travel",
  title: "Packing for South India road travel in a sedan",
  description: "A sedan-aware packing guide for South India road trips — climate layers, documents, medicines, and bag limits — without brand promotions.",
  lang: "en",
  categoryIds: ["road-trips", "travel-planning"],
  tagIds: ["packing", "sedan", "family", "checklist"],
  publishedAt: "2026-09-14",
  updatedAt: "2026-09-14",
  heroImage: "/fleet-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["luggage-and-sedan-capacity-tips", "monsoon-travel-tips-tamil-nadu", "family-travel-with-elders-tn"],
  relatedPaths: ["/services/outstation-cab"],
  body: [
  { type: 'p', text: "South India road trips cross heat, occasional rain, temple dress needs, and long sitting hours. Packing well is less about volume and more about access: what you need at a roadside stop should not be buried under wedding gift boxes." },
  { type: 'h2', id: "core", text: "Core kit" },
  { type: 'ul', items: [
      "ID documents and a paper note of key phone numbers",
      "Medicines you already take, plus clinician-advised basics",
      "Reusable water bottles",
      "Sun protection and a light rain layer in wet months",
      "Power bank and charging cables",
      "Modest clothing suitable for temple stops",
    ] },
  { type: 'h2', id: "sedan", text: "Sedan reality" },
  { type: 'p', text: "Boot space disappears quickly with multiple large suitcases. Soft duffels often pack better than rigid sets. If five adults and heavy luggage must travel, discuss vehicle fit before the morning of departure." },
  { type: 'h2', id: "access", text: "Keep these accessible" },
  { type: 'ol', items: [
      "Water and snacks",
      "Motion-sickness medicines if you use them",
      "Wet wipes and a small trash bag",
      "A sweater for hill legs or aggressive AC",
    ] },
  { type: 'callout', text: "When you enquire for a sedan trip with Sri Arumuga Travels, mention luggage honestly." },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/blog/luggage-and-sedan-capacity-tips", label: "Luggage and sedan capacity" },
      { href: "/services/outstation-cab", label: "Outstation cab" },
    ] },
  ],
};

export default post;
