import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "kudumbam-payanam-yorchanai",
  title: "குடும்பப் பயணம்: மூத்தோருடன் தமிழ்நாட்டுத் திட்டம்",
  description: "மூத்தோருடன் தமிழ்நாட்டுப் பயணம் — தாளம், கோயில் வரிசை, உணவு, கேப் டிரைவரிடம் சொல்ல வேண்டியவை.",
  lang: "ta",
  categoryIds: ["travel-planning", "tamil-content"],
  tagIds: ["family", "temple", "checklist"],
  publishedAt: "2026-09-27",
  updatedAt: "2026-09-27",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["family-travel-with-elders-tn", "temple-pilgrimage-family-travel", "andal-kovil-sandharshana-kurippu"],
  relatedPaths: ["/services/temple-pilgrimage", "/services/outstation-cab"],
  body: [
  { type: 'p', text: "மூத்தோருடன் பயணம் என்பது அட்டைப் பட்டியல் அல்ல — கவனமும் மதிப்பும். வெப்பம், நீண்ட நடை, வரிசை ஆகியவை சேர்ந்தால் அவசரத் திட்டம் கைவிடப்படும்." },
  { type: 'h2', id: "thalam", text: "தாள யோசனைகள்" },
  { type: 'ul', items: [
      "ஒரே நாளில் பல கோயில் அடுக்குகளைக் குறைக்கவும்.",
      "பசி வரும் முன் உணவு நேரம் வையுங்கள்.",
      "மருந்துப் பையைத் தெரிந்த இடத்தில் வையுங்கள்.",
      "இளைப்பாறும் இடங்களை முன்பே யோசிக்கவும்.",
    ] },
  { type: 'h2', id: "driver", text: "டிரைவரிடம் அன்புடன்" },
  { type: 'ol', items: [
      "அடிக்கடி நிறுத்தம் தேவை என்றால் சொல்லுங்கள்.",
      "நடப்பதில் சிரமம் இருந்தால் முன்பே தெரிவியுங்கள்.",
      "கடைசி நேரத்தில் புதிய நிறுத்தங்களை அடுக்குவதைத் தவிர்க்கவும்.",
    ] },
  { type: 'callout', text: "ஸ்ரீ அருமுக டிராவல்ஸிடம் விசாரிக்கும்போது மூத்தோர் பயணிப்பதைச் சொன்னால் அட்டவணை பேச எளிது." },
  { type: 'cta' },
  { type: 'links', title: "தொடர்புடையவை", items: [
      { href: "/services/temple-pilgrimage", label: "கோயில் பயணம்" },
      { href: "/blog/andal-kovil-sandharshana-kurippu", label: "ஆண்டாள் கோயில் குறிப்பு" },
    ] },
  ],
};

export default post;
