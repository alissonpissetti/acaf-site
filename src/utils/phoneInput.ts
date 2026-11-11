export function normalizePhone(value: string): string {
  return String(value ?? '').replace(/\D/g, '').slice(0, 11);
}

/** Celular (11) ou fixo (10), máscara BR. */
export function formatPhoneInput(value: string): string {
  const digits = normalizePhone(value);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function isValidBrazilMobilePhone(value: string): boolean {
  const digits = normalizePhone(value);
  return digits.length === 11 && digits[2] === '9';
}
