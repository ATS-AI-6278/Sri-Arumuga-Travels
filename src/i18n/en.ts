import type { Dictionary } from './types.ts';

export const en: Dictionary = {
  htmlLang: 'en-IN',
  brand: {
    name: 'Sri Arumuga Travels',
    shortName: 'Sri Arumuga',
    tagline: 'Travel from Srivilliputtur to anywhere in India',
    promise: 'A calm ride. A clear conversation.',
    homeBase: 'Srivilliputtur, Tamil Nadu',
    navSubtitle: 'Travels · Srivilliputtur',
  },
  lang: {
    switchTo: 'தமிழ்',
    switchAria: 'Switch language to Tamil',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    blog: 'Blog',
    destinations: 'Destinations',
    trust: 'Why us',
    story: 'Our story',
    faq: 'FAQ',
    more: 'More',
    enquire: 'Enquire',
    enquireBtn: 'Enquire',
    enquiryForm: 'Enquiry form',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    primaryNav: 'Primary',
    mobileNav: 'Mobile navigation',
    homeAria: 'home',
    call: 'Call',
    whatsapp: 'WhatsApp',
  },
  common: {
    skipToContent: 'Skip to content',
    callNow: 'Call now',
    whatsapp: 'WhatsApp',
    sendEnquiry: 'Send an enquiry',
  },
  hero: {
    basedIn: 'Based in',
    titleBefore: 'Travel from Srivilliputtur to',
    titleAccent: 'anywhere in India',
    lede:
      'Quiet sedan journeys for families, pilgrims, and everyday travellers — planned by phone or WhatsApp before you leave town.',
    orEnquiry: 'Or send an enquiry →',
    explore: 'Explore',
    sceneAlt:
      'Dark grey Toyota Etios sedan on a scenic road at golden hour — the kind of quiet journey we drive from Srivilliputtur.',
  },
  services: {
    eyebrow: 'What we offer',
    title: 'Practical journeys from a town that knows the road.',
    lede:
      'Temple mornings, airport evenings, family visits far from home — we plan the trip with you first, then drive it carefully.',
    ctaHint: 'Not sure which fits? Tell us your plan — we will suggest a sensible way to travel.',
    cta: 'Ask about your trip',
    items: [
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
          'Short hops around Srivilliputtur, Madurai, and nearby towns when you need a reliable car for the day.',
      },
    ],
  },
  destinations: {
    eyebrow: 'Where we go',
    title: 'Familiar roads — and any place you need to reach.',
    lede:
      'These come up often. Your destination does not have to be on this list. If the road can take us there from Srivilliputtur, we will talk through timing and fare.',
    enquireCustom: 'Enquire about a custom destination',
    enquireTo: 'Enquire about travel to',
    items: [
      { id: 'madurai', name: 'Madurai', note: 'Temple city & airport' },
      { id: 'chennai', name: 'Chennai', note: 'City & station links' },
      { id: 'bengaluru', name: 'Bengaluru', note: 'Work and family travel' },
      { id: 'coimbatore', name: 'Coimbatore', note: 'West Tamil Nadu' },
      { id: 'rameswaram', name: 'Rameswaram', note: 'Pilgrimage road' },
      { id: 'kodaikanal', name: 'Kodaikanal', note: 'Hill weekends' },
      { id: 'tvm', name: 'Thiruvananthapuram', note: 'Kerala coast' },
      { id: 'anywhere', name: 'Anywhere in India', note: 'Name the place — we plan the road' },
    ],
  },
  trust: {
    eyebrow: 'Why travellers choose us',
    title: 'A clear conversation before every journey.',
    lede:
      'Steady coordination, a comfortable sedan, and plain answers when you call — so you can leave with a quiet mind.',
    fleetEyebrow: 'On the road',
    fleetTitle: 'Etios sedan comfort',
    fleetBody:
      'Dark metallic Etios sedan comfort for highway stretches — luggage, elders, and the quiet between towns. Journeys that start in Srivilliputtur.',
    fleetAlt: 'Dark grey Toyota Etios sedan on a scenic palm-lined road',
    howTitle: 'How a trip usually begins',
    points: [
      {
        title: 'Based in Srivilliputtur',
        description:
          'Local roads, temple rhythms, and the way families here like to travel — carried onto longer highways.',
      },
      {
        title: 'Vehicles for your group',
        description:
          'A thoughtful fleet matched to your needs — comfortable sedans for small groups, larger family cars for extra space, and sensible luggage room for highway stretches.',
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
    ],
    steps: [
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
    ],
  },
  story: {
    eyebrow: 'Our story',
    title: 'A travel desk rooted in Srivilliputtur.',
    p1: 'Sri Arumuga Travels grew from an everyday need — leaving town with confidence for a wedding across Tamil Nadu, a temple visit with elders, or a long drive to meet family elsewhere in India.',
    p2: 'We keep it simple: comfortable sedans, larger family cars for groups, a driver who knows the route, and direct Call or WhatsApp coordination when plans need to change.',
    planCta: 'Plan a journey',
    homeBaseLabel: 'Home base',
    homeBaseBody:
      'From Andal’s temple town, roads reach Madurai, the coast, the hills, and the rest of India. We start here — and take you where you need to go.',
    howToBook: 'How to book',
    howToBookValue: 'Call · WhatsApp · Enquiry',
    vehicle: 'Vehicles',
    vehicleValue: 'Sedans, larger family cars & group options',
    coverage: 'Coverage',
    coverageValue: 'Across India by road',
    directPhone: 'Direct Phone',
  },
  enquire: {
    eyebrow: 'Enquire',
    title: 'Tell us where you are headed.',
    lede: 'Fill in the basics and open WhatsApp with a ready message — or email us the same details. Prefer to talk? Call either number.',
    primary: 'Primary',
    secondary: 'Secondary',
    emailLabel: 'Email',
    name: 'Your name *',
    phone: 'Mobile number *',
    phonePlaceholder: '10-digit number',
    pickup: 'Pickup',
    destination: 'Destination *',
    destinationPlaceholder: 'City, town, or landmark',
    travelDate: 'Travel date / timing',
    travelDatePlaceholder: 'e.g. 12 Oct morning / flexible',
    passengers: 'Passengers',
    passengersPlaceholder: 'e.g. 3 adults, 1 child',
    notes: 'Anything else we should know?',
    idleHint: 'No booking account — WhatsApp opens with your details; email goes to both business inboxes (or your mail app if auto-email is not set up yet).',
    submit: 'Send via WhatsApp',
    submitEmail: 'Email enquiry',
    preparing: 'Preparing…',
    openAgain: 'Open WhatsApp again',
    openEmail: 'Open email draft',
    fallbackHint:
      'WhatsApp did not open. Call either number, or use Email enquiry — your mail app will open with the details ready.',
    errName: 'Please share your name.',
    errPhone: 'Enter a valid 10-digit Indian mobile number.',
    errDestination: 'Tell us where you need to go.',
    errFix: 'Please fix the highlighted fields and try again.',
    loadingMsg: 'Preparing your WhatsApp enquiry…',
    successMsg:
      'Enquiry ready — WhatsApp should open with your details, and email is addressed to both sriviarumugatravels@gmail.com and arumugatamilselvan@gmail.com. If WhatsApp did not open, use the buttons below.',
    errorMsg:
      'Could not open WhatsApp. Call either number, or use Email enquiry to send the same details from your mail app.',
    emailOpenedMsg:
      'Email draft ready — To: sriviarumugatravels@gmail.com, Cc: arumugatamilselvan@gmail.com. If your mail app did not open, call us or use WhatsApp.',
    defaultPickup: 'Srivilliputtur',
  },
  faq: {
    eyebrow: 'Common questions',
    title: 'Straight answers before you call.',
    lede: 'Booking is by Call or WhatsApp from our Srivilliputtur base — no invented claims, just how we work.',
    items: [
      {
        question: 'How do I book a taxi or outstation cab?',
        answer:
          'Call or WhatsApp either number on this site, send the enquiry form (WhatsApp handoff), or email sriviarumugatravels@gmail.com. There is no app cart; you speak with the travel desk.',
      },
      {
        question: 'Where is Sri Arumuga Travels based?',
        answer:
          'We are based in Srivilliputtur, Tamil Nadu. Journeys usually start here and can go across India by road.',
      },
      {
        question: 'Do you drive outstation across India?',
        answer:
          'Yes. We plan outstation sedan trips from Srivilliputtur to cities, towns, airports, temples, and family destinations across India. Share pickup, destination, date, and passengers — we confirm timing and fare.',
      },
      {
        question: 'What kind of vehicles do you offer?',
        answer:
          'We provide a wide range of vehicles suitable for different needs — from comfortable sedans (ideal for couples and small families) to larger family cars and multi-passenger options with ample luggage space for highway and pilgrimage travel.',
      },
    ],
  },
  footer: {
    blog: 'Blog',
    call: 'Call',
    message: 'Message',
    email: 'Email',
    onThisPage: 'On this page',
    whatsappEnquiry: 'WhatsApp enquiry',
    enquiryForm: 'Enquiry form',
    emailEnquiry: 'Email us',
    services: 'Services',
    destinations: 'Destinations',
    trust: 'Why us',
    story: 'Our story',
    faq: 'FAQ',
    copyright: 'Small-car travel from Srivilliputtur.',
    photoCreditsBefore: 'Vehicle photos — see',
    photoCreditsLink: 'photo credits',
    photoCreditsAfter: '.',
    adminEmailLabel: 'Technical / admin',
  },
  sticky: {
    region: 'Quick contact actions',
    call: 'Call',
    whatsapp: 'WhatsApp',
    more: 'More',
    enquire: 'Enquire',
  },
  modal: {
    closeOverlay: 'Close dialog overlay',
    close: 'Close',
    eyebrow: 'Direct contact',
    title: 'Sri Arumuga Travels',
    desc: 'Call, WhatsApp, email, or open the enquiry form.',
    call: 'Call',
    whatsapp: 'WhatsApp us',
    email: 'Email us',
    openForm: 'Open enquiry form',
  },
  whatsapp: {
    greeting:
      'Hello Sri Arumuga Travels — I would like to enquire about a journey from Srivilliputtur.',
    enquiryTitle: 'Hello Sri Arumuga Travels — travel enquiry',
    name: 'Name',
    phone: 'Phone',
    pickup: 'Pickup',
    destination: 'Destination',
    date: 'Date',
    passengers: 'Passengers',
    notes: 'Notes',
  },
};
