/**
 * URL base da API (sem barra final).
 * - Produção: vazio = mesmo host com proxy nginx (`/api`, `/shared`)
 * - Ou `public/api-config.js` → `window.__CONNECT_API_URL__`
 * - Dev: `VITE_API_URL` ou proxy Vite
 */
export function readApiUrl(): string {
  if (typeof window !== 'undefined' && window.__CONNECT_API_URL__) {
    return String(window.__CONNECT_API_URL__).replace(/\/$/, '');
  }
  const fromEnv = import.meta.env.VITE_API_URL ?? import.meta.env.VITE_API_BASE_URL ?? '';
  return String(fromEnv).replace(/\/$/, '');
}

export function apiUrl(path: string): string {
  const base = readApiUrl();
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return base ? `${base}${normalized}` : normalized;
}
