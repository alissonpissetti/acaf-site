import { useEffect } from 'react';
import { LegalDocument } from '../components/LegalDocument';
import { TERMS_OF_USE_INTRO, TERMS_OF_USE_SECTIONS, TERMS_OF_USE_TITLE } from '../content/termsOfUse';
import { LegalLayout } from '../layouts/LegalLayout';

export function TermsOfUsePage() {
  useEffect(() => {
    document.title = 'Termos de uso · Movly';
  }, []);

  return (
    <LegalLayout>
      <LegalDocument title={TERMS_OF_USE_TITLE} intro={TERMS_OF_USE_INTRO} sections={TERMS_OF_USE_SECTIONS} />
    </LegalLayout>
  );
}
