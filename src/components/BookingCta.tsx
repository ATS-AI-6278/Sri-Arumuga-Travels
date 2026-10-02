import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import { getPagesCopy } from '../i18n/pages';

interface BookingCtaProps {
  enquireTo?: string;
  destination?: string;
  className?: string;
}

/** Soft end-of-page Enquire only — phones live in header (icon), footer NAP, and contact. */
export const BookingCta: React.FC<BookingCtaProps> = ({
  enquireTo = '/contact',
  destination,
  className = '',
}) => {
  const { locale } = useI18n();
  const ui = getPagesCopy(locale).ui;

  return (
    <div className={className}>
      <Link
        to={enquireTo}
        state={destination ? { destination } : undefined}
        className="btn btn-primary min-h-12 inline-flex"
      >
        {ui.bookCta}
      </Link>
    </div>
  );
};
