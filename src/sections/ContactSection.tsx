import { type FormEvent, useRef, useState } from 'react';
import { fetchApi } from '../api/http';
import { formatPhoneInput, isValidBrazilMobilePhone, normalizePhone } from '../utils/phoneInput';

const PROFILE_OPTIONS = [
  'RH ou gestor de uma empresa',
  'Colaborador indicando minha empresa',
  'Dono(a) de academia ou estúdio',
  'Quero ser colaborador (beneficiário)',
] as const;

type SiteContactResponse = {
  ok: boolean;
  leadId?: string | null;
  message?: string;
};

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const digits = normalizePhone(phone);
    if (digits.length > 0 && !isValidBrazilMobilePhone(phone)) {
      setError('Se informar WhatsApp, use o formato (11) 99999-9999.');
      return;
    }

    setLoading(true);

    const form = formRef.current ?? event.currentTarget;
    const data = new FormData(form);
    const profile = String(data.get('perfil') ?? '');
    const name = String(data.get('nome') ?? '');
    const email = String(data.get('email') ?? '');
    const organization = String(data.get('empresa') ?? '');

    const headers: Record<string, string> = {};
    const leadSecret = import.meta.env.VITE_SITE_LEAD_SECRET?.trim();
    if (leadSecret) {
      headers['x-site-lead-secret'] = leadSecret;
    }

    try {
      const response = await fetchApi<SiteContactResponse>('/api/public/site/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify({
          profile,
          name,
          email,
          organization: organization || undefined,
          phone: digits || undefined,
          botField: String(data.get('botField') ?? ''),
        }),
      });
      if (!response.leadId) {
        throw new Error('Não foi possível registrar seu contato. Tente novamente.');
      }
      setPhone('');
      form.reset();
      setSent(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Não foi possível enviar. Tente de novo.';
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="site-contact">
      <div className="site-contact__shell movly-grain">
        <div className="site-contact__ring" aria-hidden />
        <div className="site-contact__grid">
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h2 className="site-h2" style={{ fontSize: 'clamp(34px,4.4vw,60px)' }}>
              bora conversar?
            </h2>
            <p className="site-lead" style={{ maxWidth: 460 }}>
              Conta um pouco sobre você e a gente volta com o próximo passo. Vale para empresas, colaboradores e
              academias.
            </p>
          </div>
          <form
            ref={formRef}
            className="site-contact__form"
            aria-label="Fale com a Movly"
            onSubmit={onSubmit}
          >
            <div className="site-field site-field--hp" aria-hidden>
              <label htmlFor="f-hp">Deixe em branco</label>
              <input
                id="f-hp"
                name="botField"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />
            </div>
            <div className="site-field">
              <label htmlFor="f-perfil">Eu sou</label>
              <select id="f-perfil" name="perfil" defaultValue={PROFILE_OPTIONS[0]} required disabled={sent}>
                {PROFILE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="site-field-row">
              <div className="site-field">
                <label htmlFor="f-nome">Nome</label>
                <input id="f-nome" name="nome" type="text" autoComplete="name" required disabled={sent} />
              </div>
              <div className="site-field">
                <label htmlFor="f-email">E-mail</label>
                <input id="f-email" name="email" type="email" autoComplete="email" required disabled={sent} />
              </div>
            </div>
            <div className="site-field-row">
              <div className="site-field">
                <label htmlFor="f-empresa">Empresa ou academia</label>
                <input
                  id="f-empresa"
                  name="empresa"
                  type="text"
                  autoComplete="organization"
                  disabled={sent}
                />
              </div>
              <div className="site-field">
                <label htmlFor="f-tel">WhatsApp (opcional)</label>
                <input
                  id="f-tel"
                  name="tel"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(event) => setPhone(formatPhoneInput(event.target.value))}
                  disabled={sent}
                />
              </div>
            </div>
            <button
              type="submit"
              className="site-btn site-btn--primary"
              style={{ marginTop: 6, border: 0 }}
              disabled={loading || sent}
            >
              {loading ? 'Enviando…' : sent ? 'Mensagem enviada' : 'Quero conversar'}
            </button>
            {sent ? (
              <p style={{ margin: 0, fontSize: 14, color: 'var(--movly-body)' }}>
                Recebemos seu contato. A equipe comercial retorna em breve.
              </p>
            ) : null}
            {error && !sent ? (
              <p role="alert" style={{ margin: 0, fontSize: 14, color: 'var(--movly-coral, #c44)' }}>
                {error}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
