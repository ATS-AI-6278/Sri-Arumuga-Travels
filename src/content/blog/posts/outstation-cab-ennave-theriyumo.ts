import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "outstation-cab-ennave-theriyumo",
  title: "வெளியூர் கேப் எப்படிப் பேசிப் பதிவு செய்வது?",
  description: "தமிழ்நாட்டில் வெளியூர் கேப் பதிவு — என்ன விவரம் சொல்ல வேண்டும், என்ன உறுதிப்படுத்த வேண்டும். ஆப் வண்டிச் சலுகைக் கதைகள் இல்லை.",
  lang: "ta",
  categoryIds: ["taxi-cab", "outstation", "tamil-content"],
  tagIds: ["sedan", "checklist", "family"],
  publishedAt: "2026-09-28",
  updatedAt: "2026-09-28",
  heroImage: "/fleet-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["how-to-book-outstation-cab-tamil-nadu", "taxi-munbu-ketka-vendiyavai"],
  featured: true,
  relatedPaths: ["/services/outstation-cab", "/contact"],
  body: [
  { type: 'p', text: "வெளியூர் கேப் என்பது பெரும்பாலும் உரையாடல். அந்த உரையாடலில் காத்திருப்பு, இரவு ஓட்டம், சாமான் தெளிவாக இருந்தால் பிறகு வீண் வாக்குவாதம் குறையும்." },
  { type: 'h2', id: "adi", text: "அடிப்படைப் படிகள்" },
  { type: 'ol', items: [
      "பிக்அப், சேருமிடம், தேதி, தோராய நேரம் எழுதுங்கள்.",
      "பயணிகள் எண்ணிக்கை + சாமான்.",
      "தொலைபேசியில் தொடர்பு கொள்ளுங்கள்.",
      "திட்டத்தை உங்கள் வார்த்தையில் மீண்டும் சொல்லி உறுதிப்படுத்துங்கள்.",
      "டிரைவர் எண் வந்ததும் சேமித்து வையுங்கள்.",
    ] },
  { type: 'h2', id: "urudhi", text: "உறுதிப்படுத்த வேண்டியவை" },
  { type: 'table', headers: ["தலைப்பு", "ஏன்"], rows: [
      ["காத்திருப்பு", "கோயில்/விமான நாட்களில் முக்கியம்"],
      ["இரவு ஓட்டம்", "சோர்வு மற்றும் கட்டண உரையாடல்"],
      ["டோல்/பார்க்கிங்", "வழியில் குழப்பம் தவிர்க்க"],
      ["வாகன வகை", "செடான் இடம் வரையறுக்கப்பட்டது"],
    ] },
  { type: 'callout', text: "ஸ்ரீ அருமுக டிராவல்ஸ் அழைப்பு மற்றும் வாட்ஸ்அப் மூலம் விசாரணை ஏற்கும் — அநாமதேய கார்ட் இல்லை." },
  { type: 'cta' },
  { type: 'links', title: "தொடர்புடையவை", items: [
      { href: "/services/outstation-cab", label: "வெளியூர் கேப்" },
      { href: "/contact", label: "தொடர்பு" },
      { href: "/blog/taxi-munbu-ketka-vendiyavai", label: "முன் கேட்க வேண்டியவை" },
    ] },
  ],
};

export default post;
