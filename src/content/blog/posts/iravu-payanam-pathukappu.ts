import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "iravu-payanam-pathukappu",
  title: "இரவுச் சாலைப் பயணத்தில் பாதுகாப்புப் பழக்கங்கள்",
  description: "தமிழ்நாட்டில் இரவுப் பயணம் — தொடர்பு, ஓய்வு, குடும்பத் தயார்நிலை. பயமுறுத்தும் புள்ளிவிவரங்கள் இல்லை.",
  lang: "ta",
  categoryIds: ["travel-planning", "tamil-content"],
  tagIds: ["night-travel", "checklist", "family"],
  publishedAt: "2026-09-21",
  updatedAt: "2026-09-21",
  heroImage: "/hero-highway.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["safe-night-travel-practices-tn", "overnight-vs-day-travel-outstation"],
  relatedPaths: ["/services/outstation-cab"],
  body: [
  { type: 'p', text: "நீண்ட தமிழ்நாட்டுப் பாதைகளில் இரவுப் பயணம் உண்டு. பாதுகாப்பு என்பது பெரும்பாலும் பழக்கம்: தெளிவான தொடர்பு, ஓய்வான ஓட்டம், இருட்டில் குழப்பமில்லா சந்திப்பு." },
  { type: 'h2', id: "pazhakkangal", text: "உயர் மதிப்புப் பழக்கங்கள்" },
  { type: 'ul', items: [
      "தேவைப்பட்டால் நம்பகமானவருடன் இருப்பிடம் பகிர்தல்.",
      "போன் சார்ஜ் + பவர் பேங்க்.",
      "வெளிச்சமுள்ள சந்திப்பு அடையாளம்.",
      "சோர்ந்த டிரைவரை ‘வேகமாகப் போ’ என்று நெருக்க வேண்டாம்.",
      "நீர் மற்றும் நேர மருந்துகள்.",
    ] },
  { type: 'callout', text: "இரவு ஓட்டம் தேவைப்பட்டால் ஸ்ரீ அருமுக டிராவல்ஸிடம் முன்பே சொல்லுங்கள்." },
  { type: 'cta' },
  { type: 'links', title: "தொடர்புடையவை", items: [
      { href: "/blog/safe-night-travel-practices-tn", label: "Night travel (EN)" },
      { href: "/contact", label: "விசாரணை" },
    ] },
  ],
};

export default post;
