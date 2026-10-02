import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "safe-night-travel-practices-tn",
  title: "Safer night road travel practices in Tamil Nadu",
  description: "Practical habits for night road travel in Tamil Nadu — communication, rest, visibility, and family readiness — without fear-mongering or fake statistics.",
  lang: "en",
  categoryIds: ["travel-planning", "outstation"],
  tagIds: ["night-travel", "checklist", "family"],
  publishedAt: "2026-09-15",
  updatedAt: "2026-09-15",
  heroImage: "/hero-highway.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["overnight-vs-day-travel-outstation", "what-to-ask-before-booking-taxi"],
  relatedPaths: ["/services/outstation-cab"],
  body: [
  { type: 'p', text: "Night travel is common for long Tamil Nadu corridors. Safety is mostly habit: clear communication, rested driving, and a family that is not improvising meeting points in the dark." },
  { type: 'h2', id: "habits", text: "High-value habits" },
  { type: 'ul', items: [
      "Share live location with a trusted family member when appropriate.",
      "Keep phones charged and carry a power bank.",
      "Agree pickup landmarks that are lit and easy to describe.",
      "Avoid pressuring a tired driver to “go faster.”",
      "Carry water and any time-sensitive medicines.",
    ] },
  { type: 'h2', id: "kids", text: "With children" },
  { type: 'p', text: "Keep a light jacket, comfort item, and pre-agreed quiet activities. Sudden night hunger creates tension — pack a small food option." },
  { type: 'h2', id: "operator", text: "Operator conversation" },
  { type: 'ol', items: [
      "Confirm the driver’s name and number.",
      "Ask how rest is handled on long night duties.",
      "Restate the drop point including apartment or street cues.",
    ] },
  { type: 'callout', text: "Sri Arumuga Travels enquiries should mention if your plan requires night driving so we can discuss what is practical." },
  { type: 'faq', items: [
      { q: "Is night travel always unsafe?", a: "No. Unplanned night travel with unclear communication is the larger risk pattern." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/blog/overnight-vs-day-travel-outstation", label: "Overnight vs day" },
      { href: "/contact", label: "Enquire" },
    ] },
  ],
};

export default post;
