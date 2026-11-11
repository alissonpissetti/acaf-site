/**
 * Prioridade: wordmark roxa em fundos claros (SVG oficial).
 * Em fundos roxos/escuros: limão ou branco (SVG), não o lockup gradiente.
 */
export type BrandLogoVariant = 'purple' | 'lime' | 'white';

/** Proporção do viewBox dos SVG movly-logo-*.svg */
export const BRAND_LOGO_NATURAL: Record<BrandLogoVariant, { w: number; h: number }> = {
  purple: { w: 127, h: 37 },
  lime: { w: 127, h: 37 },
  white: { w: 127, h: 37 },
};

export const BRAND_LOGO_SRC: Record<BrandLogoVariant, string> = {
  purple: '/branding/movly-logo-purple.svg',
  lime: '/branding/movly-logo-lime.svg',
  white: '/branding/movly-logo-white.svg',
};

export function brandLogoDimensions(variant: BrandLogoVariant, height: number) {
  const { w, h } = BRAND_LOGO_NATURAL[variant];
  return { width: Math.round((height * w) / h), height };
}
