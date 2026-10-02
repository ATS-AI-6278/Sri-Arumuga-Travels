/** Widened page-copy shapes (string fields) so EN literals and TA translations both typecheck. */
export interface FaqPair {
  q: string;
  a: string;
}

export interface ServicePageCopy {
  lede: string;
  body: string[];
  bullets: string[];
  faqs: FaqPair[];
}

export interface LocationPageCopy {
  lede: string;
  body: string[];
  bullets: string[];
  faqs: FaqPair[];
}

export interface PagesCopy {
  ui: {
    breadcrumbNav: string;
    home: string;
    bookCta: string;
    callOrWa: string;
    relatedServices: string;
    relatedLocations: string;
    seeAllServices: string;
    seeAllLocations: string;
    faqTitle: string;
    howToBook: string;
    howToBookBody: string;
    noFaresNote: string;
    backHome: string;
  };
  servicesHub: {
    eyebrow: string;
    title: string;
    lede: string;
    ctaHint: string;
  };
  locationsHub: {
    eyebrow: string;
    title: string;
    lede: string;
    homeBaseCard: string;
  };
  services: {
    'outstation-cab': ServicePageCopy;
    'airport-taxi': ServicePageCopy;
    'temple-pilgrimage': ServicePageCopy;
    'local-taxi': ServicePageCopy;
  };
  locations: {
    srivilliputtur: LocationPageCopy;
    madurai: LocationPageCopy;
    chennai: LocationPageCopy;
    bengaluru: LocationPageCopy;
    coimbatore: LocationPageCopy;
    rameswaram: LocationPageCopy;
    kodaikanal: LocationPageCopy;
    thiruvananthapuram: LocationPageCopy;
  };
  contact: {
    eyebrow: string;
    lede: string;
  };
}
