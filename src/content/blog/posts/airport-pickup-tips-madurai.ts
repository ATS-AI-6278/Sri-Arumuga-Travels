import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "airport-pickup-tips-madurai",
  title: "Madurai airport pickup tips for families",
  description: "Practical Madurai airport meet-and-travel advice — buffers, meeting points, luggage, and what to tell your driver — without inventing flight or fare numbers.",
  lang: "en",
  categoryIds: ["taxi-cab", "outstation", "southern-tn-travel"],
  tagIds: ["madurai", "airport", "family", "checklist", "sedan"],
  publishedAt: "2026-09-28",
  updatedAt: "2026-09-28",
  heroImage: "/fleet-scene.webp",
  heroAlt: "Sedan travel for airport transfers",
  relatedSlugs: ["madurai-from-srivilliputtur-travel-tips", "how-to-book-outstation-cab-tamil-nadu", "what-to-ask-before-booking-taxi"],
  relatedPaths: ["/services/airport-taxi", "/locations/madurai"],
  body: [
  { type: 'p', text: "Airport pickups feel simple until a delayed flight, a large suitcase set, or a tired elder meets city traffic. A short planning conversation with your driver prevents most friction." },
  { type: 'h2', id: "share", text: "What to share when you enquire" },
  { type: 'ul', items: [
      "Airline and flight number when you have it",
      "Scheduled arrival time and whether it is domestic",
      "Passenger count and approximate luggage",
      "Final drop location (Srivilliputtur address, hotel, or landmark)",
      "A reachable mobile number after landing",
    ] },
  { type: 'h2', id: "meeting", text: "Meeting without confusion" },
  { type: 'p', text: "Agree a clear meeting description before you fly: exit gate area guidance as the driver understands it, a backup phone plan, and who calls whom if the flight is late. Mobile networks can be uneven immediately after landing — have a written phone number, not only a chat app thread." },
  { type: 'h2', id: "buffers", text: "Time buffers that matter" },
  { type: 'ol', items: [
      "Boarding pass and security lines vary by hour and season.",
      "Baggage belts can delay even on-time flights.",
      "Urban approaches near airports slow down unpredictable hours.",
      "If you need a meal or medicine stop, say so before the car moves.",
    ] },
  { type: 'callout', text: "For Madurai airport taxi coordination toward Srivilliputtur and nearby points, contact Sri Arumuga Travels with your flight details." },
  { type: 'h2', id: "faq", text: "FAQ" },
  { type: 'faq', items: [
      { q: "Should the driver wait inside the terminal?", a: "Follow current airport access rules. Many meets happen at designated civilian pickup areas — confirm the plan with your operator." },
      { q: "What if the flight is delayed?", a: "Share the new ETA as soon as you can. Ask in advance how waiting time is handled." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/services/airport-taxi", label: "Airport & station taxi" },
      { href: "/locations/madurai", label: "Madurai route page" },
      { href: "/blog/madurai-from-srivilliputtur-travel-tips", label: "Madurai travel tips" },
    ] },
  ],
};

export default post;
