import { apiUrl } from '../config';

export { apiUrl };

export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function parseApiError(response: Response, fallback: string): Promise<string> {
  try {
    const err = (await response.json()) as { message?: string | string[] };
    if (Array.isArray(err.message)) return err.message.join(', ');
    if (typeof err.message === 'string' && err.message.trim()) return err.message;
  } catch {
    /* corpo não-JSON */
  }
  return fallback;
}

export type FetchApiOptions = RequestInit & {
  /** Padrão `json`; use `text` para JSON estático em string. */
  parse?: 'json' | 'text' | 'none';
};

/**
 * Fetch autenticado ou público contra a API (paths começando com `/api` ou `/shared`).
 */
export async function fetchApi<T>(path: string, options: FetchApiOptions = {}): Promise<T> {
  const { parse = 'json', headers, ...init } = options;
  const res = await fetch(apiUrl(path), {
    ...init,
    headers: {
      Accept: 'application/json',
      ...headers,
    },
  });

  if (!res.ok) {
    const msg = await parseApiError(res, `Erro ${res.status}`);
    throw new ApiError(msg, res.status);
  }

  if (parse === 'none' || res.status === 204) {
    return undefined as T;
  }
  if (parse === 'text') {
    return (await res.text()) as T;
  }
  return (await res.json()) as T;
}

export async function getJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  return fetchApi<T>(path, { method: 'GET', signal });
}

export async function postJson<TResponse, TBody = unknown>(
  path: string,
  body: TBody,
  signal?: AbortSignal,
): Promise<TResponse> {
  return fetchApi<TResponse>(path, {
    method: 'POST',
    signal,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}
