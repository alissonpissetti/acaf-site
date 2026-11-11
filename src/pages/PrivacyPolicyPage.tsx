import { useEffect } from 'react';
import { LegalDocument } from '../components/LegalDocument';
import {
  PRIVACY_POLICY_INTRO,
  PRIVACY_POLICY_SECTIONS,
  PRIVACY_POLICY_TITLE,
} from '../content/privacyPolicy';
import { LegalLayout } from '../layouts/LegalLayout';

export function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Política de privacidade · Movly';
  }, []);

  return (
    <LegalLayout>
      <LegalDocument
        title={PRIVACY_POLICY_TITLE}
        intro={PRIVACY_POLICY_INTRO}
        sections={PRIVACY_POLICY_SECTIONS}
      />
    </LegalLayout>
  );
}
