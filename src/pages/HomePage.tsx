import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { TopBanner } from '../components/TopBanner';
import { useSiteAudience } from '../context/SiteAudienceContext';
import { CompaniesSection } from '../sections/CompaniesSection';
import { ContactSection } from '../sections/ContactSection';
import { EmployeesSection } from '../sections/EmployeesSection';
import { FaqSection } from '../sections/FaqSection';
import { HeroSection } from '../sections/HeroSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { LoginSection } from '../sections/LoginSection';
import { ModalitiesSection } from '../sections/ModalitiesSection';
import { PartnersSection } from '../sections/PartnersSection';
import { SimulatorSection } from '../sections/SimulatorSection';
import { WhyMovlySection } from '../sections/WhyMovlySection';
import type { FaqTab } from '../data/faq';
import type { SiteAudience } from '../audience/types';

const FAQ_DEFAULT_BY_AUDIENCE: Record<SiteAudience, FaqTab> = {
  alunos: 'col',
  empresas: 'emp',
  academias: 'aca',
};

export function HomePage() {
  const { audience } = useSiteAudience();
  const showAluno = audience === 'alunos';
  const showEmpresa = audience === 'empresas';
  const showAcademia = audience === 'academias';

  return (
    <div className="site-page" data-audience={audience}>
      <TopBanner />
      <SiteHeader />
      <main className="site-main">
        <HeroSection />
        {showAluno ? <ModalitiesSection /> : null}
        {showAluno || showEmpresa ? <HowItWorksSection /> : null}
        {showEmpresa ? <CompaniesSection /> : null}
        {showEmpresa ? <SimulatorSection /> : null}
        {showAluno ? <EmployeesSection /> : null}
        {showAcademia ? <PartnersSection /> : null}
        {showAcademia || showEmpresa ? <WhyMovlySection /> : null}
        <FaqSection defaultTab={FAQ_DEFAULT_BY_AUDIENCE[audience]} key={audience} />
        <LoginSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
