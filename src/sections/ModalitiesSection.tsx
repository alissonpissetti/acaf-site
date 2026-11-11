const MODALITIES = ['musculação', 'yoga', 'pilates', 'dança', 'luta', 'funcional'] as const;

export function ModalitiesSection() {
  return (
    <section className="site-container site-modalities" aria-label="Modalidades">
      <strong>Vale:</strong>
      {MODALITIES.map((m) => (
        <span key={m} className="site-chip">
          {m}
        </span>
      ))}
      <span className="site-chip site-chip--lime">e o seu jeito</span>
    </section>
  );
}
