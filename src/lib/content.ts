export const BRAND = {
  name: 'Sri Arumuga Travels',
  shortName: 'Sri Arumuga',
  tagline: 'Travel from Srivilliputtur to anywhere in India',
  promise: 'Warm service. Clear communication. A calm ride.',
  homeBase: 'Srivilliputtur, Tamil Nadu',
} as const;

export const SERVICES = [
  {
    id: 'outstation',
    title: 'Outstation journeys',
    description:
      'Door-to-door travel from Srivilliputtur to cities, towns, and family homes across India — planned around your timing, not a fixed timetable.',
  },
  {
    id: 'airport',
    title: 'Airport & station pickups',
    description:
      'Meet-and-travel support for Madurai and other regional airports or railway stations, with space for luggage and a clear pickup plan.',
  },
  {
    id: 'temple',
    title: 'Temple & pilgrimage trips',
    description:
      'Comfortable travel for Andal Temple visits, nearby shrines, and longer pilgrimage routes — paced for elders and families.',
  },
  {
    id: 'local',
    title: 'Local & day trips',
    description:
      'Short hops around Srivilliputtur, Madurai, and nearby towns when you need a reliable car for the day without fuss.',
  },
] as const;

export const DESTINATIONS = [
  { name: 'Madurai', note: 'Temple city & airport gateway' },
  { name: 'Chennai', note: 'City connections & stations' },
  { name: 'Bengaluru', note: 'Work and family travel' },
  { name: 'Coimbatore', note: 'West Tamil Nadu routes' },
  { name: 'Rameswaram', note: 'Pilgrimage corridor' },
  { name: 'Kodaikanal', note: 'Hill-station weekends' },
  { name: 'Thiruvananthapuram', note: 'Kerala coast links' },
  { name: 'Anywhere in India', note: 'Tell us the destination — we plan the road' },
] as const;

export const TRUST_POINTS = [
  {
    title: 'Based in Srivilliputtur',
    description:
      'We know the local roads, temple timings, and how families here prefer to travel — and we carry that care onto longer highways.',
  },
  {
    title: 'Small-car comfort',
    description:
      'Sedan travel suited to families and small groups: air-conditioned cabins, sensible luggage space, and a ride that stays calm on long stretches.',
  },
  {
    title: 'Direct coordination',
    description:
      'Call or WhatsApp us to plan pickup, timing, and fare. No app cart, no middle layer — you speak with the travel desk.',
  },
  {
    title: 'Honest planning',
    description:
      'We confirm what we can do for your dates and route before you travel. If a timing or destination needs adjustment, we say so clearly.',
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Share your plan',
    description: 'Tell us pickup, destination, date, and how many people are travelling.',
  },
  {
    step: '02',
    title: 'We confirm details',
    description: 'We reply with timing, vehicle fit, and fare clarity so you can decide with confidence.',
  },
  {
    step: '03',
    title: 'Travel calmly',
    description: 'On the day, your driver arrives as planned — you ride, rest, talk, or simply watch the road.',
  },
] as const;
