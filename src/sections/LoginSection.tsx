import { corporateLoginUrl, corporateSignupUrl, partnerLoginUrl } from '../config/links';

export function LoginSection() {
  return (
    <section id="entrar" className="site-container" style={{ paddingBlock: '48px 72px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28, maxWidth: 640 }}>
        <span className="site-eyebrow">Acesso</span>
        <h2 className="site-h2">entrar nos portais</h2>
        <p className="site-lead">Área restrita para empresas, academias e times que já usam a Movly.</p>
      </div>
      <div className="site-login-grid">
        <div className="site-login-card">
          <h3 className="site-h3" style={{ fontSize: 20 }}>
            Portal da empresa
          </h3>
          <p>Convites, colaboradores, faturas e simulador para o RH.</p>
          <a className="site-btn site-btn--primary" href={corporateLoginUrl}>
            Entrar
          </a>
          <a className="site-navlink" href={corporateSignupUrl}>
            Cadastrar empresa →
          </a>
        </div>
        <div className="site-login-card">
          <h3 className="site-h3" style={{ fontSize: 20 }}>
            Portal da academia
          </h3>
          <p>Check-ins, repasses e credenciamento com a ACAF Brasil.</p>
          <a className="site-btn site-btn--outline-purple" href={partnerLoginUrl}>
            Entrar
          </a>
        </div>
      </div>
    </section>
  );
}
