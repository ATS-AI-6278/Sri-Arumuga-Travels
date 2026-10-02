import React from 'react';
import { CONTACT_DATA } from '../lib/contact';
import { BRAND } from '../lib/content';

/** LocalBusiness JSON-LD using only confirmed contact facts (no invented ratings/hours). */
export const SeoSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND.name,
    description:
      'Small-car and taxi travel from Srivilliputtur, Tamil Nadu to destinations across India.',
    telephone: [`+91${CONTACT_DATA.phone1}`, `+91${CONTACT_DATA.phone2}`],
    address: {
      '@type': 'PostalAddress',
      addressLocality: CONTACT_DATA.location,
      addressRegion: CONTACT_DATA.region,
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
