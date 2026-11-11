export type FaqTab = 'emp' | 'col' | 'aca';

export type FaqItem = { question: string; answer: string };

export const FAQ_BY_TAB: Record<FaqTab, FaqItem[]> = {
  emp: [
    {
      question: 'Como a cobrança funciona?',
      answer:
        'A empresa paga um valor fixo por colaborador que fez pelo menos um check-in no mês; quem não usou não entra na fatura. O colaborador completa com o plano que escolher. A fatura da empresa é mensal e recorrente, com histórico no portal.',
    },
    {
      question: 'O valor muda se a pessoa treinar muito?',
      answer: 'Não. Um check-in ou cem, a parte da empresa por colaborador ativo no mês é a mesma.',
    },
    {
      question: 'Como cadastro meus colaboradores?',
      answer:
        'Pelo portal da empresa: você cadastra o time e envia os convites. Cada pessoa ativa o acesso no app.',
    },
    {
      question: 'Existe um número mínimo de colaboradores?',
      answer: 'Fale com a gente pelo formulário — definimos o melhor formato para o tamanho da sua empresa.',
    },
    {
      question: 'Consigo ver as faturas anteriores?',
      answer: 'Sim. O histórico de faturas fica no portal para consulta a qualquer momento.',
    },
  ],
  col: [
    {
      question: 'Quem pode usar?',
      answer: 'Colaboradores das empresas parceiras da Movly.',
    },
    {
      question: 'Quanto eu pago?',
      answer:
        'Depende do plano que você escolher. Sua empresa já paga uma parte, e você completa a diferença.',
    },
    {
      question: 'Como eu ativo?',
      answer: 'Pelo convite que chega da sua empresa. Baixe o app, aceite o convite e pronto.',
    },
    {
      question: 'Posso trocar de academia?',
      answer: 'Pode. A Movly é uma rede: você escolhe onde treinar.',
    },
    {
      question: 'Tem aula além de musculação?',
      answer: 'Tem yoga, pilates, dança, luta, funcional e muito mais — conforme a rede na sua região.',
    },
    {
      question: 'Minha empresa não tem. E agora?',
      answer:
        'Mostra esta página pro RH. Ou deixa o contato dele no formulário abaixo que a gente conversa.',
    },
  ],
  aca: [
    {
      question: 'Como minha academia entra na rede?',
      answer:
        'O credenciamento é feito pela ACAF Brasil, que garante os direitos dos donos de academia dentro da Movly. Comece pelo formulário abaixo.',
    },
    {
      question: 'Como recebo pelos alunos Movly?',
      answer:
        'Em média, ~80% do valor pago (parte da empresa + plano do aluno) é repassado às academias, de acordo com os check-ins feitos na sua unidade.',
    },
    {
      question: 'Preciso mudar meu controle de acesso?',
      answer: 'Não. O check-in é pelo app. Integrar a catraca por QR code ou biometria é opcional.',
    },
  ],
};

export const FAQ_TAB_LABELS: Record<FaqTab, string> = {
  emp: 'Empresas',
  col: 'Colaboradores',
  aca: 'Academias',
};
