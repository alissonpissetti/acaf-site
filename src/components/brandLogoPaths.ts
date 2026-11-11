export type BrandLogoVariant = 'lime' | 'purple' | 'white';

export const BRAND_LOGO_NATURAL: Record<BrandLogoVariant, { w: number; h: number }> = {
  lime: { w: 791, h: 386 },
  purple: { w: 813, h: 414 },
  white: { w: 791, h: 386 },
};

export const BRAND_LOGO_SRC: Record<BrandLogoVariant, string> = {
  lime: '/branding/movly-logo-lime-on-purple.png',
  purple: '/branding/movly-logo-purple-on-lime.png',
  white: '/branding/movly-logo-lime-on-purple.png',
};

export function brandLogoDimensions(variant: BrandLogoVariant, height: number) {
  const { w, h } = BRAND_LOGO_NATURAL[variant];
  return { width: Math.round((height * w) / h), height };
}
