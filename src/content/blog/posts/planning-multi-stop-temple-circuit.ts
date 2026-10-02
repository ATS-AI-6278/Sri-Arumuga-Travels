import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "planning-multi-stop-temple-circuit",
  title: "Planning a multi-stop temple circuit in southern Tamil Nadu",
  description: "How to plan multi-stop temple circuits without burnout — prioritization, buffers, and cab waiting clarity for southern Tamil Nadu routes.",
  lang: "en",
  categoryIds: ["tamil-nadu-tourism", "road-trips"],
  tagIds: ["temple", "pilgrimage", "checklist"],
  publishedAt: "2026-09-17",
  updatedAt: "2026-09-17",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["temple-pilgrimage-family-travel", "andal-temple-visit-tips", "rameswaram-pilgrimage-road-travel"],
  relatedPaths: ["/services/temple-pilgrimage"],
  body: [
  { type: 'p', text: "Multi-stop temple circuits look elegant on a map and punishing on feet. Southern Tamil Nadu offers deep sacred geography — the skill is choosing a humane sequence." },
  { type: 'h2', id: "rules", text: "Circuit rules that protect the day" },
  { type: 'ol', items: [
      "Pick one anchor temple that defines success for the trip.",
      "Add at most one or two secondary stops unless the group is highly experienced.",
      "Place the longest walk or densest crowd when energy is highest.",
      "Keep a skip list ready if delays stack.",
    ] },
  { type: 'h2', id: "buffers", text: "Buffers to insert on purpose" },
  { type: 'ul', items: [
      "Footwear and security lines",
      "Hydration and toilet breaks",
      "A meal that is not eaten while standing in haste",
      "Travel time variability between towns",
    ] },
  { type: 'h2', id: "cab", text: "Tell the cab the circuit shape" },
  { type: 'p', text: "Drivers plan fuel, rest, and legality of waiting differently for a two-stop day versus a five-stop day. Share the ordered list when you enquire — not only the final town name." },
  { type: 'callout', text: "Sri Arumuga Travels can discuss temple-circuit sedan days from Srivilliputtur when you share the stop list and passenger mix." },
  { type: 'faq', items: [
      { q: "Is a same-day Srivilliputtur–Madurai–Rameswaram stack wise?", a: "For most family groups it is ambitious. Consider splitting across days." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "Related", items: [
      { href: "/services/temple-pilgrimage", label: "Temple trips" },
      { href: "/blog/temple-pilgrimage-family-travel", label: "Family pilgrimage" },
    ] },
  ],
};

export default post;
