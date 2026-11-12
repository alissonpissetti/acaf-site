import type { CSSProperties } from 'react';
import { brandLogoDimensions, BRAND_LOGO_SRC, type BrandLogoVariant } from './brandLogoPaths';
import './BrandLogo.css';

export type { BrandLogoVariant };

type BrandLogoProps = {
  height?: number;
  variant?: BrandLogoVariant;
  className?: string;
  /** Sem width/height inline — use CSS (ex.: hero full-bleed). */
  noFixedDimensions?: boolean;
};

/**
 * Lockup oficial (movly. + by ACAF Brasil) — raster do manual `movly-by-acaf.app.pdf`.
 */
export function BrandLogo({
  height = 37,
  variant = 'purple',
  className,
  noFixedDimensions = false,
}: BrandLogoProps) {
  const src = BRAND_LOGO_SRC[variant];
  const dims = brandLogoDimensions(variant, height);
  const style: CSSProperties | undefined = noFixedDimensions
    ? undefined
    : { width: dims.width, height: dims.height };

  const classes = ['brand-logo', 'brand-logo--img', `brand-logo--${variant}`, className].filter(Boolean).join(' ');

  return (
    <span className={classes} role="img" aria-label="movly. by ACAF Brasil" style={style}>
      <img className="brand-logo-img" src={src} alt="" width={dims.width} height={dims.height} decoding="async" />
    </span>
  );
}
