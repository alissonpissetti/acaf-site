const CARDS = [
  {
    title: 'Sua academia preferida',
    text: 'Você define a unidade onde treina e mantém seu vínculo com ela.',
  },
  {
    title: 'Seu jeito de treinar',
    text: 'Musculação, aulas e modalidades conforme o plano e o que a unidade oferece.',
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

import { EmployeePlansGrid } from './EmployeePlansGrid';

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
              Tem gente que ama puxar ferro. Tem gente que prefere dançar, lutar ou alongar. Na Movly, você encaixa o
              plano na sua academia preferida e treina do seu jeito.
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
          <div id="planos" className="site-plans-section">
            <h3 className="site-h3 site-plans-section__title">escolha o seu plano.</h3>
            <p className="site-plans-section__lead">
              Planos e valores vêm do mesmo cadastro do app. A parte da empresa já vem descontada — você paga só a
              diferença do plano que escolher (incluindo a academia preferida).
            </p>
            <EmployeePlansGrid />
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
