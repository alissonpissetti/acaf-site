export function RepasseStatCard() {
  return (
    <div
      className="site-hero-stat-card"
      role="img"
      aria-label="Repasse médio de cerca de oitenta por cento para a academia"
    >
      <div className="site-hero-stat-card__top">
        <span className="site-hero-stat-card__chip">Repasse para academias</span>
        <span className="site-hero-stat-card__meta">por check-in validado</span>
      </div>

      <div className="site-hero-stat-card__highlight">
        <span className="site-hero-stat-card__label">Repasse médio</span>
        <strong className="site-hero-stat-card__value">~80%</strong>
        <p className="site-hero-stat-card__lead">
          do valor pago (parte da empresa + plano do colaborador) fica com quem recebe o aluno na unidade.
        </p>
      </div>

      <div className="site-hero-stat-card__stats">
        <div className="site-hero-stat-card__stat">
          <span className="site-hero-stat-card__stat-label">Visibilidade</span>
          <strong>Repasses no painel</strong>
        </div>
        <div className="site-hero-stat-card__stat site-hero-stat-card__stat--accent">
          <span className="site-hero-stat-card__stat-label">Ecossistema</span>
          <strong>ACAF Brasil</strong>
        </div>
      </div>
    </div>
  );
}
