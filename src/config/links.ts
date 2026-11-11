const trimSlash = (url: string) => url.replace(/\/$/, '');

const CORPORATE_PRODUCTION = 'https://empresa.sejamovly.com';
const PARTNER_PRODUCTION = 'https://parceiro.sejamovly.com';
const CORPORATE_DEV = 'http://127.0.0.1:5177';
const PARTNER_DEV = 'http://127.0.0.1:5176';

export const corporateBase = trimSlash(
  import.meta.env.VITE_CORPORATE_URL ??
    (import.meta.env.DEV ? CORPORATE_DEV : CORPORATE_PRODUCTION),
);
export const partnerBase = trimSlash(
  import.meta.env.VITE_PARTNER_URL ?? (import.meta.env.DEV ? PARTNER_DEV : PARTNER_PRODUCTION),
);
export const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? 'tecnologia@sejamovly.com';

export const corporateLoginUrl = `${corporateBase}/login`;
export const corporateSignupUrl = `${corporateBase}/cadastro`;
export const partnerLoginUrl = `${partnerBase}/login`;
