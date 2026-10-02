import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "temple-pilgrimage-family-travel",
  title: "Temple and pilgrimage travel with family in Tamil Nadu",
  description: "Family-first pilgrimage planning in Tamil Nadu — stamina, queues, meals, and sedan waiting — so darshan stays meaningful rather than exhausting.",
  lang: "en",
  categoryIds: ["tamil-nadu-tourism", "travel-planning"],
  tagIds: ["temple", "pilgrimage", "family"],
  publishedAt: "2026-09-18",
  updatedAt: "2026-09-18",
  heroImage: "/hero-scene.webp",
  heroAlt: "Family pilgrimage travel in Tamil Nadu",
  relatedSlugs: ["andal-temple-visit-tips", "planning-multi-stop-temple-circuit", "rameswaram-pilgrimage-road-travel"],
  relatedPaths: ["/services/temple-pilgrimage"],
  body: [
  { type: 'p', text: "Pilgrimage with family is different from solo backpacking. The measure of success is whether elders and children finish the day cared for — not how many temple names you collected." },
  { type: 'h2', id: "design", text: "Design the day around people" },
  { type: 'ul', items: [
      "Name the primary temple purpose before adding secondary stops.",
      "Schedule meals like appointments.",
      "Protect nap or rest windows for children and elders.",
      "Accept that some people may skip a queue.",
    ] },
  { type: 'h2', id: "transport", text: "Transport that supports darshan" },
  { type: 'p', text: "A waiting car can reduce walking between scattered points, but waiting expectations must be spoken aloud when you book. Drivers are not mind readers about how long a special darshan line will take." },
  { type: 'callout', text: "For temple-paced trips from Srivilliputtur, enquire with Sri Arumuga Travels and mention passenger ages." },
  { type: 'faq', items: [
      { q: "Should we visit the biggest temple first?", a: "Often yes if energy is highest in the morning — but festival days change the calculus. Check local conditions." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/services/temple-pilgrimage", label: "Temple & pilgrimage" },
      { href: "/blog/planning-multi-stop-temple-circuit", label: "Multi-stop temple circuit" },
    ] },
  ],
};

export default post;
