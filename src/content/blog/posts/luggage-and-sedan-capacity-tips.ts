import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "luggage-and-sedan-capacity-tips",
  title: "Luggage and sedan capacity: set expectations early",
  description: "How to think about sedan luggage capacity for family travel in Tamil Nadu — passenger comfort versus boot space, without claiming exact litre numbers.",
  lang: "en",
  categoryIds: ["taxi-cab", "travel-planning"],
  tagIds: ["sedan", "packing", "family"],
  publishedAt: "2026-09-13",
  updatedAt: "2026-09-13",
  heroImage: "/fleet-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["packing-for-south-india-road-travel", "how-to-book-outstation-cab-tamil-nadu"],
  relatedPaths: ["/services/outstation-cab", "/services/local-taxi"],
  body: [
  { type: 'p', text: "Sedans are comfortable for small groups and frustrating when treated like vans. The conversation to have before travel is simple: how many people, how many large bags, and whether anyone needs extra seat comfort." },
  { type: 'h2', id: "tradeoffs", text: "Comfort tradeoffs" },
  { type: 'table', caption: "Illustrative patterns — always confirm with your operator for the actual car.", headers: ["Scenario", "Likely tension"], rows: [
      ["4 adults + 4 large hard suitcases", "Boot overflow; cabin bag spill"],
      ["2 adults + 2 children + stroller + bags", "Need creative packing and patience"],
      ["3 adults + light bags", "Usually the sedan’s sweet spot"],
    ] },
  { type: 'h2', id: "tips", text: "Practical tips" },
  { type: 'ul', items: [
      "Prefer fewer large bags over many medium boxes when possible.",
      "Keep a small day bag for each person with essentials.",
      "Do not assume roof carriers exist unless arranged.",
    ] },
  { type: 'callout', text: "Tell Sri Arumuga Travels your passenger and bag count when you enquire — we will say what is practical." },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/blog/packing-for-south-india-road-travel", label: "Packing guide" },
      { href: "/contact", label: "Enquire" },
    ] },
  ],
};

export default post;
