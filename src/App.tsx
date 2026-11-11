import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { TopBanner } from './components/TopBanner';
import { CompaniesSection } from './sections/CompaniesSection';
import { ContactSection } from './sections/ContactSection';
import { EmployeesSection } from './sections/EmployeesSection';
import { FaqSection } from './sections/FaqSection';
import { HeroSection } from './sections/HeroSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { LoginSection } from './sections/LoginSection';
import { ModalitiesSection } from './sections/ModalitiesSection';
import { PartnersSection } from './sections/PartnersSection';
import { SimulatorSection } from './sections/SimulatorSection';
import { WhyMovlySection } from './sections/WhyMovlySection';

export default function App() {
  return (
    <div className="site-page">
      <TopBanner />
      <SiteHeader />
      <main>
        <HeroSection />
        <ModalitiesSection />
        <HowItWorksSection />
        <CompaniesSection />
        <SimulatorSection />
        <EmployeesSection />
        <PartnersSection />
        <WhyMovlySection />
        <FaqSection />
        <LoginSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
