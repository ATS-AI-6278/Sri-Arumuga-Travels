/**
 * Central SEO / business config — verified NAP and routes only.
 * Do not invent street address, hours, prices, ratings, or unconfirmed towns.
 */
import { CONTACT_DATA } from './contact.ts';
import { BRAND } from './content.ts';

export const BUSINESS = {
  name: BRAND.name,
  shortName: BRAND.shortName,
  legalName: BRAND.name,
  streetAddress: 'Near Andal Temple, Main Road',
  addressLocality: CONTACT_DATA.location,
  addressRegion: CONTACT_DATA.region,
  postalCode: '626125',
  addressCountry: 'IN',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI',
  geo: {
    latitude: 9.5107,
    longitude: 77.6322,
  },
  openingHoursSpecification: [
    {
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  phones: [CONTACT_DATA.phone1, CONTACT_DATA.phone2] as const,
  formattedPhones: [CONTACT_DATA.formattedPhone1, CONTACT_DATA.formattedPhone2] as const,
  email: CONTACT_DATA.email,
  bookingMethods: ['Call', 'WhatsApp', 'Email'] as const,
  vehicle: 'Sedans, larger family cars & group options',
  homeBaseSlug: 'srivilliputtur',
  /** Brand logo path (pair with absoluteUrl in schema) */
  logoPath: '/logo.png',
  /** Social / WebPage primary image path (scenic hero — not the logo) */
  ogImagePath: '/hero-scene.webp',
} as const;

export type RouteKind = 'home' | 'services-hub' | 'service' | 'locations-hub' | 'location' | 'contact';

export interface SeoRoute {
  path: string;
  kind: RouteKind;
  /** URL slug segment for matching */
  id: string;
  title: string;
  description: string;
  /** Short H1-friendly label */
  heading: string;
  /** Parent breadcrumb path (omit for home) */
  parentPath?: string;
  parentLabel?: string;
  /** Service or location entity name for schema */
  entityName?: string;
  /** Related destination note from existing content */
  note?: string;
}

/** Canonical sitemap / prerender route list (no invented towns). */
export const SEO_ROUTES: SeoRoute[] = [
  {
    id: 'home',
    path: '/',
    kind: 'home',
    title: 'Srivilliputtur Taxi & Outstation Cab | Sri Arumuga Travels',
    description:
      'Srivilliputtur taxi and outstation cab by Sri Arumuga Travels. Sedan trips across India — plan pickup, timing, and fare by call or WhatsApp.',
    heading: 'Travel from Srivilliputtur to anywhere in India',
  },
  {
    id: 'services',
    path: '/services',
    kind: 'services-hub',
    title: 'Taxi & Travel Services from Srivilliputtur | Sri Arumuga Travels',
    description:
      'Outstation cab, airport and station pickups, temple and pilgrimage trips, and local day taxis from Srivilliputtur — book by call or WhatsApp.',
    heading: 'Services from Srivilliputtur',
    parentPath: '/',
    parentLabel: 'Home',
  },
  {
    id: 'outstation-cab',
    path: '/services/outstation-cab',
    kind: 'service',
    title: 'Outstation Cab from Srivilliputtur | Sri Arumuga Travels',
    description:
      'Outstation sedan journeys from Srivilliputtur to cities, towns, and family homes across India. Plan timing and fare by call or WhatsApp.',
    heading: 'Outstation journeys',
    parentPath: '/services',
    parentLabel: 'Services',
    entityName: 'Outstation cab from Srivilliputtur',
  },
  {
    id: 'airport-taxi',
    path: '/services/airport-taxi',
    kind: 'service',
    title: 'Airport & Station Taxi from Srivilliputtur | Sri Arumuga Travels',
    description:
      'Airport and station meet-and-travel from Srivilliputtur — including Madurai and nearby terminals. Clear pickup plan by call or WhatsApp.',
    heading: 'Airport & station pickups',
    parentPath: '/services',
    parentLabel: 'Services',
    entityName: 'Airport and station taxi from Srivilliputtur',
  },
  {
    id: 'temple-pilgrimage',
    path: '/services/temple-pilgrimage',
    kind: 'service',
    title: 'Temple & Pilgrimage Trips from Srivilliputtur | Sri Arumuga Travels',
    description:
      'Temple and pilgrimage sedan trips from Srivilliputtur — Andal Temple visits, nearby shrines, and longer routes paced for families. Call or WhatsApp.',
    heading: 'Temple & pilgrimage trips',
    parentPath: '/services',
    parentLabel: 'Services',
    entityName: 'Temple and pilgrimage taxi from Srivilliputtur',
  },
  {
    id: 'local-taxi',
    path: '/services/local-taxi',
    kind: 'service',
    title: 'Local & Day Taxi in Srivilliputtur | Sri Arumuga Travels',
    description:
      'Local and day trips around Srivilliputtur, Madurai, and nearby towns when you need a reliable sedan for the day. Book by call or WhatsApp.',
    heading: 'Local & day trips',
    parentPath: '/services',
    parentLabel: 'Services',
    entityName: 'Local and day taxi from Srivilliputtur',
  },
  {
    id: 'locations',
    path: '/locations',
    kind: 'locations-hub',
    title: 'Destinations from Srivilliputtur | Sri Arumuga Travels',
    description:
      'Cab routes from Srivilliputtur to Madurai, Chennai, Bengaluru, Coimbatore, Rameswaram, Kodaikanal, Thiruvananthapuram, and more across India.',
    heading: 'Where we go from Srivilliputtur',
    parentPath: '/',
    parentLabel: 'Home',
  },
  {
    id: 'srivilliputtur',
    path: '/locations/srivilliputtur',
    kind: 'location',
    title: 'Srivilliputtur Taxi & Travel Desk | Sri Arumuga Travels',
    description:
      'Sri Arumuga Travels home base in Srivilliputtur, Tamil Nadu — local taxi, outstation cab, temple trips, and journeys across India by call or WhatsApp.',
    heading: 'Srivilliputtur — our home base',
    parentPath: '/locations',
    parentLabel: 'Locations',
    entityName: 'Srivilliputtur',
    note: 'Home base · Tamil Nadu',
  },
  {
    id: 'madurai',
    path: '/locations/madurai',
    kind: 'location',
    title: 'Srivilliputtur to Madurai Cab | Sri Arumuga Travels',
    description:
      'Travel from Srivilliputtur to Madurai by sedan — temple city and airport links. Confirm pickup, timing, and fare by call or WhatsApp.',
    heading: 'Srivilliputtur to Madurai',
    parentPath: '/locations',
    parentLabel: 'Locations',
    entityName: 'Madurai',
    note: 'Temple city & airport',
  },
  {
    id: 'chennai',
    path: '/locations/chennai',
    kind: 'location',
    title: 'Srivilliputtur to Chennai Cab | Sri Arumuga Travels',
    description:
      'Outstation cab from Srivilliputtur to Chennai — city and station links. Plan your journey by call or WhatsApp with Sri Arumuga Travels.',
    heading: 'Srivilliputtur to Chennai',
    parentPath: '/locations',
    parentLabel: 'Locations',
    entityName: 'Chennai',
    note: 'City & station links',
  },
  {
    id: 'bengaluru',
    path: '/locations/bengaluru',
    kind: 'location',
    title: 'Srivilliputtur to Bengaluru Cab | Sri Arumuga Travels',
    description:
      'Sedan travel from Srivilliputtur to Bengaluru for work and family trips. Share dates and passengers — we confirm timing and fare by call or WhatsApp.',
    heading: 'Srivilliputtur to Bengaluru',
    parentPath: '/locations',
    parentLabel: 'Locations',
    entityName: 'Bengaluru',
    note: 'Work and family travel',
  },
  {
    id: 'coimbatore',
    path: '/locations/coimbatore',
    kind: 'location',
    title: 'Srivilliputtur to Coimbatore Cab | Sri Arumuga Travels',
    description:
      'Cab from Srivilliputtur to Coimbatore in west Tamil Nadu. Enquire by call or WhatsApp for pickup, timing, and fare clarity.',
    heading: 'Srivilliputtur to Coimbatore',
    parentPath: '/locations',
    parentLabel: 'Locations',
    entityName: 'Coimbatore',
    note: 'West Tamil Nadu',
  },
  {
    id: 'rameswaram',
    path: '/locations/rameswaram',
    kind: 'location',
    title: 'Srivilliputtur to Rameswaram Cab | Sri Arumuga Travels',
    description:
      'Pilgrimage road from Srivilliputtur to Rameswaram by sedan. Family-paced trips — book by call or WhatsApp with Sri Arumuga Travels.',
    heading: 'Srivilliputtur to Rameswaram',
    parentPath: '/locations',
    parentLabel: 'Locations',
    entityName: 'Rameswaram',
    note: 'Pilgrimage road',
  },
  {
    id: 'kodaikanal',
    path: '/locations/kodaikanal',
    kind: 'location',
    title: 'Srivilliputtur to Kodaikanal Cab | Sri Arumuga Travels',
    description:
      'Hill weekend travel from Srivilliputtur to Kodaikanal by sedan. Plan timing and fare by call or WhatsApp — no app cart.',
    heading: 'Srivilliputtur to Kodaikanal',
    parentPath: '/locations',
    parentLabel: 'Locations',
    entityName: 'Kodaikanal',
    note: 'Hill weekends',
  },
  {
    id: 'thiruvananthapuram',
    path: '/locations/thiruvananthapuram',
    kind: 'location',
    title: 'Srivilliputtur to Thiruvananthapuram Cab | Sri Arumuga Travels',
    description:
      'Road travel from Srivilliputtur to Thiruvananthapuram on the Kerala coast. Confirm your plan by call or WhatsApp with Sri Arumuga Travels.',
    heading: 'Srivilliputtur to Thiruvananthapuram',
    parentPath: '/locations',
    parentLabel: 'Locations',
    entityName: 'Thiruvananthapuram',
    note: 'Kerala coast',
  },
  {
    id: 'contact',
    path: '/contact',
    kind: 'contact',
    title: 'Contact & Enquire | Sri Arumuga Travels',
    description:
      'Call or WhatsApp Sri Arumuga Travels in Srivilliputtur to enquire about taxi and outstation travel. Primary +91 98942 20028.',
    heading: 'Tell us where you are headed',
    parentPath: '/',
    parentLabel: 'Home',
  },
];

export const KNOWN_PATHS = SEO_ROUTES.map((r) => r.path);

export function getRouteByPath(pathname: string): SeoRoute | undefined {
  const normalized =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname || '/';
  return SEO_ROUTES.find((r) => r.path === normalized);
}

export function getServiceRoutes(): SeoRoute[] {
  return SEO_ROUTES.filter((r) => r.kind === 'service');
}

export function getLocationRoutes(): SeoRoute[] {
  return SEO_ROUTES.filter((r) => r.kind === 'location');
}

/** Map homepage destination i18n id → location path (skip "anywhere"). */
export const DESTINATION_PATH_BY_ID: Record<string, string> = {
  madurai: '/locations/madurai',
  chennai: '/locations/chennai',
  bengaluru: '/locations/bengaluru',
  coimbatore: '/locations/coimbatore',
  rameswaram: '/locations/rameswaram',
  kodaikanal: '/locations/kodaikanal',
  tvm: '/locations/thiruvananthapuram',
};

export const SERVICE_PATH_BY_ID: Record<string, string> = {
  outstation: '/services/outstation-cab',
  airport: '/services/airport-taxi',
  temple: '/services/temple-pilgrimage',
  local: '/services/local-taxi',
};
