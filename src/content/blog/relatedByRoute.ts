/** Soft internal links from service/location pages → blog posts. */
const BY_PATH: Record<string, string[]> = {
  '/locations/srivilliputtur': [
    'visiting-srivilliputtur-travel-guide',
    'andal-temple-visit-tips',
    'srivilliputtur-payanam-vazhikatti',
  ],
  '/locations/madurai': [
    'madurai-from-srivilliputtur-travel-tips',
    'airport-pickup-tips-madurai',
    'madurai-payanam-yorchanai',
  ],
  '/locations/rameswaram': [
    'rameswaram-pilgrimage-road-travel',
    'rameswaram-yatirai-vazhi',
    'temple-pilgrimage-family-travel',
  ],
  '/locations/kodaikanal': [
    'kodaikanal-weekend-from-south-tn',
    'tamil-nadu-hill-station-basics',
    'kodaikanal-vaiyara-payanam',
  ],
  '/locations/chennai': [
    'chennai-outstation-travel-checklist',
    'overnight-vs-day-travel-outstation',
    'how-to-book-outstation-cab-tamil-nadu',
  ],
  '/locations/bengaluru': [
    'bengaluru-road-trip-prep',
    'how-to-book-outstation-cab-tamil-nadu',
    'packing-for-south-india-road-travel',
  ],
  '/locations/coimbatore': [
    'coimbatore-west-tn-travel',
    'how-to-book-outstation-cab-tamil-nadu',
  ],
  '/locations/thiruvananthapuram': [
    'thiruvananthapuram-kerala-border-travel',
    'packing-for-south-india-road-travel',
  ],
  '/services/outstation-cab': [
    'how-to-book-outstation-cab-tamil-nadu',
    'local-taxi-vs-outstation-cab',
    'outstation-cab-ennave-theriyumo',
  ],
  '/services/airport-taxi': [
    'airport-pickup-tips-madurai',
    'vimana-nilaiyam-pickup-kurippu',
    'madurai-from-srivilliputtur-travel-tips',
  ],
  '/services/temple-pilgrimage': [
    'temple-pilgrimage-family-travel',
    'andal-temple-visit-tips',
    'planning-multi-stop-temple-circuit',
  ],
  '/services/local-taxi': [
    'local-taxi-vs-outstation-cab',
    'srivilliputtur-day-trip-ideas',
    'what-to-ask-before-booking-taxi',
  ],
};

export function getBlogSlugsForPath(pathname: string): string[] {
  return BY_PATH[pathname] ?? [];
}
