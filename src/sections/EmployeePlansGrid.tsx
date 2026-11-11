import { useEffect, useState } from 'react';
import { fetchConnectPlans, formatPlanPrice, planCardPresentation } from '../api/connectDomain';
import type { ConnectPlan } from '../types/connectDomain';

function PlanSkeleton() {
  return (
    <div className="site-plans-showcase" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="site-plan site-plan--skeleton" />
      ))}
    </div>
  );
}

export function EmployeePlansGrid() {
  const [plans, setPlans] = useState<ConnectPlan[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchConnectPlans(controller.signal)
      .then(setPlans)
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setError(err instanceof Error ? err.message : 'Não foi possível carregar os planos.');
      });
    return () => controller.abort();
  }, []);

  if (error) {
    return (
      <p className="site-plans-message" role="status">
        {error}
      </p>
    );
  }

  if (!plans) {
    return (
      <>
        <p className="site-plans-message" aria-live="polite">
          Carregando planos…
        </p>
        <PlanSkeleton />
      </>
    );
  }

  if (plans.length === 0) {
    return <p className="site-plans-message">Nenhum plano publicado no momento.</p>;
  }

  const total = plans.length;

  return (
    <div className="site-plans-showcase" role="list" aria-label="Planos disponíveis">
      {plans.map((plan, index) => {
        const { tone, featured } = planCardPresentation(index, total);
        return (
          <article
            key={plan.id}
            role="listitem"
            className={[
              'site-plan',
              `site-plan--${tone}`,
              featured ? 'site-plan--featured' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {featured ? <span className="site-plan__badge">mais escolhido</span> : null}
            <h4 className="site-plan__name">{plan.name}</h4>
            <p className="site-plan__price">
              <span className="site-plan__amount">{formatPlanPrice(plan.pricePerMonth)}</span>
              <span className="site-plan__period">por mês</span>
            </p>
            {plan.description ? <p className="site-plan__desc">{plan.description}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
