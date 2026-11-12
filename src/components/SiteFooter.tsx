import { Link } from 'react-router-dom';
import { corporateLoginUrl, partnerLoginUrl } from '../config/links';
import { BrandLogo } from './BrandLogo';

export function SiteFooter() {
  return (
    <footer className="site-footer movly-grain">
      <div className="site-footer__grid">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <BrandLogo variant="lime" height={50} />
            <p>o bem-estar começa no movimento.</p>
          </div>
          <nav className="site-footer__nav" aria-label="Rodapé">
            <div className="site-footer__col">
              <strong>Movly</strong>
              <Link to="/#como-funciona">Como funciona</Link>
              <Link to="/#duvidas">Dúvidas</Link>
              <Link to="/#contato">Contato</Link>
            </div>
            <div className="site-footer__col">
              <strong>Para você</strong>
              <Link to="/#empresas">Empresas</Link>
              <Link to="/#colaboradores">Colaboradores</Link>
              <Link to="/#academias">Academias</Link>
            </div>
            <div className="site-footer__col">
              <strong>Acesso</strong>
              <a href={corporateLoginUrl}>Portal da empresa</a>
              <a href={partnerLoginUrl}>Portal da academia</a>
              <a href="https://instagram.com/sejamovly">@sejamovly</a>
            </div>
          </nav>
        </div>
        <div className="site-footer__legal">
          <span>© 2026 Movly · by ACAF Brasil. Movly é uma marca de A L M LTDA · CNPJ 68.679.868/0001-01</span>
          <span className="site-footer__legal-links">
            <Link to="/termos-de-uso">Termos de uso</Link>
            <Link to="/politica-de-privacidade">Privacidade</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
