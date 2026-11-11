import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SiteFooter } from '../components/SiteFooter';
import { BrandLogo } from '../components/BrandLogo';

type LegalLayoutProps = {
  children: ReactNode;
};

export function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="site-page site-page--legal">
      <header className="legal-shell-header site-container site-container--header">
        <Link to="/" aria-label="Movly, início">
          <BrandLogo variant="purple" height={37} />
        </Link>
        <nav className="legal-shell-header__links" aria-label="Legal">
          <Link to="/termos-de-uso">Termos de uso</Link>
          <Link to="/politica-de-privacidade">Privacidade</Link>
          <Link to="/">Voltar ao site</Link>
        </nav>
      </header>
      <main className="legal-shell-main site-container">{children}</main>
      <SiteFooter />
    </div>
  );
}
