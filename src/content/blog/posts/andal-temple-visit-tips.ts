import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "andal-temple-visit-tips",
  title: "Andal Temple visit tips for first-time travelers",
  description: "Practical tips for the Andal–Vatapatrasayi temple complex in Srivilliputtur — timing habits, dress, family pacing, and travel logistics without invented fees.",
  lang: "en",
  categoryIds: ["srivilliputtur-travel", "tamil-nadu-tourism"],
  tagIds: ["srivilliputtur", "temple", "pilgrimage", "family"],
  publishedAt: "2026-10-01",
  updatedAt: "2026-10-01",
  heroImage: "/hero-scene.webp",
  heroAlt: "Temple visit planning in Srivilliputtur",
  relatedSlugs: ["visiting-srivilliputtur-travel-guide", "temple-pilgrimage-family-travel", "planning-multi-stop-temple-circuit"],
  relatedPaths: ["/services/temple-pilgrimage", "/locations/srivilliputtur"],
  body: [
  { type: 'p', text: "The Andal–Vatapatrasayi temple complex is the spiritual heart of Srivilliputtur. First-time visitors usually want calm darshan without a stressful rush between transport, footwear counters, and family needs." },
  { type: 'p', text: "Temple administrations publish timings and festival notices through official or widely known local channels. Re-confirm on the day you visit — special days change queues and access patterns." },
  { type: 'h2', id: "before", text: "Before you go" },
  { type: 'ul', items: [
      "Check whether your visit falls on a festival, weekend, or ordinary weekday.",
      "Agree a meeting point if your group splits.",
      "Carry only what you need inside; keep valuables minimal.",
      "If elders need shorter walking segments, decide who stays with them.",
    ] },
  { type: 'h2', id: "dress", text: "Dress and etiquette" },
  { type: 'p', text: "Modest clothing is expected on temple premises. Remove footwear where indicated. Follow volunteer or security instructions for queues and photography — policies can differ by shrine area." },
  { type: 'h2', id: "family", text: "Visiting with children or elders" },
  { type: 'ol', items: [
      "Build in rest and water breaks; heat and standing time add up.",
      "Eat a light meal before long waits if someone is sensitive to low blood sugar.",
      "Keep a simple exit plan if someone tires early.",
      "For multi-temple days, prefer quality over quantity.",
    ] },
  { type: 'h2', id: "logistics", text: "Travel logistics around darshan" },
  { type: 'p', text: "If you are arriving from Madurai airport or another city, pad your schedule for road variability. Same-day round trips work for some groups and exhaust others — decide based on age mix and heat, not only distance." },
  { type: 'callout', text: "For temple-paced sedan trips from Srivilliputtur, enquire with Sri Arumuga Travels. Describe passenger ages, luggage, and whether you need waiting time at the temple." },
  { type: 'h2', id: "faq", text: "FAQ" },
  { type: 'faq', items: [
      { q: "Are there fixed entry tickets I should budget from this article?", a: "Do not rely on blog posts for fee amounts. Check on-site or official notices for the day you visit." },
      { q: "Can we leave bags in a taxi during darshan?", a: "Only if you trust your arrangement and your driver agrees. Never leave passports or irreplaceable items unattended without a clear plan." },
      { q: "Is photography allowed everywhere?", a: "Rules vary by area. Follow posted signs and staff guidance." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Keep reading", items: [
      { href: "/blog/visiting-srivilliputtur-travel-guide", label: "Srivilliputtur travel guide" },
      { href: "/services/temple-pilgrimage", label: "Temple & pilgrimage service" },
      { href: "/locations/srivilliputtur", label: "Srivilliputtur location page" },
    ] },
  ],
};

export default post;
