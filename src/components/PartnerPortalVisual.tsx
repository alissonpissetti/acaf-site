import { BrandLogo } from './BrandLogo';

export function PartnerPortalVisual() {
  return (
    <div
      className="site-portal-mock site-partner-portal"
      role="img"
      aria-label="Painel da academia Movly com check-ins validados e repasses visíveis"
    >
      <div className="site-portal-mock__side">
        <BrandLogo variant="lime" height={27} />
        <span className="site-portal-mock__bar" style={{ width: 92 }} />
        <span className="site-portal-mock__bar site-portal-mock__bar--dim" style={{ width: 76 }} />
        <span className="site-portal-mock__bar site-portal-mock__bar--dim" style={{ width: 84 }} />
      </div>
      <div className="site-portal-mock__main">
        <div className="site-portal-mock__stats">
          <div className="site-portal-mock__stat">
            <span style={{ fontSize: 12, color: 'var(--movly-muted)', fontWeight: 600 }}>Check-ins no mês</span>
            <strong>127</strong>
          </div>
          <div className="site-portal-mock__stat site-portal-mock__stat--lime">
            <span>Repasse previsto</span>
            <strong style={{ fontSize: 20 }}>linha a linha</strong>
          </div>
        </div>
        <span className="site-h3" style={{ fontSize: 18 }}>
          últimos check-ins
        </span>
        <ul className="site-partner-portal__feed" aria-hidden>
          <li>
            <span className="site-partner-portal__dot" />
            <span>
              <strong>Mariana L.</strong>
              <span>hoje · 07:42</span>
            </span>
          </li>
          <li>
            <span className="site-partner-portal__dot" />
            <span>
              <strong>Paulo R.</strong>
              <span>ontem · 18:15</span>
            </span>
          </li>
          <li>
            <span className="site-partner-portal__dot site-partner-portal__dot--dim" />
            <span>
              <strong>Equipe Corp X</strong>
              <span>ontem · 12:03</span>
            </span>
          </li>
        </ul>
        <span
          className="site-btn site-btn--primary"
          style={{ alignSelf: 'flex-start', fontSize: 13, padding: '12px 18px' }}
        >
          ver repasses no painel
        </span>
      </div>
    </div>
  );
}
