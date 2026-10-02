import type { BlogCategory } from './types';

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'srivilliputtur-travel',
    slug: 'srivilliputtur-travel',
    nameEn: 'Srivilliputtur Travel',
    nameTa: 'ஸ்ரீவில்லிபுத்தூர் பயணம்',
    descriptionEn:
      'Guides for visiting Srivilliputtur — temples, day plans, and practical tips for travelers arriving in the town.',
    descriptionTa:
      'ஸ்ரீவில்லிபுத்தூர் வருகைக்கான வழிகாட்டிகள் — கோயில்கள், நாள் திட்டங்கள், நடைமுறை குறிப்புகள்.',
  },
  {
    id: 'southern-tn-travel',
    slug: 'southern-tn-travel',
    nameEn: 'Southern Tamil Nadu Travel',
    nameTa: 'தென் தமிழ்நாடு பயணம்',
    descriptionEn:
      'Destination and route planning across southern Tamil Nadu — Madurai, Rameswaram, Tirunelveli belt, and nearby coasts and hills.',
    descriptionTa:
      'தென் தமிழ்நாடு இடங்கள் மற்றும் பாதை திட்டமிடல் — மதுரை, ராமேஸ்வரம், திருநெல்வேலி பகுதி மற்றும் அருகிலுள்ள கடற்கரை, மலைகள்.',
  },
  {
    id: 'tamil-nadu-tourism',
    slug: 'tamil-nadu-tourism',
    nameEn: 'Tamil Nadu Tourism',
    nameTa: 'தமிழ்நாடு சுற்றுலா',
    descriptionEn:
      'Broader Tamil Nadu travel education — festivals, seasons, temple circuits, and hill-station basics.',
    descriptionTa:
      'தமிழ்நாடு சுற்றுலா அறிவு — திருவிழாக்கள், பருவங்கள், கோயில் சுற்றுகள், மலைவாசஸ்தல அடிப்படைகள்.',
  },
  {
    id: 'taxi-cab',
    slug: 'taxi-cab',
    nameEn: 'Taxi & Cab',
    nameTa: 'டாக்சி & கேப்',
    descriptionEn:
      'How private taxis and cabs work in Tamil Nadu — questions to ask, pickup planning, and traveler checklists.',
    descriptionTa:
      'தமிழ்நாட்டில் தனியார் டாக்சி/கேப் — கேட்க வேண்டியவை, பிக்அப் திட்டம், பயணிகள் சரிபார்ப்பு பட்டியல்.',
  },
  {
    id: 'outstation',
    slug: 'outstation',
    nameEn: 'Outstation',
    nameTa: 'வெளியூர்',
    descriptionEn:
      'Longer sedan journeys between cities — overnight vs day travel, luggage, and multi-stop planning.',
    descriptionTa:
      'நகரங்களுக்கிடையே நீண்ட செடான் பயணங்கள் — இரவு/நாள் பயணம், சாமான்கள், பல நிறுத்தத் திட்டம்.',
  },
  {
    id: 'road-trips',
    slug: 'road-trips',
    nameEn: 'Road Trips',
    nameTa: 'சாலைப் பயணங்கள்',
    descriptionEn:
      'Road-trip planning for southern India — packing, pacing with elders, and scenic corridor ideas.',
    descriptionTa:
      'தென் இந்தியா சாலைப் பயணத் திட்டம் — பொதி, மூத்தோருடன் வேகம், இயற்கை பாதை யோசனைகள்.',
  },
  {
    id: 'travel-planning',
    slug: 'travel-planning',
    nameEn: 'Travel Planning',
    nameTa: 'பயணத் திட்டமிடல்',
    descriptionEn:
      'Practical planning articles — seasons, festivals, safety habits, and family logistics.',
    descriptionTa:
      'நடைமுறை திட்டக் கட்டுரைகள் — பருவம், திருவிழா, பாதுகாப்பு பழக்கங்கள், குடும்ப ஏற்பாடு.',
  },
  {
    id: 'tamil-content',
    slug: 'tamil-content',
    nameEn: 'Tamil Content',
    nameTa: 'தமிழ் உள்ளடக்கம்',
    descriptionEn:
      'Articles written primarily in Tamil for local travelers and families.',
    descriptionTa:
      'உள்ளூர் பயணிகள் மற்றும் குடும்பங்களுக்காக தமிழில் எழுதப்பட்ட கட்டுரைகள்.',
  },
];

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export function getCategoryById(id: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.id === id);
}
