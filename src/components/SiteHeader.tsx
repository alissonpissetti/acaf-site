import { BrandLogo } from './BrandLogo';

const NAV = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#empresas', label: 'Para empresas' },
  { href: '#colaboradores', label: 'Para colaboradores' },
  { href: '#academias', label: 'Para academias' },
  { href: '#duvidas', label: 'Dúvidas' },
] as const;

export function SiteHeader() {
  return (
    <header className="site-container site-container--header site-header">
      <a href="#topo" aria-label="Movly, início">
        <BrandLogo variant="purple" height={37} />
      </a>
      <nav className="site-header__nav" aria-label="Principal">
        {NAV.map((item) => (
          <a key={item.href} className="site-navlink" href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="site-header__actions">
        <a className="site-btn site-btn--ghost" href="#entrar">
          Entrar
        </a>
        <a className="site-btn site-btn--primary site-btn--sm" href="#contato">
          Fale com a gente
        </a>
      </div>
    </header>
  );
}
