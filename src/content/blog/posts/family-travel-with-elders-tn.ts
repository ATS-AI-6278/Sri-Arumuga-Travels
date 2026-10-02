import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "family-travel-with-elders-tn",
  title: "Family travel with elders in Tamil Nadu",
  description: "Respectful pacing for Tamil Nadu family trips with elders — seats, stops, temples, heat, and how to brief your cab driver.",
  lang: "en",
  categoryIds: ["travel-planning", "tamil-nadu-tourism"],
  tagIds: ["family", "temple", "checklist"],
  publishedAt: "2026-09-11",
  updatedAt: "2026-09-11",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["temple-pilgrimage-family-travel", "packing-for-south-india-road-travel", "safe-night-travel-practices-tn"],
  relatedPaths: ["/services/temple-pilgrimage", "/services/outstation-cab"],
  body: [
  { type: 'p', text: "Traveling with elders is a privilege that needs slower choreography. Tamil Nadu’s temples, heat, and long roads reward groups that protect rest instead of chasing coverage." },
  { type: 'h2', id: "pace", text: "Pacing ideas" },
  { type: 'ul', items: [
      "Limit same-day temple stacks.",
      "Schedule meals before hunger becomes distress.",
      "Prefer shorter walking segments with clear sit-down options.",
      "Keep medicines in a known bag, not a shared heap.",
    ] },
  { type: 'h2', id: "brief", text: "Brief the driver kindly" },
  { type: 'ol', items: [
      "Mention if someone needs frequent stops.",
      "Share any mobility constraints.",
      "Avoid last-minute surprise add-on stops that erase rest windows.",
    ] },
  { type: 'callout', text: "When enquiring with Sri Arumuga Travels, mention elder travelers so we can discuss a humane schedule." },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/services/temple-pilgrimage", label: "Temple trips" },
      { href: "/blog/temple-pilgrimage-family-travel", label: "Family pilgrimage" },
    ] },
  ],
};

export default post;
