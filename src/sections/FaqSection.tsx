import { useState } from 'react';
import { FAQ_BY_TAB, FAQ_TAB_LABELS, type FaqTab } from '../data/faq';
import { FaqPlusIcon } from '../components/icons';

const TABS: FaqTab[] = ['emp', 'col', 'aca'];

type FaqSectionProps = {
  defaultTab?: FaqTab;
};

export function FaqSection({ defaultTab = 'col' }: FaqSectionProps) {
  const [tab, setTab] = useState<FaqTab>(defaultTab);
  const items = FAQ_BY_TAB[tab];

  return (
    <section id="duvidas" className="site-container site-container--pad-lg site-faq">
      <div className="site-section-head site-section-head--compact">
        <span className="site-eyebrow">Dúvidas</span>
        <h2 className="site-h2">perguntas que todo mundo faz.</h2>
      </div>
      <div className="site-faq-tabs" role="group" aria-label="Escolha o público">
        {TABS.map((id) => (
          <button
            key={id}
            type="button"
            aria-pressed={tab === id}
            onClick={() => setTab(id)}
          >
            {FAQ_TAB_LABELS[id]}
          </button>
        ))}
      </div>
      <div className="site-faq-list">
        {items.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <FaqPlusIcon />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
