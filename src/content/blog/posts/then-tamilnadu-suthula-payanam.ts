import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "then-tamilnadu-suthula-payanam",
  title: "தென் தமிழ்நாடு சுற்றுலா: நோக்கம் முதலில்",
  description: "தென் தமிழ்நாட்டுச் சாலைப் பயணம் — கோயில், கடற்கரை, மலை, அருவி. எல்லாவற்றையும் ஒரே மூச்சில் அடுக்காதீர்கள்.",
  lang: "ta",
  categoryIds: ["southern-tn-travel", "tamil-content"],
  tagIds: ["checklist", "temple", "coast", "hills"],
  publishedAt: "2026-09-24",
  updatedAt: "2026-09-24",
  heroImage: "/hero-highway.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["southern-tamil-nadu-road-trip-planner", "tirunelveli-travel-hub", "courtallam-tenkasi-travel-notes"],
  relatedPaths: ["/locations", "/services/outstation-cab"],
  body: [
  { type: 'p', text: "தென் தமிழ்நாடு கோயில் பாரம்பரியம், கடற்கரை, பருவ அருவி, மலை எனப் பல முகங்கள் கொண்டது. மூன்று நாளில் எல்லா முகங்களையும் தேடினால் சோர்வே மிஞ்சும்." },
  { type: 'h2', id: "nokkam", text: "நோக்கம் தேர்ந்தெடுங்கள்" },
  { type: 'table', headers: ["நோக்கம்", "உதாரணக் கோணம்"], rows: [
      ["கோயில்", "ஸ்ரீவில்லிபுத்தூர், மதுரை, ராமேஸ்வரம்"],
      ["பருவ நீர்", "குற்றாலம் / தென்காசி பகுதி"],
      ["கடல்முனை", "கன்னியாகுமரி பகுதி"],
      ["மலை", "கொடைக்கானல் பாதை"],
    ] },
  { type: 'h2', id: "attavanai", text: "ஆரோக்கியமான எலும்புக்கூடு" },
  { type: 'ol', items: [
      "வந்த நாள்: இளைப்பாறல்.",
      "முதல் முழு நாள்: முதன்மை நோக்கம் மட்டும்.",
      "அடுத்த நாள்: ஒரு சேர்க்கை அல்லது ஓய்வு.",
    ] },
  { type: 'callout', text: "ஸ்ரீவில்லிபுத்தூரிலிருந்து தீம் அடிப்படையிலான செடான் கால்களை ஸ்ரீ அருமுக டிராவல்ஸிடம் பேசலாம்." },
  { type: 'cta' },
  { type: 'links', title: "தொடர்புடையவை", items: [
      { href: "/locations", label: "இடங்கள்" },
      { href: "/blog/southern-tamil-nadu-road-trip-planner", label: "South TN planner (EN)" },
    ] },
  ],
};

export default post;
