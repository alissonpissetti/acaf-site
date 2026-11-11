export function formatBrl(value: number): string {
  return `R$ ${Math.round(value).toLocaleString('pt-BR')}`;
}

export function formatInteger(value: number): string {
  return value.toLocaleString('pt-BR');
}
