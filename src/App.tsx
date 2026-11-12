import { Navigate, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { SiteAudienceProvider } from './context/SiteAudienceContext';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage';

function SiteAudienceLayout({ children }: { children: React.ReactNode }) {
  return <SiteAudienceProvider>{children}</SiteAudienceProvider>;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route
        path="/"
        element={
          <SiteAudienceLayout>
            <HomePage />
          </SiteAudienceLayout>
        }
      />
      <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
      <Route path="/termos" element={<Navigate to="/termos-de-uso" replace />} />
      <Route path="/privacidade" element={<Navigate to="/politica-de-privacidade" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}
