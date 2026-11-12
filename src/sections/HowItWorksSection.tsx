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
    title: 'Você escolhe seu plano, com o desconto da sua empresa',
    text: 'O convite chega pela sua empresa. Você ativa no app e paga só a diferença do plano que escolher.',
  },
  {
    n: '3',
    tone: 'lime' as const,
    title: 'Faz check-in na sua academia',
    text: 'Chegou na unidade, abriu o app e confirmou. Sem papelada, no seu ritmo.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="site-container site-container--pad">
      <div className="site-section-head">
        <span className="site-eyebrow">Como funciona</span>
        <h2 className="site-h2">movly em 3 passos.</h2>
        <p className="site-lead">
          Sua empresa oferece, você escolhe o plano e treina na academia preferida. Sem burocracia, no seu ritmo.
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
