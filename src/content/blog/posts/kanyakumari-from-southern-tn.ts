import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "kanyakumari-from-southern-tn",
  title: "Kanyakumari from southern Tamil Nadu: calm planning tips",
  description: "Plan a Kanyakumari visit from southern Tamil Nadu with crowd awareness, sunrise/sunset patience, and humane road pacing — no fake ticket prices.",
  lang: "en",
  categoryIds: ["southern-tn-travel", "tamil-nadu-tourism"],
  tagIds: ["kanyakumari", "coast", "family", "festival"],
  publishedAt: "2026-09-04",
  updatedAt: "2026-09-04",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["tirunelveli-travel-hub", "southern-tamil-nadu-road-trip-planner", "festival-season-travel-planning-tn"],
  relatedPaths: ["/services/outstation-cab"],
  body: [
  { type: 'p', text: "Kanyakumari is a symbolic land’s-end destination with temples, memorials, and sea vistas. Holiday and weekend crowds are part of the reality — calm planning beats a rushed checklist." },
  { type: 'h2', id: "calm", text: "Calm planning tips" },
  { type: 'ul', items: [
      "Decide whether sunrise, sunset, or temple focus is the emotional priority.",
      "Expect queues at popular viewpoints on peak days.",
      "Keep valuables minimal in dense pedestrian zones.",
      "Hydrate; sea breeze does not cancel sun exposure.",
    ] },
  { type: 'h2', id: "road", text: "Road pacing from inland towns" },
  { type: 'p', text: "From inland southern towns, travelers often use Tirunelveli-area pacing or an overnight nearby rather than stacking every southern highlight into one continuous push." },
  { type: 'callout', text: "Sri Arumuga Travels can discuss long southern sedan days that include Kanyakumari when you share a realistic date plan." },
  { type: 'faq', items: [
      { q: "Do you sell ferry or viewpoint tickets here?", a: "No. Use official on-site channels for tickets and current access rules." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/blog/southern-tamil-nadu-road-trip-planner", label: "South TN planner" },
      { href: "/blog/tirunelveli-travel-hub", label: "Tirunelveli hub" },
    ] },
  ],
};

export default post;
