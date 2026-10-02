import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "how-to-book-outstation-cab-tamil-nadu",
  title: "How to book an outstation cab in Tamil Nadu (without the maze)",
  description: "A clear process for booking outstation cabs in Tamil Nadu — what details to share, what to confirm, and soft red flags — without app promotions or fake discounts.",
  lang: "en",
  categoryIds: ["taxi-cab", "outstation"],
  tagIds: ["sedan", "checklist", "family"],
  publishedAt: "2026-09-21",
  updatedAt: "2026-09-21",
  heroImage: "/fleet-scene.webp",
  heroAlt: "Outstation sedan booking conversation",
  relatedSlugs: ["what-to-ask-before-booking-taxi", "local-taxi-vs-outstation-cab", "overnight-vs-day-travel-outstation"],
  featured: true,
  relatedPaths: ["/services/outstation-cab", "/contact"],
  body: [
  { type: 'p', text: "Booking an outstation cab in Tamil Nadu is usually a conversation, not a shopping-cart checkout. The quality of that conversation determines whether fare expectations, waiting time, and night driving are understood before anyone is late." },
  { type: 'h2', id: "steps", text: "A simple booking flow" },
  { type: 'ol', items: [
      "Write down pickup point, destination locality, date, and approximate time.",
      "Note passenger count and luggage.",
      "Contact an operator you can reach by phone.",
      "Repeat the plan back in your own words before you confirm.",
      "Save the driver’s number when assigned.",
      "Reconfirm the evening before for early starts.",
    ] },
  { type: 'h2', id: "confirm", text: "Must-confirm items" },
  { type: 'table', headers: ["Topic", "Why it matters"], rows: [
      ["Waiting vs point-to-point", "Temple and airport days often need waiting clarity"],
      ["Night driving", "Fatigue and pricing conversations change"],
      ["Tolls / parking", "Avoid awkward roadside debates"],
      ["Vehicle type", "Sedan space is finite"],
      ["Retiming", "Flights and functions shift"],
    ] },
  { type: 'h2', id: "flags", text: "Soft caution flags" },
  { type: 'ul', items: [
      "Pressure to decide immediately without restating the route",
      "Refusal to discuss waiting or night expectations at all",
      "Unclear who will drive and how you will contact them",
    ] },
  { type: 'callout', text: "Sri Arumuga Travels books through call and WhatsApp from Srivilliputtur — not an anonymous cart. Share your route details to enquire." },
  { type: 'faq', items: [
      { q: "Do you publish a fare chart on the website?", a: "No. We confirm based on your actual plan." },
      { q: "Is WhatsApp enough to lock a trip?", a: "Use WhatsApp for details, then ensure both sides clearly confirm the final plan." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/services/outstation-cab", label: "Outstation cab" },
      { href: "/contact", label: "Contact & enquire" },
      { href: "/blog/what-to-ask-before-booking-taxi", label: "What to ask before booking" },
    ] },
  ],
};

export default post;
