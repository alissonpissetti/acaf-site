import { MOVLY_LEGAL, type LegalSection } from './legalMeta';

const L = MOVLY_LEGAL;

export const TERMS_OF_USE_TITLE = `Termos de uso · ${L.productName}`;

export const TERMS_OF_USE_INTRO = [
  `Estes Termos de Uso (“Termos”) regulam o acesso e o uso do aplicativo móvel ${L.productName}, dos portais web associados (empresa, academia e demais interfaces) e dos serviços de benefício corporativo de bem-estar e acesso a academias oferecidos pela ${L.legalName}, inscrita no CNPJ ${L.cnpj}, marca ${L.productName} · by ACAF Brasil (“Movly”, “nós”).`,
  `Ao criar conta, aceitar convite, fazer check-in ou utilizar qualquer canal da Movly, você declara ter lido e concordado com estes Termos e com a nossa Política de Privacidade.`,
  `Última atualização: ${L.effectiveDateLabel}.`,
];

export const TERMS_OF_USE_SECTIONS: LegalSection[] = [
  {
    id: 'servico',
    title: '1. O serviço',
    paragraphs: [
      'A Movly conecta empresas, colaboradores e academias/estúdios parceiros. O colaborador escolhe a academia preferida no aplicativo, o plano de assinatura e realiza check-in na unidade para utilizar o benefício. A empresa participa com um valor por colaborador que efetivamente utilize o benefício no mês, conforme contrato corporativo.',
      'Funcionalidades, planos, valores e parceiros podem evoluir; descrições no app e no site são informativas e podem ser ajustadas com comunicação prévia quando exigido por lei ou contrato.',
    ],
  },
  {
    id: 'elegibilidade',
    title: '2. Quem pode usar',
    paragraphs: [
      'O app para colaboradores destina-se a pessoas convidadas ou vinculadas a empresas contratantes da Movly, capazes de contratar civilmente. Portais da empresa e da academia exigem credenciais próprias e perfis autorizados.',
      'Você é responsável pela veracidade dos dados informados e pelo sigilo das credenciais de acesso. Notifique-nos imediatamente em caso de uso não autorizado da sua conta.',
    ],
  },
  {
    id: 'conta',
    title: '3. Conta e convite',
    paragraphs: [
      'A ativação costuma ocorrer por convite da empresa empregadora. Você deve informar dados cadastrais corretos (nome, e-mail, telefone, CPF e demais campos solicitados) e manter o pagamento do plano escolhido, quando aplicável.',
      'Podemos suspender ou encerrar contas em caso de fraude, abuso de check-in, violação destes Termos ou determinação legal.',
    ],
  },
  {
    id: 'checkin',
    title: '4. Check-in e uso nas academias',
    list: [
      'O check-in é realizado pelo aplicativo na academia preferida, com validação conforme regras da plataforma (incluindo, quando necessário, permissão de localização para comprovar proximidade da unidade).',
      'Cada beneficiário deve seguir as regras internas da academia/estúdio visitado.',
      'É proibido ceder, revender ou compartilhar códigos de acesso com terceiros não autorizados.',
      'Tentativas de burlar limites de check-in, localização ou faturamento podem resultar em bloqueio e responsabilização.',
    ],
    paragraphs: [],
  },
  {
    id: 'pagamentos',
    title: '5. Planos e pagamentos',
    paragraphs: [
      'Valores de planos de assinatura são exibidos no aplicativo e podem variar conforme o plano Connect cadastrado na plataforma. A parte paga pela empresa é definida no contrato corporativo e não substitui eventuais valores devidos pelo colaborador.',
      'Cobranças de colaboradores são processadas por meios de pagamento integrados à plataforma (por exemplo, gateways e provedores de cobrança). Empresas recebem faturamento mensal conforme regras de uso (colaboradores com check-in no período).',
      'Em caso de inadimplência, o acesso pode ser suspenso até regularização.',
    ],
  },
  {
    id: 'propriedade',
    title: '6. Propriedade intelectual',
    paragraphs: [
      'Marcas, logotipos, layout, software e conteúdos da Movly são protegidos. É vedada cópia, engenharia reversa ou exploração comercial não autorizada.',
      'Conteúdos de terceiros (marcas de academias, imagens de unidades) permanecem de seus respectivos titulares.',
    ],
  },
  {
    id: 'responsabilidade',
    title: '7. Limitação de responsabilidade',
    paragraphs: [
      'A Movly atua como plataforma de intermediação do benefício entre empresas, colaboradores e academias parceiras. A prestação do serviço de academia/aula é de responsabilidade da unidade preferida do colaborador, nos limites da lei.',
      'Na extensão permitida pela legislação brasileira, a Movly não se responsabiliza por lucros cessantes, danos indiretos ou interrupções causadas por terceiros, força maior ou indisponibilidade temporária dos sistemas.',
    ],
  },
  {
    id: 'dados',
    title: '8. Privacidade e dados pessoais',
    paragraphs: [
      `O tratamento de dados pessoais segue a Política de Privacidade disponível em ${L.website}/politica-de-privacidade. O contato do encarregado/DPO para assuntos de privacidade é ${L.privacyEmail}.`,
    ],
  },
  {
    id: 'alteracoes',
    title: '9. Alterações dos Termos',
    paragraphs: [
      'Podemos atualizar estes Termos para refletir mudanças legais ou do serviço. A versão vigente estará sempre publicada no site. O uso continuado após a publicação de alterações relevantes pode ser considerado aceitação, quando permitido pela lei.',
    ],
  },
  {
    id: 'lei',
    title: '10. Lei aplicável e foro',
    paragraphs: [
      'Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Curitiba/PR, salvo disposições legais em contrário em relação a consumidores.',
      `Dúvidas: ${L.contactEmail}.`,
    ],
  },
];
