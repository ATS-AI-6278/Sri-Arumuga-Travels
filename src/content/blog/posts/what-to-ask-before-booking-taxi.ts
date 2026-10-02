import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "what-to-ask-before-booking-taxi",
  title: "What to ask before booking a taxi in Tamil Nadu",
  description: "A traveler’s question list before hiring a taxi or cab — coverage, waiting, night runs, luggage, and communication — so expectations stay clear.",
  lang: "en",
  categoryIds: ["taxi-cab", "travel-planning"],
  tagIds: ["checklist", "sedan", "family"],
  publishedAt: "2026-09-20",
  updatedAt: "2026-09-20",
  heroImage: "/fleet-scene.webp",
  heroAlt: "Traveler checklist for taxi booking",
  relatedSlugs: ["how-to-book-outstation-cab-tamil-nadu", "local-taxi-vs-outstation-cab", "safe-night-travel-practices-tn"],
  relatedPaths: ["/contact", "/services/local-taxi"],
  body: [
  { type: 'p', text: "Most taxi misunderstandings are missing questions, not bad intentions. Use this list as a prompt before you travel in Tamil Nadu — local day hire or outstation." },
  { type: 'h2', id: "core", text: "Core questions" },
  { type: 'ol', items: [
      "What is included in the discussed amount, and what might be extra?",
      "Is the car staying with us, or is it only a drop?",
      "Who is the driver, and how do we call them?",
      "What happens if we start late or finish early?",
      "Is the vehicle a sedan, and will our bags fit?",
    ] },
  { type: 'h2', id: "special", text: "Situation-specific questions" },
  { type: 'ul', items: [
      "Airport: where do we meet after landing?",
      "Temple day: how long can the car wait?",
      "Night: is the driver comfortable with the duty length?",
      "Elders: can we schedule more rest stops?",
      "Multi-stop: which stops are confirmed before departure?",
    ] },
  { type: 'h2', id: "write", text: "Write it down" },
  { type: 'p', text: "A short note in your phone with pickup time, places, and names prevents half the day-of confusion — especially when multiple family members give different instructions." },
  { type: 'callout', text: "When you enquire with Sri Arumuga Travels, these same details help us respond clearly." },
  { type: 'faq', items: [
      { q: "Is bargaining the most important skill?", a: "Clarity beats bargaining theatre. Understand inclusions first." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/blog/how-to-book-outstation-cab-tamil-nadu", label: "How to book outstation" },
      { href: "/services/local-taxi", label: "Local taxi" },
      { href: "/contact", label: "Enquire" },
    ] },
  ],
};

export default post;
