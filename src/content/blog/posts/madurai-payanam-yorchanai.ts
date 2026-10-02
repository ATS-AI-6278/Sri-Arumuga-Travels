import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "madurai-payanam-yorchanai",
  title: "ஸ்ரீவில்லிபுத்தூர் முதல் மதுரை: பயண யோசனைகள்",
  description: "மதுரை பயணம் — கோயில், விமான நிலையம், ரயில் இணைப்பு. இருப்பு நேரம் மற்றும் கேப் கேள்விகள். கி.மீ/கட்டண எண்கள் இல்லாமல்.",
  lang: "ta",
  categoryIds: ["southern-tn-travel", "tamil-content"],
  tagIds: ["madurai", "airport", "srivilliputtur", "temple"],
  publishedAt: "2026-09-30",
  updatedAt: "2026-09-30",
  heroImage: "/hero-highway.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["airport-pickup-tips-madurai", "madurai-from-srivilliputtur-travel-tips", "vimana-nilaiyam-pickup-kurippu"],
  relatedPaths: ["/locations/madurai", "/services/airport-taxi"],
  body: [
  { type: 'p', text: "மதுரை பல ஸ்ரீவில்லிபுத்தூர் பயணிகளுக்கும் அருகிலுள்ள முக்கிய நகரம் — மீனாட்சி அம்மன் கோயில், விமான நிலையம், ரயில்வே, மருத்துவம், வாங்கல் எனப் பல தேவைகள்." },
  { type: 'p', text: "வரைபட நேரத்தை மட்டும் நம்பாதீர்கள். விமான நிலையம்/கோயில்/நிலைய அணுகுமுகத்தில் நகரப் போக்குவரத்து மாறும். இருப்பு நேரம் வையுங்கள்." },
  { type: 'h2', id: "nokkangal", text: "நோக்கத்தைப் பிரிக்கவும்" },
  { type: 'table', headers: ["நோக்கம்", "கவனம்"], rows: [
      ["விமானம்", "செக்-இன் இருப்பு + சாலை மாற்றம்"],
      ["கோயில்", "வரிசை, நடை, வெப்பம்"],
      ["ரயில்", "பிளாட்ஃபார்ம்/தாமத மாறுபாடு"],
    ] },
  { type: 'h2', id: "ketkavendiya", text: "கேபிடம் கேட்க வேண்டியவை" },
  { type: 'ul', items: [
      "காத்திருப்பா? புள்ளியிலிருந்து புள்ளிக்கு மட்டும் தானா?",
      "இரவு ஓட்டம் தேவையா?",
      "பயணிகள் எத்தனை? சாமான்கள் எப்படி?",
      "விமானம் மாறினால் என்ன செய்வது?",
    ] },
  { type: 'callout', text: "ஸ்ரீ அருமுக டிராவல்ஸ் — மதுரை/விமான நிலைய இணைப்பு பற்றி அழைப்பு அல்லது வாட்ஸ்அப் மூலம் விசாரிக்கலாம்." },
  { type: 'cta' },
  { type: 'links', title: "தொடர்புடையவை", items: [
      { href: "/locations/madurai", label: "மதுரை பக்கம்" },
      { href: "/services/airport-taxi", label: "விமான நிலைய டாக்சி" },
      { href: "/blog/vimana-nilaiyam-pickup-kurippu", label: "விமானப் பிக்அப் குறிப்பு" },
    ] },
  ],
};

export default post;
