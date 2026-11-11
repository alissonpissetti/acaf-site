import { useMemo, useState } from 'react';
import { formatBrl, formatInteger, formatPercentOf } from '../lib/format';

/** Exemplo padrão: ~30 vidas, ~60% de uso, parte empresa ~R$ 49 (caso real de referência). */
const DEFAULT_TOTAL = 30;
const DEFAULT_PCT = 60;
const DEFAULT_VALOR = 49;

export function SimulatorSection() {
  const [total, setTotal] = useState(DEFAULT_TOTAL);
  const [pct, setPct] = useState(DEFAULT_PCT);
  const [valor, setValor] = useState(DEFAULT_VALOR);

  const { ativos, fatura, tradicional, economia, economiaAnual } = useMemo(() => {
    const activeCount = Math.max(0, Math.round((total * pct) / 100));
    const bill = activeCount * valor;
    const traditional = total * valor;
    const savings = traditional - bill;
    return {
      ativos: activeCount,
      fatura: bill,
      tradicional: traditional,
      economia: savings,
      economiaAnual: savings * 12,
    };
  }, [total, pct, valor]);

  const economiaPercentLabel = formatPercentOf(economia, tradicional);

  return (
    <section id="simulador" className="site-container site-container--pad-lg">
      <div className="site-simulator">
        <div className="site-simulator__ring" aria-hidden />
        <div className="site-simulator__controls">
          <div>
            <span className="site-eyebrow site-eyebrow--lime">Simulador</span>
            <h2 className="site-h2" style={{ color: '#fff', marginTop: 12 }}>
              quanto a sua empresa investiria?
            </h2>
            <p style={{ margin: '12px 0 0', color: 'rgba(255,255,255,0.85)', fontSize: 17 }}>
              No modelo tradicional, a empresa paga por todas as vidas cadastradas — mesmo quem não treina. Na Movly, a
              conta é variável a cada mês: a empresa só paga quando os colaboradores fazem check-in na academia.
            </p>
          </div>
          <div className="site-range">
            <label htmlFor="sim-total">
              <span>Colaboradores cadastrados no benefício</span>
              <span>{formatInteger(total)}</span>
            </label>
            <input
              id="sim-total"
              type="range"
              min={10}
              max={2000}
              step={5}
              value={total}
              onChange={(e) => setTotal(Number(e.target.value))}
            />
          </div>
          <div className="site-range">
            <label htmlFor="sim-pct">
              <span>Quantos fizeram check-in na academia no mês</span>
              <span>{pct}%</span>
            </label>
            <input
              id="sim-pct"
              type="range"
              min={5}
              max={100}
              step={5}
              value={pct}
              onChange={(e) => setPct(Number(e.target.value))}
            />
          </div>
          <div className="site-range">
            <label htmlFor="sim-valor">
              <span>Parte da empresa por colaborador ativo</span>
              <span>{formatBrl(valor)}</span>
            </label>
            <input
              id="sim-valor"
              type="range"
              min={30}
              max={80}
              step={1}
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="site-simulator__results">
          <div className="site-simulator__highlight">
            <span style={{ fontWeight: 700 }}>Na Movly · fatura variável do mês</span>
            <strong>{formatBrl(fatura)}</strong>
            <span style={{ fontSize: 15 }}>
              {formatInteger(ativos)} colaboradores com check-in × {formatBrl(valor)} (parte da empresa)
            </span>
          </div>
          <div className="site-simulator__compare">
            <span style={{ fontWeight: 600, display: 'block' }}>Modelo tradicional · todas as vidas cadastradas</span>
            <span className="site-simulator__compare-price">{formatBrl(tradicional)}</span>
            <span style={{ display: 'block', marginTop: 8, fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
              {formatInteger(total)} cadastrados × {formatBrl(valor)}, usem ou não o benefício
            </span>
          </div>
          <div className="site-simulator__savings">
            <p style={{ margin: 0, fontSize: 22, lineHeight: 1.35 }}>
              <strong style={{ color: 'var(--movly-lime)', fontSize: 'clamp(28px, 3.2vw, 36px)' }}>
                {economiaPercentLabel}
              </strong>{' '}
              a menos que o modelo tradicional, todo mês
            </p>
            <p style={{ margin: '10px 0 0', fontSize: 17 }}>
              Isso dá{' '}
              <strong style={{ color: 'var(--movly-lime)' }}>{formatBrl(economia)}</strong> por mês e{' '}
              <strong style={{ color: 'var(--movly-lime)' }}>{formatBrl(economiaAnual)}</strong> em um ano na parte da
              empresa — só por pagar quem fez check-in, não todas as vidas cadastradas.
            </p>
          </div>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
            Simulação da parte da empresa. Não inclui o plano que o colaborador escolhe na academia preferida.
          </p>
        </div>
      </div>
    </section>
  );
}
