import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "kodaikanal-vaiyara-payanam",
  title: "கொடைக்கானல் வாரயந்திரப் பயணம்: மலைக்கு முன் யோசனை",
  description: "தென் சமவெளியிலிருந்து கொடைக்கானல் — வானிலை, வாந்தி உணர்வு, செடான் எல்லை. போலி ‘மஸ்ட் சீ’ விலைப்பட்டியல் இல்லை.",
  lang: "ta",
  categoryIds: ["southern-tn-travel", "tamil-content"],
  tagIds: ["kodaikanal", "hills", "family", "packing"],
  publishedAt: "2026-09-26",
  updatedAt: "2026-09-26",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["kodaikanal-weekend-from-south-tn", "tamil-nadu-hill-station-basics"],
  relatedPaths: ["/locations/kodaikanal", "/services/outstation-cab"],
  body: [
  { type: 'p', text: "கொடைக்கானல் தமிழ்நாட்டுக் குடும்பங்களுக்குப் பிடித்த மலை. சமவெளி வெயிலிலிருந்து குளிர்ந்த காற்றுக்கும் வளைவுச் சாலைக்கும் உடல் மாறுபடும் — குழந்தைகள்/மூத்தோருக்கு இது முக்கியம்." },
  { type: 'h2', id: "mun", text: "முன் முடிவுகள்" },
  { type: 'ul', items: [
      "சமீப வானிலை/சாலை அறிவிப்பு பாருங்கள்.",
      "தங்குமிடம் இல்லாமல் பார்வைப் பட்டியலை ஆரம்பிக்காதீர்கள்.",
      "வளைவுச் சாலையில் வாந்தி உணர்வு உள்ளவரைக் கேளுங்கள்.",
    ] },
  { type: 'h2', id: "podi", text: "பொதி" },
  { type: 'ul', items: [
      "லேசான குளிர் ஆடை",
      "மழைக்காலத்தில் மழைக்கவசம்",
      "பிடிமான உள்ள காலணி",
      "பவர் பேங்க்",
    ] },
  { type: 'callout', text: "ஸ்ரீவில்லிபுத்தூரிலிருந்து கொடைக்கானல் வெளியூர் பற்றி ஸ்ரீ அருமுக டிராவல்ஸிடம் தேதி சொல்லி விசாரிக்கவும்." },
  { type: 'cta' },
  { type: 'links', title: "தொடர்புடையவை", items: [
      { href: "/locations/kodaikanal", label: "கொடைக்கானல் பக்கம்" },
      { href: "/services/outstation-cab", label: "வெளியூர் கேப்" },
    ] },
  ],
};

export default post;
