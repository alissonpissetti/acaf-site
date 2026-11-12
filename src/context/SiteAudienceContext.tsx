import { createContext, useCallback, useContext, useMemo, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  audienceToQuery,
  parseAudienceParam,
  type SiteAudience,
} from '../audience/types';

type SiteAudienceContextValue = {
  audience: SiteAudience;
  setAudience: (next: SiteAudience) => void;
  homePath: string;
};

const SiteAudienceContext = createContext<SiteAudienceContextValue | null>(null);

function buildHomePath(audience: SiteAudience): string {
  const para = audienceToQuery(audience);
  return para ? `/?para=${para}` : '/';
}

export function SiteAudienceProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const fromUrl = parseAudienceParam(searchParams.get('para'));
  const audience: SiteAudience = fromUrl ?? 'alunos';

  const setAudience = useCallback(
    (next: SiteAudience) => {
      const para = audienceToQuery(next);
      const nextParams = new URLSearchParams(searchParams);
      if (para) {
        nextParams.set('para', para);
      } else {
        nextParams.delete('para');
      }
      setSearchParams(nextParams, { replace: true });
      window.setTimeout(() => {
        const topo = document.getElementById('topo');
        if (topo) {
          topo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    },
    [searchParams, setSearchParams],
  );

  const value = useMemo(
    () => ({
      audience,
      setAudience,
      homePath: buildHomePath(audience),
    }),
    [audience, setAudience],
  );

  return <SiteAudienceContext.Provider value={value}>{children}</SiteAudienceContext.Provider>;
}

export function useSiteAudience(): SiteAudienceContextValue {
  const ctx = useContext(SiteAudienceContext);
  if (!ctx) {
    throw new Error('useSiteAudience must be used within SiteAudienceProvider');
  }
  return ctx;
}
