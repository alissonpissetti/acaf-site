import type { SiteAudience } from '../audience/types';

export type HeroContent = {
  pill: string;
  title: string;
  text: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  acafNote: string;
};

export const HERO_BY_AUDIENCE: Record<SiteAudience, HeroContent> = {
  alunos: {
    pill: 'Para quem treina',
    title: 'a vida acontece quando você se move.',
    text:
      'Sua empresa pode ajudar a pagar: você escolhe o plano, define a academia preferida e treina com check-in pelo app, no seu ritmo.',
    primaryCta: { label: 'Ver planos e como funciona', href: '#colaboradores' },
    secondaryCta: { label: 'Minha empresa ainda não oferece', href: '#contato' },
    acafNote: 'Benefício corporativo em parceria com a ACAF Brasil.',
  },
  empresas: {
    pill: 'Para empresas',
    title: 'benefício parado é dinheiro parado.',
    text:
      'Na Movly o colaborador escolhe academia e plano; a empresa paga só por quem fez check-in no mês. Portal com convites, time ativo e faturas.',
    primaryCta: { label: 'Quero para minha empresa', href: '#empresas' },
    secondaryCta: { label: 'Simular custo da empresa', href: '#simulador' },
    acafNote: 'Modelo pensado para RH, em parceria com a ACAF Brasil.',
  },
  academias: {
    pill: 'Para academias e estúdios',
    title: 'sem academia, não existe movly.',
    text:
      'Colaboradores das empresas parceiras escolhem sua unidade e fazem check-in no app. Em média, ~80% do valor pago volta para quem recebe o aluno na unidade.',
    primaryCta: { label: 'Quero credenciar minha academia', href: '#contato' },
    secondaryCta: { label: 'Ver o modelo de repasse', href: '#academias' },
    acafNote: 'Credenciamento e direitos garantidos pela ACAF Brasil.',
  },
};
