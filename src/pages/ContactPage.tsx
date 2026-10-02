import React, { useMemo, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EnquirySection } from '../components/EnquirySection';
import { CONTACT_DATA, mailtoHref, telHref, whatsappHref } from '../lib/contact';
import { useI18n } from '../i18n/I18nProvider';
import { getPagesCopy } from '../i18n/pages';
import { Phone, MessageCircle, Mail } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t, locale } = useI18n();
  const pages = getPagesCopy(locale);
  const location = useLocation();
  const [params] = useSearchParams();
  const initialDestination = useMemo(() => {
    const fromState = (location.state as { destination?: string } | null)?.destination;
    return fromState || params.get('destination') || '';
  }, [location.state, params]);
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <div className="pt-[calc(var(--header-h))]">
      <div className="section-shell section-surface !pb-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs
            items={[
              { label: pages.ui.home, to: '/' },
              { label: t.nav.enquire },
            ]}
          />
          <p className="eyebrow mb-4">
            <span className="eyebrow-dot" aria-hidden />
            {pages.contact.eyebrow}
          </p>
          <h1 className="display-title max-w-3xl">{t.enquire.title}</h1>
          <p className="lede mt-4 max-w-2xl">{pages.contact.lede}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={telHref(CONTACT_DATA.phone1)} className="btn btn-primary">
              <Phone className="w-4 h-4" aria-hidden />
              {CONTACT_DATA.formattedPhone1}
            </a>
            <a href={telHref(CONTACT_DATA.phone2)} className="btn btn-secondary">
              <Phone className="w-4 h-4" aria-hidden />
              {CONTACT_DATA.formattedPhone2}
            </a>
            <a
              href={whatsappHref(t.whatsapp.greeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden />
              {t.common.whatsapp}
            </a>
            <a href={mailtoHref()} className="btn btn-secondary">
              <Mail className="w-4 h-4" aria-hidden />
              {CONTACT_DATA.email}
            </a>
          </div>
        </div>
      </div>
      <EnquirySection initialDestination={initialDestination} formRef={formRef} />
    </div>
  );
};
