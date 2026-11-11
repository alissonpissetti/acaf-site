const FEATURES = [
  ['Mais alunos, sem papelada', 'Colaboradores das empresas parceiras escolhem você no app e fazem check-in na hora.'],
  ['~80% de repasse médio', 'A maior parte do valor volta para quem recebe o aluno, pelos check-ins feitos na sua unidade.'],
  ['Repasse transparente', 'Check-ins e repasses visíveis para a academia, sem caixa-preta.'],
  ['ACAF Brasil ao seu lado', 'A ACAF Brasil garante os direitos dos donos de academia, para que o modelo seja saudável para todos.'],
] as const;

export function PartnersSection() {
  return (
    <section id="academias" className="site-container site-container--pad-lg">
      <div className="site-split">
        <div className="site-partners-visual">
          <div className="site-partners-visual__ring" aria-hidden />
          <div className="site-partners-visual__content">
            <span style={{ fontWeight: 700 }}>repasse médio</span>
            <span className="site-partners-visual__pct">~80%</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,2.2vw,26px)' }}>
              do valor fica com a sua academia
            </span>
            <img src="/branding/acaf_connect_lockup.png" alt="by ACAF Brasil" width={130} height={40} />
          </div>
        </div>
        <div className="site-split__copy">
          <span className="site-eyebrow">Para academias e estúdios</span>
          <h2 className="site-h2">sem academia, não existe movly.</h2>
          <p className="site-lead">
            É na academia que o movimento acontece. Por isso a Movly foi desenhada a partir dela: quem recebe o aluno
            todo dia é o centro do modelo, não um fornecedor no fim da fila.
          </p>
          <p className="site-lead">
            Na prática, o dinheiro fica onde o treino acontece: em média, <strong>~80% do que é pago</strong> (parte da
            empresa + plano do aluno) é repassado à academia.
          </p>
          <div className="site-feature-grid">
            {FEATURES.map(([title, text]) => (
              <div key={title} className="site-feature">
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
          <div className="site-check-list__actions">
            <a className="site-btn site-btn--primary" href="#contato">
              Quero credenciar minha academia
            </a>
            <a className="site-btn site-btn--outline-purple" href="#contato">
              Indicar minha academia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
