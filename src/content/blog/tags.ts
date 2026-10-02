import type { BlogTag } from './types';

export const BLOG_TAGS: BlogTag[] = [
  { id: 'srivilliputtur', slug: 'srivilliputtur', nameEn: 'Srivilliputtur', nameTa: 'ஸ்ரீவில்லிபுத்தூர்' },
  { id: 'madurai', slug: 'madurai', nameEn: 'Madurai', nameTa: 'மதுரை' },
  { id: 'rameswaram', slug: 'rameswaram', nameEn: 'Rameswaram', nameTa: 'ராமேஸ்வரம்' },
  { id: 'kodaikanal', slug: 'kodaikanal', nameEn: 'Kodaikanal', nameTa: 'கொடைக்கானல்' },
  { id: 'chennai', slug: 'chennai', nameEn: 'Chennai', nameTa: 'சென்னை' },
  { id: 'bengaluru', slug: 'bengaluru', nameEn: 'Bengaluru', nameTa: 'பெங்களூரு' },
  { id: 'coimbatore', slug: 'coimbatore', nameEn: 'Coimbatore', nameTa: 'கோயம்புத்தூர்' },
  { id: 'kerala', slug: 'kerala', nameEn: 'Kerala border', nameTa: 'கேரள எல்லை' },
  { id: 'temple', slug: 'temple', nameEn: 'Temple travel', nameTa: 'கோயில் பயணம்' },
  { id: 'pilgrimage', slug: 'pilgrimage', nameEn: 'Pilgrimage', nameTa: 'யாத்திரை' },
  { id: 'airport', slug: 'airport', nameEn: 'Airport', nameTa: 'விமான நிலையம்' },
  { id: 'family', slug: 'family', nameEn: 'Family travel', nameTa: 'குடும்பப் பயணம்' },
  { id: 'checklist', slug: 'checklist', nameEn: 'Checklist', nameTa: 'சரிபார்ப்புப் பட்டியல்' },
  { id: 'monsoon', slug: 'monsoon', nameEn: 'Monsoon', nameTa: 'பேய்மழைக்காலம்' },
  { id: 'festival', slug: 'festival', nameEn: 'Festivals', nameTa: 'திருவிழாக்கள்' },
  { id: 'hills', slug: 'hills', nameEn: 'Hills', nameTa: 'மலைகள்' },
  { id: 'coast', slug: 'coast', nameEn: 'Coast', nameTa: 'கடற்கரை' },
  { id: 'sedan', slug: 'sedan', nameEn: 'Sedan travel', nameTa: 'செடான் பயணம்' },
  { id: 'night-travel', slug: 'night-travel', nameEn: 'Night travel', nameTa: 'இரவுப் பயணம்' },
  { id: 'packing', slug: 'packing', nameEn: 'Packing', nameTa: 'பொதி' },
  { id: 'tirunelveli', slug: 'tirunelveli', nameEn: 'Tirunelveli', nameTa: 'திருநெல்வேலி' },
  { id: 'kanyakumari', slug: 'kanyakumari', nameEn: 'Kanyakumari', nameTa: 'கன்னியாகுமரி' },
  { id: 'courtallam', slug: 'courtallam', nameEn: 'Courtallam', nameTa: 'குற்றாலம்' },
  { id: 'thoothukudi', slug: 'thoothukudi', nameEn: 'Thoothukudi', nameTa: 'தூத்துக்குடி' },
];

export function getTagBySlug(slug: string): BlogTag | undefined {
  return BLOG_TAGS.find((t) => t.slug === slug);
}

export function getTagById(id: string): BlogTag | undefined {
  return BLOG_TAGS.find((t) => t.id === id);
}
