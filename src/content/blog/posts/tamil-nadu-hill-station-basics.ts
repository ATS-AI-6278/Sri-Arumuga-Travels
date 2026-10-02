import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "tamil-nadu-hill-station-basics",
  title: "Tamil Nadu hill-station travel basics",
  description: "Basics for Tamil Nadu hill-station trips — weather layers, motion sickness, ghat patience, and sedan planning — with Kodaikanal as a common example context.",
  lang: "en",
  categoryIds: ["tamil-nadu-tourism", "road-trips"],
  tagIds: ["hills", "kodaikanal", "packing", "family"],
  publishedAt: "2026-09-09",
  updatedAt: "2026-09-09",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["kodaikanal-weekend-from-south-tn", "monsoon-travel-tips-tamil-nadu", "packing-for-south-india-road-travel"],
  relatedPaths: ["/locations/kodaikanal"],
  body: [
  { type: 'p', text: "Hill stations reward preparation: temperature swings, winding roads, and weekend crowds. Whether you aim for Kodaikanal or another Tamil Nadu hill escape, the basics transfer." },
  { type: 'h2', id: "basics", text: "Basics that travel well" },
  { type: 'ul', items: [
      "Pack a warm layer even if the plains are hot at departure.",
      "Take ghat curves patiently; do not urge unsafe speed.",
      "Keep motion-sickness plans for sensitive passengers.",
      "Book lodging before you treat the weekend as a spontaneous checklist.",
    ] },
  { type: 'h2', id: "sedan", text: "Sedan notes" },
  { type: 'p', text: "Small cars handle many hill weekends for light luggage groups. Discuss brake-heavy ghat comfort and return timing when you enquire — especially if the same driver is on a long duty." },
  { type: 'callout', text: "Sri Arumuga Travels can discuss hill-bound outstation trips from Srivilliputtur when you share dates." },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/locations/kodaikanal", label: "Kodaikanal page" },
      { href: "/blog/kodaikanal-weekend-from-south-tn", label: "Kodaikanal weekend" },
    ] },
  ],
};

export default post;
