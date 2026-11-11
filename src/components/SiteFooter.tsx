import { corporateLoginUrl, partnerLoginUrl } from '../config/links';
import { BrandLogo } from './BrandLogo';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__top">
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <BrandLogo variant="white" height={50} />
            <p>o bem-estar começa no movimento.</p>
          </div>
          <nav className="site-footer__nav" aria-label="Rodapé">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <strong>Movly</strong>
              <a href="#como-funciona">Como funciona</a>
              <a href="#duvidas">Dúvidas</a>
              <a href="#contato">Contato</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <strong>Para você</strong>
              <a href="#empresas">Empresas</a>
              <a href="#colaboradores">Colaboradores</a>
              <a href="#academias">Academias</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <strong>Acesso</strong>
              <a href={corporateLoginUrl}>Portal da empresa</a>
              <a href={partnerLoginUrl}>Portal da academia</a>
              <a href="https://instagram.com/sejamovly">@sejamovly</a>
            </div>
          </nav>
        </div>
        <div className="site-footer__legal">
          <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span>© 2026 Movly · by ACAF Brasil. Movly é uma marca de A L M LTDA · CNPJ 68.679.868/0001-01</span>
            <span>R. Natal Pedro Dalla Stella, 559 · Santa Felicidade · Curitiba/PR · CEP 82030-490</span>
          </span>
          <span style={{ display: 'flex', gap: 20 }}>
            <a href="#termos">Termos de uso</a>
            <a href="#privacidade">Privacidade</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
