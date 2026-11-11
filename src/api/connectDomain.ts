import { getJson } from './http';
import type { ConnectDomainPublic, ConnectPlan } from '../types/connectDomain';

export async function fetchConnectDomain(signal?: AbortSignal): Promise<ConnectDomainPublic> {
  return getJson<ConnectDomainPublic>('/shared/connect_domain.json', signal);
}

export async function fetchConnectPlans(signal?: AbortSignal): Promise<ConnectPlan[]> {
  const data = await fetchConnectDomain(signal);
  const plans = data.connectPlans ?? [];
  return [...plans].sort((a, b) => (a.tierIndex ?? 0) - (b.tierIndex ?? 0));
}

export function formatPlanPrice(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export type PlanCardTone = 'white' | 'soft' | 'purple' | 'deep';

export function planCardPresentation(
  index: number,
  total: number,
): { tone: PlanCardTone; featured: boolean } {
  if (total <= 0) return { tone: 'white', featured: false };
  const featuredIndex = Math.min(Math.floor(total / 2), total - 1);
  const featured = index === featuredIndex;
  if (featured) return { tone: 'purple', featured: true };
  if (index === 0) return { tone: 'white', featured: false };
  if (index === total - 1) return { tone: 'deep', featured: false };
  return { tone: 'soft', featured: false };
}
