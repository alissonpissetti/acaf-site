/** Dados institucionais para documentos legais (site, App Store, Play Console). */
export const MOVLY_LEGAL = {
  productName: 'Movly',
  legalName: 'A L M LTDA',
  cnpj: '68.679.868/0001-01',
  contactEmail: 'tecnologia@sejamovly.com',
  privacyEmail: 'tecnologia@sejamovly.com',
  website: 'https://sejamovly.com',
  effectiveDateLabel: '11 de novembro de 2026',
} as const;

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};
