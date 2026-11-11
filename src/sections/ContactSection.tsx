import { type FormEvent, useState } from 'react';
import { contactEmail } from '../config/links';

const PROFILE_OPTIONS = [
  'RH ou gestor de uma empresa',
  'Colaborador indicando minha empresa',
  'Dono(a) de academia ou estúdio',
] as const;

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nome = String(data.get('nome') ?? '');
    const email = String(data.get('email') ?? '');
    const perfil = String(data.get('perfil') ?? '');
    const org = String(data.get('empresa') ?? '');
    const tel = String(data.get('tel') ?? '');

    const subject = encodeURIComponent('Contato site Movly');
    const body = encodeURIComponent(
      `Perfil: ${perfil}\nNome: ${nome}\nE-mail: ${email}\nEmpresa/academia: ${org}\nWhatsApp: ${tel}`,
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contato" className="site-contact">
      <div className="site-contact__shell">
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
          <form className="site-contact__form" aria-label="Fale com a Movly" onSubmit={onSubmit}>
            <div className="site-field">
              <label htmlFor="f-perfil">Eu sou</label>
              <select id="f-perfil" name="perfil" defaultValue={PROFILE_OPTIONS[0]} required>
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
                <input id="f-nome" name="nome" type="text" autoComplete="name" required />
              </div>
              <div className="site-field">
                <label htmlFor="f-email">E-mail</label>
                <input id="f-email" name="email" type="email" autoComplete="email" required />
              </div>
            </div>
            <div className="site-field-row">
              <div className="site-field">
                <label htmlFor="f-empresa">Empresa ou academia</label>
                <input id="f-empresa" name="empresa" type="text" autoComplete="organization" />
              </div>
              <div className="site-field">
                <label htmlFor="f-tel">WhatsApp</label>
                <input id="f-tel" name="tel" type="tel" autoComplete="tel" />
              </div>
            </div>
            <button type="submit" className="site-btn site-btn--primary" style={{ marginTop: 6, border: 0 }}>
              Quero conversar
            </button>
            {sent ? (
              <p style={{ margin: 0, fontSize: 14, color: 'var(--movly-body)' }}>
                Se o seu cliente de e-mail não abriu, envie para {contactEmail}.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
