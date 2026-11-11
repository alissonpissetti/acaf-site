const STEPS = [
  {
    n: '1',
    tone: 'purple' as const,
    title: 'Sua empresa entra na Movly',
    text: 'O RH fecha o contrato, define quanto a empresa investe por colaborador e cadastra o time no portal.',
  },
  {
    n: '2',
    tone: 'gradient' as const,
    title: 'Você ativa no app e escolhe seu plano',
    text: 'O convite chega pela sua empresa. Você escolhe o plano e completa a diferença, se houver.',
  },
  {
    n: '3',
    tone: 'lime' as const,
    title: 'Escolhe onde treinar e faz check-in',
    text: 'Academia, estúdio ou aula da rede. Hoje musculação, amanhã yoga. Pode.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="site-container site-container--pad">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 720, marginBottom: 48 }}>
        <span className="site-eyebrow">Como funciona</span>
        <h2 className="site-h2">movly em 3 passos.</h2>
        <p className="site-lead">
          Sua empresa oferece, você escolhe onde e quando treinar. Sem burocracia, sem culpa, no seu ritmo.
        </p>
      </div>
      <div className="site-steps">
        {STEPS.map((step) => (
          <div key={step.n} className={`site-step site-step--${step.tone}`}>
            <span className="site-step__num">{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
