export type SiteAudience = 'alunos' | 'empresas' | 'academias';

export const SITE_AUDIENCE_LABELS: Record<SiteAudience, string> = {
  alunos: 'Alunos',
  empresas: 'Empresas',
  academias: 'Para academias',
};

export const SITE_AUDIENCES: SiteAudience[] = ['alunos', 'empresas', 'academias'];

export function parseAudienceParam(value: string | null): SiteAudience | null {
  if (value === 'academias' || value === 'empresas' || value === 'alunos') {
    return value;
  }
  return null;
}

export function audienceToQuery(audience: SiteAudience): string | null {
  if (audience === 'alunos') return null;
  return audience;
}
