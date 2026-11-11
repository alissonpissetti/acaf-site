import { ArrowRightIcon } from '../components/icons';
import { BrandLogo } from '../components/BrandLogo';

export function HeroSection() {
  return (
    <section id="topo" className="site-hero">
      <div className="site-hero__shell">
        <div className="site-hero__ring--sky" aria-hidden />
        <div className="site-hero__ring--lime" aria-hidden />
        <div className="site-hero__grid">
          <div className="site-hero__copy">
            <span className="site-hero__pill">Bem-estar para empresas e colaboradores</span>
            <h1 className="site-h1 site-hero__title">a vida acontece quando você se move.</h1>
            <p className="site-hero__text">
              A sua empresa entra com uma parte, você escolhe o plano e treina na sua academia preferida — tudo com
              check-in pelo app, no seu ritmo.
            </p>
            <div className="site-hero__cta">
              <a className="site-btn site-btn--lime" href="#empresas">
                Quero para minha empresa
                <ArrowRightIcon />
              </a>
              <a className="site-btn site-btn--outline-white" href="#colaboradores">
                Sou colaborador
              </a>
              <a className="site-btn site-btn--outline-white" href="#academias">
                Tenho academia
              </a>
            </div>
            <p className="site-hero__acaf">
              Um modelo justo para todos, em parceria com a ACAF Brasil.
            </p>
          </div>

          <div className="site-phone-wrap">
            <div className="site-phone-stage">
              <div className="site-phone-stage__ring" aria-hidden />
              <div className="site-phone" role="img" aria-label="Tela do app Movly com check-in confirmado">
                <div className="site-phone__screen">
                  <div className="site-phone__top">
                    <BrandLogo variant="lime" height={24} />
                    <span className="site-phone__greeting">bora mexer, Ana?</span>
                  </div>
                  <div className="site-phone__checkin">
                    <span className="site-phone__check-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A1B57" strokeWidth="3">
                        <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>
                      <strong style={{ display: 'block', fontSize: 14 }}>Check-in feito</strong>
                      <span style={{ fontSize: 12, color: 'var(--movly-muted)' }}>Studio Centro · 12:05</span>
                    </span>
                  </div>
                  <div className="site-phone__list">
                    <span className="site-phone__list-title">Sua academia</span>
                    {[
                      { label: 'Musculação', note: 'incluso no plano', bg: 'var(--movly-gradient)' },
                      { label: 'Yoga', note: 'aulas da unidade', bg: 'var(--movly-lime)' },
                      { label: 'Funcional', note: 'seu jeito de treinar', bg: 'var(--movly-purple)' },
                    ].map((row) => (
                      <div key={row.label} className="site-phone__row">
                        <span className="site-phone__row-icon" style={{ background: row.bg }} />
                        <span>
                          <strong style={{ display: 'block', fontSize: 13 }}>{row.label}</strong>
                          <span style={{ fontSize: 11, color: 'var(--movly-muted)' }}>{row.note}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="site-phone__cta">fazer check-in</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
