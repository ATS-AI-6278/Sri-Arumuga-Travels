import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "rameswaram-yatirai-vazhi",
  title: "ராமேஸ்வரம் யாத்திரை: தூரத்துக்கு முன் தாளம்",
  description: "தென் தமிழ்நாட்டிலிருந்து ராமேஸ்வரம் சாலை யாத்திரை — குடும்பத் தாளம், வெப்பம், கேப் உரையாடல். போலி நேர அட்டவணை இல்லை.",
  lang: "ta",
  categoryIds: ["southern-tn-travel", "tamil-content"],
  tagIds: ["rameswaram", "pilgrimage", "family", "temple"],
  publishedAt: "2026-09-29",
  updatedAt: "2026-09-29",
  heroImage: "/hero-highway.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["rameswaram-pilgrimage-road-travel", "kudumbam-payanam-yorchanai"],
  relatedPaths: ["/locations/rameswaram", "/services/temple-pilgrimage"],
  body: [
  { type: 'p', text: "ராமேஸ்வரம் பக்திக்கு முக்கிய இடம். உள்நாட்டுத் தென் மாவட்டங்களிலிருந்து செல்பவர்களுக்கு இது பெரும்பாலும் முழுப் பயண நாள் — மூத்தோருடன் இன்னும் அதிகம்." },
  { type: 'h2', id: "thalam", text: "தாளக் கொள்கைகள்" },
  { type: 'ul', items: [
      "அதே நாள் திரும்புவதா? இரவு தங்குவதா? — முதலில் முடியுங்கள்.",
      "வெயிலில் நீர் மற்றும் நிழல் இடைவெளி கட்டாயம்.",
      "முதன்மைத் தரிசன நோக்கம் ஒன்றை வையுங்கள்.",
    ] },
  { type: 'h2', id: "cab", text: "கேபிடம் தெளிவு" },
  { type: 'ul', items: [
      "கோயில் அருகே காத்திருப்பு",
      "ஒரு வழி / அதே நாள் திருப்பம் / பல நாள்",
      "செடானில் சாமான் பொருத்தம்",
    ] },
  { type: 'callout', text: "ஸ்ரீவில்லிபுத்தூரிலிருந்து ராமேஸ்வரம் செடான் யாத்திரை பற்றி ஸ்ரீ அருமுக டிராவல்ஸிடம் தேதி மற்றும் பயணிகள் விவரம் சொல்லுங்கள்." },
  { type: 'cta' },
  { type: 'links', title: "தொடர்புடையவை", items: [
      { href: "/locations/rameswaram", label: "ராமேஸ்வரம் பக்கம்" },
      { href: "/services/temple-pilgrimage", label: "கோயில் பயணம்" },
    ] },
  ],
};

export default post;
