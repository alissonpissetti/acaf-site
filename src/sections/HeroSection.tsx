import { ArrowRightIcon } from '../components/icons';
import { BrandLogo } from '../components/BrandLogo';
import { HeroRepasseVisual } from '../components/HeroRepasseVisual';
import { SITE_AUDIENCE_LABELS, SITE_AUDIENCES } from '../audience/types';
import { HERO_BY_AUDIENCE } from '../content/heroByAudience';
import { useSiteAudience } from '../context/SiteAudienceContext';

function HeroPhoneMock() {
  return (
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
  );
}

export function HeroSection() {
  const { audience, setAudience } = useSiteAudience();
  const copy = HERO_BY_AUDIENCE[audience];

  return (
    <section id="topo" className="site-hero">
      <div className="site-hero__shell movly-grain">
        <div className="site-hero__ring--sky" aria-hidden />
        <div className="site-hero__ring--lime" aria-hidden />
        <div className="site-hero__grid">
          <div className="site-hero__copy">
            <div className="site-audience-tabs" role="tablist" aria-label="Escolha quem está visitando o site">
              {SITE_AUDIENCES.map((id) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={audience === id}
                  id={`site-audience-tab-${id}`}
                  className="site-audience-tabs__btn"
                  onClick={() => setAudience(id)}
                >
                  {SITE_AUDIENCE_LABELS[id]}
                </button>
              ))}
            </div>
            <span className="site-hero__pill">{copy.pill}</span>
            <h1 className="site-h1 site-hero__title">{copy.title}</h1>
            <p className="site-hero__text">{copy.text}</p>
            <div className="site-hero__cta">
              <a className="site-btn site-btn--lime" href={copy.primaryCta.href}>
                {copy.primaryCta.label}
                <ArrowRightIcon />
              </a>
              {copy.secondaryCta ? (
                <a className="site-btn site-btn--outline-white" href={copy.secondaryCta.href}>
                  {copy.secondaryCta.label}
                </a>
              ) : null}
            </div>
            <p className="site-hero__acaf">{copy.acafNote}</p>
          </div>

          {audience === 'academias' ? <HeroRepasseVisual /> : <HeroPhoneMock />}
        </div>
      </div>
    </section>
  );
}
