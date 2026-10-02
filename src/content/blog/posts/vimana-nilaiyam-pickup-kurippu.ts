import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "vimana-nilaiyam-pickup-kurippu",
  title: "மதுரை விமான நிலையப் பிக்அப்: குடும்பக் குறிப்புகள்",
  description: "விமானம் தாமதம், சாமான், சந்திப்பு இடம் — மதுரை விமான நிலைய கேப் ஏற்பாட்டுக்குத் தெளிவான கேள்விகள்.",
  lang: "ta",
  categoryIds: ["taxi-cab", "tamil-content"],
  tagIds: ["madurai", "airport", "family", "checklist"],
  publishedAt: "2026-09-25",
  updatedAt: "2026-09-25",
  heroImage: "/fleet-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["airport-pickup-tips-madurai", "madurai-payanam-yorchanai"],
  relatedPaths: ["/services/airport-taxi", "/locations/madurai"],
  body: [
  { type: 'p', text: "விமானப் பிக்அப் எளிதாகத் தோன்றும் — தாமதம், பெரிய சாமான், சோர்ந்த மூத்தோர் சேர்ந்தால் குழப்பம் வரும். டிரைவருடன் சிறிய முன் உரையாடல் போதும்." },
  { type: 'h2', id: "sollavendiya", text: "விசாரணையில் சொல்லுங்கள்" },
  { type: 'ul', items: [
      "விமான எண் (தெரிந்தால்)",
      "வருகை நேரம்",
      "பயணிகள் + சாமான்",
      "இறுதி இறக்குமிடம்",
      "இறங்கியதும் அடையும் மொபைல் எண்",
    ] },
  { type: 'h2', id: "sandhippu", text: "சந்திப்பு" },
  { type: 'p', text: "எங்கு சந்திப்பது என்பதை முன்பே முடியுங்கள். இறங்கியதும் நெட்வொர்க் தடுமாறலாம் — எண்ணை எழுதி வைத்திருங்கள்." },
  { type: 'callout', text: "மதுரை விமான நிலையத்திலிருந்து ஸ்ரீவில்லிபுத்தூர் நோக்கி கேப் பற்றி ஸ்ரீ அருமுக டிராவல்ஸிடம் விமான விவரம் சொல்லுங்கள்." },
  { type: 'cta' },
  { type: 'links', title: "தொடர்புடையவை", items: [
      { href: "/services/airport-taxi", label: "விமான நிலைய டாக்சி" },
      { href: "/locations/madurai", label: "மதுரை" },
    ] },
  ],
};

export default post;
