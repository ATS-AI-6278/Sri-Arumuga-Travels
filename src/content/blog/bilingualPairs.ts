/**
 * Explicit 1-to-1 bilingual counterparts for Sri Arumuga Travels blog posts.
 * When a user views an English post, they can click "Read in Tamil / தமிழில் படிக்க"
 * to open the matching Tamil post, and vice-versa.
 */

export const BLOG_COUNTERPARTS: Record<string, string> = {
  // English -> Tamil
  'andal-temple-visit-tips': 'andal-kovil-sandharshana-kurippu',
  'safe-night-travel-practices-tn': 'iravu-payanam-pathukappu',
  'kodaikanal-weekend-from-south-tn': 'kodaikanal-vaiyara-payanam',
  'family-travel-with-elders-tn': 'kudumbam-payanam-yorchanai',
  'madurai-from-srivilliputtur-travel-tips': 'madurai-payanam-yorchanai',
  'monsoon-travel-tips-tamil-nadu': 'mazhaikalam-payanam-kurippu',
  'how-to-book-outstation-cab-tamil-nadu': 'outstation-cab-ennave-theriyumo',
  'rameswaram-pilgrimage-road-travel': 'rameswaram-yatirai-vazhi',
  'visiting-srivilliputtur-travel-guide': 'srivilliputtur-payanam-vazhikatti',
  'what-to-ask-before-booking-taxi': 'taxi-munbu-ketka-vendiyavai',
  'southern-tamil-nadu-road-trip-planner': 'then-tamilnadu-suthula-payanam',
  'airport-pickup-tips-madurai': 'vimana-nilaiyam-pickup-kurippu',

  // Tamil -> English
  'andal-kovil-sandharshana-kurippu': 'andal-temple-visit-tips',
  'iravu-payanam-pathukappu': 'safe-night-travel-practices-tn',
  'kodaikanal-vaiyara-payanam': 'kodaikanal-weekend-from-south-tn',
  'kudumbam-payanam-yorchanai': 'family-travel-with-elders-tn',
  'madurai-payanam-yorchanai': 'madurai-from-srivilliputtur-travel-tips',
  'mazhaikalam-payanam-kurippu': 'monsoon-travel-tips-tamil-nadu',
  'outstation-cab-ennave-theriyumo': 'how-to-book-outstation-cab-tamil-nadu',
  'rameswaram-yatirai-vazhi': 'rameswaram-pilgrimage-road-travel',
  'srivilliputtur-payanam-vazhikatti': 'visiting-srivilliputtur-travel-guide',
  'taxi-munbu-ketka-vendiyavai': 'what-to-ask-before-booking-taxi',
  'then-tamilnadu-suthula-payanam': 'southern-tamil-nadu-road-trip-planner',
  'vimana-nilaiyam-pickup-kurippu': 'airport-pickup-tips-madurai',
};

export function getCounterpartSlug(slug: string): string | undefined {
  return BLOG_COUNTERPARTS[slug];
}
