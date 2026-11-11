import type { CSSProperties } from 'react';
import { brandLogoDimensions, BRAND_LOGO_SRC, type BrandLogoVariant } from './brandLogoPaths';

type BrandLogoProps = {
  height?: number;
  variant?: BrandLogoVariant;
  className?: string;
};

export function BrandLogo({ height = 37, variant = 'purple', className }: BrandLogoProps) {
  const src = BRAND_LOGO_SRC[variant];
  const dims = brandLogoDimensions(variant, height);
  const style: CSSProperties = { width: dims.width, height: dims.height, display: 'block' };

  return (
    <img
      className={className}
      src={src}
      alt="movly."
      width={dims.width}
      height={dims.height}
      decoding="async"
      style={style}
    />
  );
}
