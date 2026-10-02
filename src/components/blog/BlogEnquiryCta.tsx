import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nProvider';

interface Props {
  note?: string;
}

/** Calm end-of-post Enquire block — no phone/WhatsApp blast in blog cards. */
export const BlogEnquiryCta: React.FC<Props> = ({ note }) => {
  const { locale } = useI18n();
  const heading =
    locale === 'ta' ? 'பயணம் பற்றி விசாரிக்கவும்' : 'Enquire about your journey';
  const body =
    note ??
    (locale === 'ta'
      ? 'தேதி, பிக்அப், சேருமிடம் மற்றும் பயணிகள் எண்ணிக்கை சொல்லுங்கள் — விசாரணை படிவம் வழியாக தொடர்பு கொள்ளுங்கள்.'
      : 'Share your date, pickup, destination, and passenger count — we will confirm what is practical.');
  const cta = locale === 'ta' ? 'விசாரணை' : 'Enquire';

  return (
    <aside className="card p-5 sm:p-6 my-2 border-[var(--color-line)] bg-[var(--color-surface)]">
      <h3 className="font-display text-xl text-[var(--color-ink)]">{heading}</h3>
      <p className="mt-2 text-[15px] text-[var(--color-muted)] leading-relaxed">{body}</p>
      <div className="mt-5">
        <Link to="/contact" className="btn btn-primary min-h-11 inline-flex text-sm">
          {cta}
        </Link>
      </div>
    </aside>
  );
};
