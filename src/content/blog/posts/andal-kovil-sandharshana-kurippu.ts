import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "andal-kovil-sandharshana-kurippu",
  title: "ஆண்டாள் கோயில் சந்தர்ஷனக் குறிப்புகள்",
  description: "ஸ்ரீவில்லிபுத்தூர் ஆண்டாள்–வடபத்ரசயீ வளாகம் — முதல்முறை பக்தர்களுக்கான ஆடை, குடும்ப நடை, பயண ஏற்பாடு குறிப்புகள்.",
  lang: "ta",
  categoryIds: ["srivilliputtur-travel", "tamil-content"],
  tagIds: ["srivilliputtur", "temple", "pilgrimage", "family"],
  publishedAt: "2026-10-01",
  updatedAt: "2026-10-01",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["srivilliputtur-payanam-vazhikatti", "kudumbam-payanam-yorchanai", "temple-pilgrimage-family-travel"],
  relatedPaths: ["/services/temple-pilgrimage", "/locations/srivilliputtur"],
  body: [
  { type: 'p', text: "ஆண்டாள் கோயில் வளாகம் ஸ்ரீவில்லிபுத்தூரின் ஆன்மிக மையம். முதல்முறை வருபவர்கள் அமைதியான தரிசனத்தையே விரும்புவர் — அவசரப் போக்குவரத்தும் நீண்ட வரிசையும் சேர்ந்தால் அனுபவம் கசக்கும்." },
  { type: 'h2', id: "munbu", text: "முன் தயாரிப்பு" },
  { type: 'ul', items: [
      "திருவிழாவா? வார இறுதியா? சாதாரண நாளா? — நெரிசல் மாறும்.",
      "குழு பிரிந்தால் சந்திக்கும் இடத்தை முன்பே முடிவு செய்யுங்கள்.",
      "உள்ளே தேவையானவை மட்டும் எடுங்கள்.",
    ] },
  { type: 'h2', id: "adai", text: "ஆடையும் மரியாதையும்" },
  { type: 'p', text: "கோயில் வளாகத்தில் அடக்கமான ஆடை உகந்தது. காலணி கழற்றும் இடங்களைப் பின்பற்றுங்கள். புகைப்பட விதிகள் பகுதிக்குத் தகுந்தவாறு மாறலாம் — பலகை/தொண்டர் அறிவுரையைக் கவனியுங்கள்." },
  { type: 'h2', id: "kudumbam", text: "குடும்பத்துடன்" },
  { type: 'ol', items: [
      "நீர் மற்றும் இளைப்பாறல் இடைவெளி மறக்காதீர்கள்.",
      "வரிசையைத் தவிர்க்க வேண்டியவர் இருந்தால் முன்பே திட்டம் வையுங்கள்.",
      "ஒரே நாளில் பல கோயில் நகரங்களை அடுக்க வேண்டாம்.",
    ] },
  { type: 'callout', text: "கோயில் காத்திருப்புடன் செடான் தேவைப்பட்டால் ஸ்ரீ அருமுக டிராவல்ஸிடம் பயணிகள் வயது மற்றும் காத்திருப்பு தேவையைச் சொல்லுங்கள்." },
  { type: 'faq', items: [
      { q: "நுழைவுக் கட்டணம் இங்கே எழுதப்பட்டுள்ளதா?", a: "இல்லை. அன்றைய அதிகாரப்பூர்வ/வளாக அறிவிப்பையே நம்புங்கள்." },
    ] },
  { type: 'cta' },
  { type: 'links', title: "தொடர்புடையவை", items: [
      { href: "/blog/srivilliputtur-payanam-vazhikatti", label: "ஸ்ரீவில்லிபுத்தூர் வழிகாட்டி" },
      { href: "/services/temple-pilgrimage", label: "கோயில் பயணம்" },
    ] },
  ],
};

export default post;
