import { useMemo, useState } from 'react';
import { formatBrl, formatInteger } from '../lib/format';

export function SimulatorSection() {
  const [total, setTotal] = useState(200);
  const [pct, setPct] = useState(40);
  const [valor, setValor] = useState(45);

  const { ativos, fatura, tradicional, economia } = useMemo(() => {
    const activeCount = Math.max(0, Math.round((total * pct) / 100));
    const bill = activeCount * valor;
    const traditional = total * valor;
    return {
      ativos: activeCount,
      fatura: bill,
      tradicional: traditional,
      economia: traditional - bill,
    };
  }, [total, pct, valor]);

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
              Mexa nos números e veja a parte da empresa quando ela paga só por quem usa, em vez de pagar por todos.
            </p>
          </div>
          <div className="site-range">
            <label htmlFor="sim-total">
              <span>Colaboradores na empresa</span>
              <span>{formatInteger(total)}</span>
            </label>
            <input
              id="sim-total"
              type="range"
              min={10}
              max={2000}
              step={10}
              value={total}
              onChange={(e) => setTotal(Number(e.target.value))}
            />
          </div>
          <div className="site-range">
            <label htmlFor="sim-pct">
              <span>Quantos fazem check-in no mês</span>
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
              max={60}
              step={1}
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="site-simulator__results">
          <div className="site-simulator__highlight">
            <span style={{ fontWeight: 700 }}>Investimento da empresa no mês</span>
            <strong>{formatBrl(fatura)}</strong>
            <span style={{ fontSize: 15 }}>
              {formatInteger(ativos)} ativos × {formatBrl(valor)}
            </span>
          </div>
          <div className="site-simulator__compare">
            <span style={{ fontWeight: 600, display: 'block' }}>Se pagasse por todos</span>
            <span>{formatBrl(tradicional)}</span>
          </div>
          <p style={{ margin: 0, fontSize: 17 }}>
            <strong style={{ color: 'var(--movly-lime)' }}>{formatBrl(economia)}</strong> que deixam de virar custo
            parado, todo mês.
          </p>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
            Não inclui o plano que cada colaborador escolhe e paga por conta própria.
          </p>
        </div>
      </div>
    </section>
  );
}
