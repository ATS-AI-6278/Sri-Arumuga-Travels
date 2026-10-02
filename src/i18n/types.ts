export type Locale = 'en' | 'ta';

export interface Dictionary {
  htmlLang: string;
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    promise: string;
    homeBase: string;
    navSubtitle: string;
  };
  lang: {
    switchTo: string;
    switchAria: string;
  };
  nav: {
    home: string;
    services: string;
    destinations: string;
    blog: string;
    trust: string;
    story: string;
    faq: string;
    more: string;
    enquire: string;
    enquireBtn: string;
    enquiryForm: string;
    openMenu: string;
    closeMenu: string;
    primaryNav: string;
    mobileNav: string;
    homeAria: string;
    call: string;
    whatsapp: string;
  };
  common: {
    skipToContent: string;
    callNow: string;
    whatsapp: string;
    sendEnquiry: string;
  };
  hero: {
    basedIn: string;
    titleBefore: string;
    titleAccent: string;
    lede: string;
    orEnquiry: string;
    explore: string;
    sceneAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lede: string;
    ctaHint: string;
    cta: string;
    items: Array<{ id: string; title: string; description: string }>;
  };
  destinations: {
    eyebrow: string;
    title: string;
    lede: string;
    enquireCustom: string;
    enquireTo: string;
    items: Array<{ id: string; name: string; note: string }>;
  };
  trust: {
    eyebrow: string;
    title: string;
    lede: string;
    fleetEyebrow: string;
    fleetTitle: string;
    fleetBody: string;
    fleetAlt: string;
    howTitle: string;
    points: Array<{ title: string; description: string }>;
    steps: Array<{ step: string; title: string; description: string }>;
  };
  story: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    planCta: string;
    homeBaseLabel: string;
    homeBaseBody: string;
    howToBook: string;
    howToBookValue: string;
    vehicle: string;
    vehicleValue: string;
    coverage: string;
    coverageValue: string;
    directPhone: string;
  };
  enquire: {
    eyebrow: string;
    title: string;
    lede: string;
    primary: string;
    secondary: string;
    emailLabel: string;
    name: string;
    phone: string;
    phonePlaceholder: string;
    pickup: string;
    destination: string;
    destinationPlaceholder: string;
    travelDate: string;
    travelDatePlaceholder: string;
    passengers: string;
    passengersPlaceholder: string;
    notes: string;
    idleHint: string;
    submit: string;
    submitEmail: string;
    preparing: string;
    openAgain: string;
    openEmail: string;
    fallbackHint: string;
    errName: string;
    errPhone: string;
    errDestination: string;
    errFix: string;
    loadingMsg: string;
    successMsg: string;
    errorMsg: string;
    emailOpenedMsg: string;
    defaultPickup: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    lede: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: {
    call: string;
    message: string;
    email: string;
    onThisPage: string;
    whatsappEnquiry: string;
    enquiryForm: string;
    emailEnquiry: string;
    services: string;
    destinations: string;
    blog: string;
    trust: string;
    story: string;
    faq: string;
    copyright: string;
    photoCreditsBefore: string;
    photoCreditsLink: string;
    photoCreditsAfter: string;
    adminEmailLabel: string;
  };
  sticky: {
    region: string;
    call: string;
    whatsapp: string;
    more: string;
    enquire: string;
  };
  modal: {
    closeOverlay: string;
    close: string;
    eyebrow: string;
    title: string;
    desc: string;
    call: string;
    whatsapp: string;
    email: string;
    openForm: string;
  };
  whatsapp: {
    greeting: string;
    enquiryTitle: string;
    name: string;
    phone: string;
    pickup: string;
    destination: string;
    date: string;
    passengers: string;
    notes: string;
  };
}
