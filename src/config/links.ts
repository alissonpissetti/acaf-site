const trimSlash = (url: string) => url.replace(/\/$/, '');

export const corporateBase = trimSlash(
  import.meta.env.VITE_CORPORATE_URL ?? 'http://127.0.0.1:5177',
);
export const partnerBase = trimSlash(import.meta.env.VITE_PARTNER_URL ?? 'http://127.0.0.1:5176');
export const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? 'tecnologia@sejamovly.com';

export const corporateLoginUrl = `${corporateBase}/login`;
export const corporateSignupUrl = `${corporateBase}/cadastro`;
export const partnerLoginUrl = `${partnerBase}/login`;
