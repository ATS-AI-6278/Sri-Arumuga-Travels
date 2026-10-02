import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "festival-season-travel-planning-tn",
  title: "Festival-season travel planning in Tamil Nadu",
  description: "Plan Tamil Nadu travel around festival seasons — crowds, lodging, temple queues, and cab booking lead time — without inventing calendar dates for every town.",
  lang: "en",
  categoryIds: ["travel-planning", "tamil-nadu-tourism"],
  tagIds: ["festival", "temple", "checklist"],
  publishedAt: "2026-09-10",
  updatedAt: "2026-09-10",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["andal-temple-visit-tips", "how-to-book-outstation-cab-tamil-nadu", "temple-pilgrimage-family-travel"],
  relatedPaths: ["/services/temple-pilgrimage", "/contact"],
  body: [
  { type: 'p', text: "Festival seasons transform temple towns: more devotion, more queues, fuller lodgings, and slower street approaches. Planning earlier is kinder than arriving surprised." },
  { type: 'h2', id: "do", text: "Do this earlier than usual" },
  { type: 'ul', items: [
      "Confirm lodging before you finalize a multi-family convoy.",
      "Book or at least discuss cab availability with lead time.",
      "Identify a calm backup plan if a darshan slot becomes unrealistic.",
      "Set group expectations that some experiences will be crowded.",
    ] },
  { type: 'h2', id: "day-of", text: "Day-of habits" },
  { type: 'ol', items: [
      "Carry water and patience in equal measure.",
      "Keep a meeting point if the group separates.",
      "Follow local police and temple volunteer instructions promptly.",
    ] },
  { type: 'callout', text: "For festival-period travel from Srivilliputtur, contact Sri Arumuga Travels early with dates — peak days fill operator schedules." },
  { type: 'faq', items: [
      { q: "Can you list every festival date here?", a: "No. Local temple calendars and regional festivals shift in public awareness — verify for your specific destination and year." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/blog/andal-temple-visit-tips", label: "Andal Temple tips" },
      { href: "/contact", label: "Enquire early" },
    ] },
  ],
};

export default post;
