export const BRAND = {
  name: 'Sri Arumuga Travels',
  shortName: 'Sri Arumuga',
  tagline: 'Travel from Srivilliputtur to anywhere in India',
  promise: 'A calm ride. A clear conversation.',
  homeBase: 'Srivilliputtur, Tamil Nadu',
} as const;

export const SERVICES = [
  {
    id: 'outstation',
    title: 'Outstation journeys',
    description:
      'From Srivilliputtur to cities, towns, and family homes across India — timed around your day, not a timetable.',
  },
  {
    id: 'airport',
    title: 'Airport & station pickups',
    description:
      'Meet-and-travel for Madurai and nearby airports or stations, with room for luggage and a clear pickup plan.',
  },
  {
    id: 'temple',
    title: 'Temple & pilgrimage trips',
    description:
      'Andal Temple visits, nearby shrines, and longer pilgrimage routes — paced for elders and families.',
  },
  {
    id: 'local',
    title: 'Local & day trips',
    description:
      'Short hops around Srivilliputtur, Madurai, and nearby towns when you simply need a reliable car for the day.',
  },
] as const;

export const DESTINATIONS = [
  { name: 'Madurai', note: 'Temple city & airport' },
  { name: 'Chennai', note: 'City & station links' },
  { name: 'Bengaluru', note: 'Work and family travel' },
  { name: 'Coimbatore', note: 'West Tamil Nadu' },
  { name: 'Rameswaram', note: 'Pilgrimage road' },
  { name: 'Kodaikanal', note: 'Hill weekends' },
  { name: 'Thiruvananthapuram', note: 'Kerala coast' },
  { name: 'Anywhere in India', note: 'Name the place — we plan the road' },
] as const;

export const TRUST_POINTS = [
  {
    title: 'Based in Srivilliputtur',
    description:
      'Local roads, temple rhythms, and the way families here like to travel — carried onto longer highways.',
  },
  {
    title: 'Small-car comfort',
    description:
      'Sedan travel for families and small groups: cool cabins, sensible luggage space, a steady highway ride.',
  },
  {
    title: 'Direct coordination',
    description:
      'Call or WhatsApp for pickup, timing, and fare. No app cart — you speak with the travel desk.',
  },
  {
    title: 'Honest planning',
    description:
      'We confirm what we can do for your dates and route first. If something needs to change, we say so plainly.',
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Share your plan',
    description: 'Pickup, destination, date, and how many people are travelling.',
  },
  {
    step: '02',
    title: 'We confirm details',
    description: 'Timing, vehicle fit, and fare clarity — so you can decide calmly.',
  },
  {
    step: '03',
    title: 'Travel quietly',
    description: 'Your driver arrives as planned. You ride, rest, talk, or watch the road.',
  },
] as const;
