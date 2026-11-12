import { useEffect, useId, useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { useSiteAudience } from '../context/SiteAudienceContext';
import type { SiteAudience } from '../audience/types';

type NavItem = { href: string; label: string };

const NAV_BY_AUDIENCE: Record<SiteAudience, readonly NavItem[]> = {
  alunos: [
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#colaboradores', label: 'Para você' },
    { href: '#duvidas', label: 'Dúvidas' },
  ],
  empresas: [
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#empresas', label: 'Para empresas' },
    { href: '#simulador', label: 'Simulador' },
    { href: '#duvidas', label: 'Dúvidas' },
  ],
  academias: [
    { href: '#academias', label: 'Para academias' },
    { href: '#modelo', label: 'O modelo' },
    { href: '#duvidas', label: 'Dúvidas' },
  ],
};

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const { audience, homePath } = useSiteAudience();
  const navItems = NAV_BY_AUDIENCE[audience];

  useEffect(() => {
    document.body.classList.toggle('site-nav-open', menuOpen);
    return () => document.body.classList.remove('site-nav-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const hashHref = (hash: string) => `${homePath}${hash}`;

  return (
    <header className="site-header-shell">
      <div className="site-container site-header__bar">
        <a href={`${homePath}#topo`} className="site-header__logo" aria-label="movly. by ACAF Brasil, início" onClick={closeMenu}>
          <BrandLogo variant="purple" height={37} />
        </a>

        <nav className="site-header__nav site-header__nav--desktop" aria-label="Principal">
          {navItems.map((item) => (
            <a key={item.href} className="site-navlink" href={hashHref(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions site-header__actions--desktop">
          <a className="site-btn site-btn--ghost" href={hashHref('#entrar')}>
            Entrar
          </a>
          <a className="site-btn site-btn--primary site-btn--sm" href={hashHref('#contato')}>
            Fale com a gente
          </a>
        </div>

        <button
          type="button"
          className="site-header__menu-toggle"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">{menuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <div id={menuId} className={`site-header__drawer${menuOpen ? ' site-header__drawer--open' : ''}`}>
        <nav className="site-header__nav site-header__nav--drawer" aria-label="Menu mobile">
          {navItems.map((item) => (
            <a key={item.href} className="site-navlink site-navlink--drawer" href={hashHref(item.href)} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="site-header__drawer-actions">
          <a className="site-btn site-btn--ghost site-btn--block" href={hashHref('#entrar')} onClick={closeMenu}>
            Entrar
          </a>
          <a className="site-btn site-btn--primary site-btn--block" href={hashHref('#contato')} onClick={closeMenu}>
            Fale com a gente
          </a>
        </div>
      </div>
      {menuOpen ? <button type="button" className="site-header__backdrop" aria-label="Fechar menu" onClick={closeMenu} /> : null}
    </header>
  );
}
