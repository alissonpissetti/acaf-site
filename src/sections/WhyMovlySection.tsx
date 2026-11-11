const CARDS = [
  {
    tag: 'sempre por uso',
    tone: 'glass' as const,
    title: 'Cobrança só de quem fez check-in',
    text: 'Nada de pagar por licença esquecida. Não usou no mês, não paga.',
  },
  {
    tag: 'sempre compartilhado',
    tone: 'glass' as const,
    title: 'Empresa + colaborador',
    text: 'O RH entra com um valor fixo por quem usa; o colaborador escolhe o plano e completa a diferença.',
  },
  {
    tag: 'repasse justo',
    tone: 'lime' as const,
    title: '~80% fica com a academia',
    text: 'Em média, a maior parte do valor vai para quem recebe o aluno. Academia valorizada é rede forte.',
  },
  {
    tag: 'academia no centro',
    tone: 'glass' as const,
    title: 'Sem academia, não existe agregador',
    text: 'A academia é o pivô de tudo. Por isso a ACAF Brasil garante os direitos dos donos de academia, para que o modelo seja saudável para todos.',
  },
];

export function WhyMovlySection() {
  return (
    <section id="modelo" className="site-why">
      <div className="site-why__ring" aria-hidden />
      <div className="site-container">
        <h2 className="site-h2 site-why__title">por que a movly é diferente.</h2>
        <div className="site-why-grid">
          {CARDS.map((card) => (
            <div key={card.title} className={`site-why-card site-why-card--${card.tone}`}>
              <span className="site-why-card__tag">{card.tag}</span>
              <h3>{card.title}</h3>
              <p style={{ margin: 0 }}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
