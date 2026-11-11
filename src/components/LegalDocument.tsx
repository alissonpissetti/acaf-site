import type { LegalSection } from '../content/legalMeta';

type LegalDocumentProps = {
  title: string;
  intro: string[];
  sections: LegalSection[];
};

export function LegalDocument({ title, intro, sections }: LegalDocumentProps) {
  return (
    <article className="legal-doc">
      <header className="legal-doc__header">
        <h1 className="legal-doc__title">{title}</h1>
        {intro.map((p) => (
          <p key={p.slice(0, 48)} className="legal-doc__intro">
            {p}
          </p>
        ))}
      </header>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="legal-doc__section">
          <h2 className="legal-doc__h2">{section.title}</h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          {section.list?.length ? (
            <ul>
              {section.list.map((item) => (
                <li key={item.slice(0, 40)}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </article>
  );
}
