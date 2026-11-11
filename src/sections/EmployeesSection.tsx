const CARDS = [
  {
    title: 'Uma rede, vários lugares',
    text: 'Academias, estúdios e aulas perto de casa ou do trabalho.',
  },
  {
    title: 'Troca quando quiser',
    text: 'Musculação de manhã, yoga na quarta, dança na sexta.',
  },
  {
    title: 'Check-in pelo app',
    text: 'Chegou, abriu o app, entrou. Sem papelada.',
  },
  {
    title: 'A empresa ajuda a pagar',
    text: 'Sua empresa entra com uma parte. Você escolhe o plano e completa o resto.',
  },
] as const;

const PLANS = [
  { name: 'Plano básico', tone: 'white' as const, note: 'Rede regional · modalidades essenciais' },
  { name: 'Plano completo', tone: 'purple' as const, note: 'Rede ampliada · mais estúdios' },
  { name: 'Plano premium', tone: 'deep' as const, note: 'Máxima cobertura · a definir com RH' },
];

export function EmployeesSection() {
  return (
    <section id="colaboradores" className="site-employees">
      <div className="site-employees__shell">
        <div className="site-employees__ring" aria-hidden />
        <div className="site-employees__inner">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 760 }}>
            <span className="site-eyebrow site-eyebrow--deep">Para colaboradores</span>
            <h2 className="site-h2 site-employees__title">
              não precisa amar academia. só precisa achar o seu jeito.
            </h2>
            <p className="site-lead" style={{ color: 'var(--movly-purple-deep)' }}>
              Tem gente que ama puxar ferro. Tem gente que prefere dançar, lutar ou alongar. Na Movly, o seu jeito de se
              mexer muda quando você quiser.
            </p>
          </div>
          <div className="site-card-grid">
            {CARDS.map((card) => (
              <div key={card.title} className="site-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
          <div id="planos">
            <h3 className="site-h3" style={{ color: 'var(--movly-purple-deep)', marginBottom: 8 }}>
              escolha o seu plano.
            </h3>
            <p style={{ margin: '0 0 20px', fontSize: 17, color: 'var(--movly-purple-deep)' }}>
              A parte da empresa já vem descontada. Você paga só a diferença do plano que escolher. Os valores finais
              dependem do que cada empresa investe.
            </p>
            <div className="site-plan-grid">
              {PLANS.map((plan) => (
                <div key={plan.name} className={`site-plan site-plan--${plan.tone}`}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20 }}>{plan.name}</span>
                  <span className="site-plan__price">
                    R$ —<small>/mês</small>
                  </span>
                  <span style={{ fontSize: 15 }}>{plan.note}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
            <a className="site-btn site-btn--primary" href="#contato">
              Indicar a Movly para o meu RH
            </a>
            <span style={{ color: 'var(--movly-purple-deep)', fontWeight: 600 }}>
              Sua empresa ainda não tem? Manda pra quem decide.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
