import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: "mazhaikalam-payanam-kurippu",
  title: "மழைக்காலப் பயணக் குறிப்புகள் (தமிழ்நாடு)",
  description: "மழைக்காலத்தில் தமிழ்நாட்டுச் சாலைப் பயணம் — நெகிழ்வு, காலணி, அருவி எச்சரிக்கை, டிரைவருடன் உரையாடல்.",
  lang: "ta",
  categoryIds: ["travel-planning", "tamil-content"],
  tagIds: ["monsoon", "checklist", "hills"],
  publishedAt: "2026-09-22",
  updatedAt: "2026-09-22",
  heroImage: "/hero-scene.webp",
  heroAlt: "Southern Tamil Nadu travel",
  relatedSlugs: ["monsoon-travel-tips-tamil-nadu", "courtallam-tenkasi-travel-notes"],
  relatedPaths: ["/services/outstation-cab"],
  body: [
  { type: 'p', text: "மழைக்காலம் இயற்கையை அழகாக்கும்; சாலையை மெதுவாக்கும். மேகத்துக்கு அபராதம் விதிக்கும் அட்டவணையை விட சிறிது நெகிழ்வுள்ள திட்டமே இனிக்கும்." },
  { type: 'h2', id: "negilvau", text: "நெகிழ்வு" },
  { type: 'ul', items: [
      "அருவி/பார்வைத் திட்டத்தை விருப்ப அலகாக வையுங்கள்.",
      "சிறிய மழைக்கவசம் எடுங்கள்.",
      "ஈரச் சாலையில் இருப்பு நேரம்.",
      "மலை/கேட் சாலை அறிவிப்புகளைக் கவனியுங்கள்.",
    ] },
  { type: 'callout', text: "மழைக்காலத் தேதிகளை ஸ்ரீ அருமுக டிராவல்ஸிடம் சொல்லி விசாரிக்கவும் — தாளம் பேசலாம்." },
  { type: 'cta' },
  { type: 'links', title: "தொடர்புடையவை", items: [
      { href: "/blog/courtallam-tenkasi-travel-notes", label: "குற்றாலம் குறிப்புகள் (EN)" },
      { href: "/blog/monsoon-travel-tips-tamil-nadu", label: "Monsoon tips (EN)" },
    ] },
  ],
};

export default post;
