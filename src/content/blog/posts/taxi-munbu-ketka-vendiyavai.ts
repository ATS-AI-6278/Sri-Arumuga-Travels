import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "taxi-munbu-ketka-vendiyavai",
  title: "டாக்சி எடுப்பதற்கு முன் கேட்க வேண்டியவை",
  description: "தமிழ்நாட்டில் டாக்சி/கேப் எடுப்பதற்கு முன் கேள்விப்பட்டியல் — காத்திருப்பு, இரவு, சாமான், தொடர்பு.",
  lang: "ta",
  categoryIds: ["taxi-cab", "tamil-content"],
  tagIds: ["checklist", "sedan", "family"],
  publishedAt: "2026-09-23",
  updatedAt: "2026-09-23",
  heroImage: "/fleet-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["what-to-ask-before-booking-taxi", "outstation-cab-ennave-theriyumo"],
  relatedPaths: ["/contact", "/services/local-taxi"],
  body: [
  { type: 'p', text: "பெரும்பாலான கேப் குழப்பங்கள் தவறான எண்ணம் அல்ல — கேட்காத கேள்விகள். உள்ளூர் நாளா? வெளியூரா? இந்தப் பட்டியலை வைத்துப் பேசுங்கள்." },
  { type: 'h2', id: "core", text: "முதன்மைக் கேள்விகள்" },
  { type: 'ol', items: [
      "பேசிய தொகையில் என்ன அடக்கம்? என்ன கூடுதலாக வரலாம்?",
      "கார் எங்களுடன் இருக்குமா அல்லது இறக்கம் மட்டும்தானா?",
      "டிரைவர் யார்? எப்படி அழைப்பது?",
      "தாமதமாகத் தொடங்கினால் / முன்னதாக முடித்தால்?",
      "செடானில் சாமான் பொருக்குமா?",
    ] },
  { type: 'h2', id: "special", text: "சூழல் சார்ந்தவை" },
  { type: 'ul', items: [
      "விமானம்: எங்கு சந்திப்பு?",
      "கோயில் நாள்: எவ்வளவு நேரம் காத்திருப்பு?",
      "இரவு: டிரைவர் கடமை நீளம் சரியா?",
      "பல நிறுத்தம்: பட்டியல் உறுதியா?",
    ] },
  { type: 'callout', text: "ஸ்ரீ அருமுக டிராவல்ஸிடம் விசாரிக்கும்போது இந்த விவரங்கள் இருந்தால் பதில் தெளிவாக வரும்." },
  { type: 'cta' },
  { type: 'links', title: "தொடர்புடையவை", items: [
      { href: "/contact", label: "விசாரணை" },
      { href: "/blog/outstation-cab-ennave-theriyumo", label: "வெளியூர் கேப் பதிவு" },
    ] },
  ],
};

export default post;
