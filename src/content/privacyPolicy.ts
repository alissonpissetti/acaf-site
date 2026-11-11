import { MOVLY_LEGAL, type LegalSection } from './legalMeta';

const L = MOVLY_LEGAL;

export const PRIVACY_POLICY_TITLE = `Política de privacidade · ${L.productName}`;

export const PRIVACY_POLICY_INTRO = [
  `Esta Política de Privacidade descreve como a ${L.legalName}, CNPJ ${L.cnpj}, na qualidade de controladora, trata dados pessoais no aplicativo ${L.productName}, nos portais web e nos serviços relacionados, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD) e normas aplicáveis das lojas de aplicativos (Apple App Store e Google Play).`,
  `Ao utilizar nossos serviços, você reconhece as práticas descritas aqui. Em caso de dúvidas ou exercício de direitos: ${L.privacyEmail}.`,
  `Última atualização: ${L.effectiveDateLabel}.`,
];

export const PRIVACY_POLICY_SECTIONS: LegalSection[] = [
  {
    id: 'quem',
    title: '1. Quem somos',
    paragraphs: [
      `${L.productName} é uma marca da ${L.legalName}, operada em parceria com a ACAF Brasil no ecossistema de academias. Site: ${L.website}.`,
    ],
  },
  {
    id: 'dados',
    title: '2. Dados que podemos tratar',
    list: [
      'Identificação e contato: nome, e-mail, telefone (incl. WhatsApp), CPF, vínculo com empresa ou academia.',
      'Dados de conta e autenticação: credenciais, tokens de sessão, códigos OTP enviados por SMS ou e-mail.',
      'Dados de uso: convites, academia preferida, planos escolhidos, check-ins e interações nos portais.',
      'Localização: coordenadas aproximadas do dispositivo quando você autoriza, para validar proximidade da academia no check-in (permissões de localização no Android/iOS).',
      'Dados de pagamento: informações necessárias a cobranças e faturas (processadas em ambiente de provedores de pagamento; não armazenamos dados completos de cartão em nossos servidores).',
      'Dados técnicos: endereço IP, identificadores do dispositivo, logs, tipo de navegador e versão do app, para segurança e diagnóstico.',
    ],
    paragraphs: [
      'Não solicitamos dados sensíveis além do necessário para a prestação do serviço. Evite enviar informações desnecessárias em canais de suporte.',
    ],
  },
  {
    id: 'finalidades',
    title: '3. Finalidades e bases legais',
    list: [
      'Prestação do benefício corporativo, cadastro, convites e gestão de colaboradores (execução de contrato).',
      'Check-in em academias e prevenção de fraude (execução de contrato e legítimo interesse).',
      'Cobrança, faturamento empresa/colaborador e obrigações fiscais (execução de contrato e obrigação legal).',
      'Comunicações transacionais (convite, OTP, fatura) por e-mail ou SMS (execução de contrato).',
      'Suporte e melhoria da plataforma (legítimo interesse, com minimização de dados).',
      'Cumprimento de obrigações legais e resposta a autoridades.',
    ],
    paragraphs: [],
  },
  {
    id: 'compartilhamento',
    title: '4. Com quem compartilhamos',
    paragraphs: [
      'Os dados podem ser compartilhados, na medida necessária, com:',
    ],
    list: [
      'Empresa empregadora contratante (gestão de beneficiários e faturamento corporativo).',
      'Academias e estúdios parceiros (validação de check-in e repasse).',
      'ACAF Brasil e entidades do ecossistema, quando aplicável ao credenciamento.',
      'Provedores de infraestrutura, e-mail, SMS, pagamentos, armazenamento e hospedagem (operadores sob nossas instruções).',
      'Autoridades públicas, quando houver obrigação legal ou ordem válida.',
    ],
  },
  {
    id: 'transferencia',
    title: '5. Transferência internacional',
    paragraphs: [
      'Priorizamos provedores com processamento no Brasil. Caso algum subprocessador trate dados fora do Brasil, adotamos salvaguardas contratuais compatíveis com a LGPD.',
    ],
  },
  {
    id: 'retencao',
    title: '6. Prazo de guarda',
    paragraphs: [
      'Mantemos os dados pelo tempo necessário às finalidades descritas, ao cumprimento de contratos, prazos fiscais/contábeis e exercício de direitos. Depois, eliminamos ou anonimizamos quando razoável.',
    ],
  },
  {
    id: 'direitos',
    title: '7. Seus direitos (LGPD)',
    list: [
      'Confirmação da existência de tratamento e acesso aos dados.',
      'Correção de dados incompletos, inexatos ou desatualizados.',
      'Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade.',
      'Portabilidade, quando aplicável.',
      'Informação sobre compartilhamento e recusa de consentimento quando esta for a base.',
      'Revogação do consentimento, quando aplicável, sem afetar tratamentos anteriores.',
      'Petição à Autoridade Nacional de Proteção de Dados (ANPD).',
    ],
    paragraphs: [`Para exercer direitos, envie e-mail para ${L.privacyEmail} com identificação e descrição do pedido. Responderemos nos prazos legais.`],
  },
  {
    id: 'criancas',
    title: '8. Crianças e adolescentes',
    paragraphs: [
      'O serviço destina-se a colaboradores e público adulto no contexto corporativo, salvo programas específicos autorizados pela empresa e pelos responsáveis legais. Não direcionamos o app a menores de 13 anos.',
    ],
  },
  {
    id: 'lojas',
    title: '9. Aplicativos nas lojas (Apple e Google)',
    paragraphs: [
      'Nas páginas da App Store e da Play Console informamos a URL desta política. Permissões do dispositivo (como localização) são solicitadas no momento do uso, com finalidade descrita no app.',
      'Apple e Google podem processar dados próprios de instalação e contas de loja; consulte as políticas dessas plataformas.',
    ],
  },
  {
    id: 'seguranca',
    title: '10. Segurança',
    paragraphs: [
      'Adotamos medidas técnicas e organizacionais para proteger dados (acesso restrito, criptografia em trânsito quando aplicável, monitoramento). Nenhum sistema é 100% seguro; em incidentes relevantes, notificaremos conforme a lei.',
    ],
  },
  {
    id: 'alteracoes',
    title: '11. Alterações desta política',
    paragraphs: [
      `Podemos atualizar esta página. A data de “última atualização” no topo indica a versão vigente. Alterações relevantes podem ser comunicadas por e-mail ou aviso no app.`,
    ],
  },
  {
    id: 'contato',
    title: '12. Contato',
    paragraphs: [
      `Controladora: ${L.legalName} · CNPJ ${L.cnpj} · marca ${L.productName}.`,
      `Privacidade e DPO: ${L.privacyEmail}.`,
    ],
  },
];
