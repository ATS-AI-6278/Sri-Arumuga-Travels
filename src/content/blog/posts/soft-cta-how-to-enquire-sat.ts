import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "soft-cta-how-to-enquire-sat",
  title: "How to enquire with Sri Arumuga Travels (clear and calm)",
  description: "What to include when you call or WhatsApp Sri Arumuga Travels — route, timing, passengers, luggage — so the reply can be practical.",
  lang: "en",
  categoryIds: ["taxi-cab", "travel-planning"],
  tagIds: ["checklist", "sedan", "srivilliputtur"],
  publishedAt: "2026-09-20",
  updatedAt: "2026-09-20",
  heroImage: "/fleet-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["how-to-book-outstation-cab-tamil-nadu", "what-to-ask-before-booking-taxi"],
  relatedPaths: ["/contact", "/services"],
  body: [
  { type: 'p', text: "Sri Arumuga Travels works from Srivilliputtur through call, WhatsApp, and email — not an anonymous checkout cart. A clear enquiry gets a clearer response." },
  { type: 'h2', id: "include", text: "Include these details" },
  { type: 'ol', items: [
      "Pickup point (and a landmark if the address is hard).",
      "Destination locality.",
      "Date and preferred time window.",
      "Passenger count and ages if relevant (elders/children).",
      "Luggage volume in plain language.",
      "Whether you need waiting, airport meet, or multi-stop.",
    ] },
  { type: 'h2', id: "channels", text: "Channels on this site" },
  { type: 'p', text: "Use the contact page or the Call / WhatsApp / Email actions already published on the site. Do not trust phone numbers copied from random directories — use the numbers on sriarumugatravels.vercel.app." },
  { type: 'callout', text: "Start with what you know; exact minutes and fares are confirmed in conversation for your plan." },
  { type: 'cta' },
  { type: 'links', title: "Enquire", items: [
      { href: "/contact", label: "Contact page" },
      { href: "/services", label: "Services" },
      { href: "/locations", label: "Locations" },
    ] },
  ],
};

export default post;
