import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "choosing-pickup-time-for-long-drives",
  title: "Choosing pickup time for long drives in Tamil Nadu",
  description: "How to choose pickup times for long Tamil Nadu drives — appointments, heat, elders, and driver duty — instead of copying someone else’s 3 a.m. habit.",
  lang: "en",
  categoryIds: ["outstation", "travel-planning"],
  tagIds: ["checklist", "night-travel", "family"],
  publishedAt: "2026-09-03",
  updatedAt: "2026-09-03",
  heroImage: "/hero-highway.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["overnight-vs-day-travel-outstation", "safe-night-travel-practices-tn", "how-to-book-outstation-cab-tamil-nadu"],
  relatedPaths: ["/services/outstation-cab"],
  body: [
  { type: 'p', text: "Pickup time is a design choice. Copying a neighbour’s 3 a.m. start can harm your group if nobody sleeps, or help if you have a hard morning reporting time and a rested driver." },
  { type: 'h2', id: "inputs", text: "Inputs to weigh" },
  { type: 'ul', items: [
      "Fixed appointment, flight, or train time at the destination",
      "Age mix and sleep needs",
      "Weather and likely congestion windows",
      "Driver duty length and rest",
    ] },
  { type: 'h2', id: "method", text: "A simple method" },
  { type: 'ol', items: [
      "Write the must-arrive-by time.",
      "Subtract a generous urban buffer.",
      "Subtract meal/rest stops you will actually take.",
      "Only then look at departure — and ask whether that hour is humane.",
    ] },
  { type: 'callout', text: "Share your must-arrive constraint when you enquire with Sri Arumuga Travels; we can discuss a practical pickup window." },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/blog/overnight-vs-day-travel-outstation", label: "Overnight vs day" },
      { href: "/contact", label: "Enquire" },
    ] },
  ],
};

export default post;
