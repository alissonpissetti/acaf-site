import { CheckIcon } from '../components/icons';
import { BrandLogo } from '../components/BrandLogo';

const BULLETS = [
  ['Só paga quem usa.', 'Colaborador sem check-in no mês não entra na fatura.'],
  ['Valor fixo, sem surpresa.', 'Fez 1 ou 100 check-ins, o valor por colaborador é o mesmo.'],
  ['Cadastro em minutos, gestão num portal só.', 'Convites, colaboradores ativos e faturas no mesmo lugar.'],
  ['Custo compartilhado.', 'A empresa banca uma parte; o colaborador escolhe e completa o próprio plano.'],
] as const;

export function CompaniesSection() {
  return (
    <section id="empresas" className="site-band">
      <div className="site-container site-split">
        <div className="site-split__copy">
          <span className="site-eyebrow">Para empresas</span>
          <h2 className="site-h2">benefício parado é dinheiro parado.</h2>
          <p className="site-lead">
            Muita empresa paga por benefício que ninguém usa. Na Movly, a empresa entra com uma parte, só por quem fez
            check-in no mês, e o colaborador completa com o plano que escolher.
          </p>
          <ul className="site-check-list">
            {BULLETS.map(([strong, rest]) => (
              <li key={strong}>
                <span className="site-check">
                  <CheckIcon />
                </span>
                <span>
                  <strong>{strong}</strong> {rest}
                </span>
              </li>
            ))}
          </ul>
          <div className="site-check-list__actions">
            <a className="site-btn site-btn--primary" href="#contato">
              Solicitar proposta
            </a>
            <a className="site-btn site-btn--outline-purple" href="#simulador">
              Simular custo
            </a>
          </div>
        </div>

        <div className="site-portal-mock" role="img" aria-label="Portal da empresa Movly">
          <div className="site-portal-mock__side">
            <BrandLogo variant="lime" height={27} />
            <span className="site-portal-mock__bar" style={{ width: 92 }} />
            <span className="site-portal-mock__bar site-portal-mock__bar--dim" />
            <span className="site-portal-mock__bar site-portal-mock__bar--dim" style={{ width: 84 }} />
          </div>
          <div className="site-portal-mock__main">
            <div className="site-portal-mock__stats">
              <div className="site-portal-mock__stat">
                <span style={{ fontSize: 12, color: 'var(--movly-muted)', fontWeight: 600 }}>Ativos no mês</span>
                <strong>84</strong>
              </div>
              <div className="site-portal-mock__stat site-portal-mock__stat--lime">
                <span>Fatura prevista</span>
                <strong>84 × valor</strong>
              </div>
            </div>
            <span className="site-h3" style={{ fontSize: 18 }}>
              colaboradores
            </span>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--movly-muted)' }}>…</p>
            <span className="site-btn site-btn--primary" style={{ alignSelf: 'flex-start', fontSize: 13, padding: '12px 18px' }}>
              + convidar colaboradores
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
