export function formatBrl(value: number): string {
  return `R$ ${Math.round(value).toLocaleString('pt-BR')}`;
}

export function formatInteger(value: number): string {
  return value.toLocaleString('pt-BR');
}

export function formatPercentOf(value: number, total: number): string {
  if (total <= 0) return '0%';
  const pct = (value / total) * 100;
  return `${pct.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%`;
}
