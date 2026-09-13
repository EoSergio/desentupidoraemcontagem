import { ServiceItem, NeighborhoodRegion, FAQItem, StepItem } from '../types';

export const CONTACT_INFO = {
  whatsappDisplay: '(31) 98765-4321',
  whatsappRaw: '5531987654321',
  city: 'Contagem',
  state: 'Minas Gerais (MG)',
  mainAddress: 'Av. João César de Oliveira, 2800 - Eldorado, Contagem - MG',
  defaultWhatsappMessage: 'Olá! Estou em Contagem e gostaria de solicitar atendimento ou agendar um horário para desentupimento.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'desentupimento-esgoto',
    title: 'Desentupimento de Esgoto',
    shortDesc: 'Desobstrução de ramais e redes de esgoto residenciais, comerciais e prediais.',
    painTrigger: 'Mau cheiro e retorno de água suja por ralos ou ralos de quintal.',
    solution: 'Desobstrução mecânica profunda com sondas rotativas que removem o bloqueio sem danificar a tubulação.',
    badge: 'Prioridade',
    whatsappMessage: 'Olá! Preciso de atendimento para desentupimento de ESGOTO em Contagem. Gostaria de solicitar ou agendar um horário.',
    iconName: 'AlertTriangle',
  },
  {
    id: 'desentupimento-pias-ralos',
    title: 'Desentupimento de Pias e Ralos',
    shortDesc: 'Eliminação imediata de água parada na cozinha, banheiros e áreas de serviço.',
    painTrigger: 'Água que não escoa na cuba da pia ou água acumulada no box durante o banho.',
    solution: 'Raspagem interna cuidadosa de gordura e resíduos, restabelecendo o fluxo original com segurança.',
    badge: 'Mais Solicitado',
    whatsappMessage: 'Olá! Estou com pia/ralo entupido em Contagem. Gostaria de verificar horários disponíveis para atendimento.',
    iconName: 'Droplets',
  },
  {
    id: 'desentupimento-vasos-sanitarios',
    title: 'Desentupimento de Vasos Sanitários',
    shortDesc: 'Desobstrução rápida de vasos sanitários com segurança para a louça.',
    painTrigger: 'Nível da água subindo ao acionar a descarga, impedindo o uso do banheiro.',
    solution: 'Desobstrução precisa da curva sifônica com ponteiras de proteção que não riscam nem quebram o sanitário.',
    badge: 'Atendimento Ágil',
    whatsappMessage: 'Olá! Estou com vaso sanitário entupido em Contagem e preciso agendar uma visita ou atendimento.',
    iconName: 'Toilet',
  },
  {
    id: 'limpeza-caixa-gordura',
    title: 'Limpeza de Caixa de Gordura',
    shortDesc: 'Higienização e desobstrução preventiva ou corretiva.',
    painTrigger: 'Transbordamento da tampa da caixa de gordura e odores desagradáveis no ambiente.',
    solution: 'Remoção de placas endurecidas e descarte adequado, mantendo o encanamento limpo e desimpedido.',
    badge: 'Residencial e Comercial',
    whatsappMessage: 'Olá! Gostaria de agendar a limpeza de CAIXA DE GORDURA no meu imóvel em Contagem.',
    iconName: 'Trash2',
  },
  {
    id: 'hidrojateamento-alta-pressao',
    title: 'Hidrojateamento de Alta Pressão',
    shortDesc: 'Limpeza profunda de redes e galerias com jato pressurizado de água.',
    painTrigger: 'Obstruções severas em condomínios, comércios e redes de maior diâmetro.',
    solution: 'Lavagem interna de alta pressão que desincrusta totalmente as paredes da tubulação.',
    badge: 'Grandes Redes',
    whatsappMessage: 'Olá! Preciso de hidrojateamento em Contagem para condomínio/empresa. Gostaria de agendar uma avaliação.',
    iconName: 'Zap',
  },
];

export const WORKFLOW_STEPS: StepItem[] = [
  {
    step: '01',
    title: 'Contato pelo WhatsApp',
    description: 'Envie uma mensagem informando seu bairro em Contagem e o tipo de problema para combinarmos o atendimento.',
    badge: 'Resposta Rápida',
  },
  {
    step: '02',
    title: 'Atendimento Rápido ou Agendamento',
    description: 'Você escolhe: solicite atendimento ágil para o mesmo dia ou agende o melhor dia e período (manhã ou tarde).',
    badge: 'Horário Flexível',
  },
  {
    step: '03',
    title: 'Avaliação no Local e Orçamento Claro',
    description: 'O técnico avalia o ponto exato da obstrução no imóvel e apresenta o orçamento transparente antes da execução.',
    badge: 'Orçamento Transparente',
  },
  {
    step: '04',
    title: 'Execução Limpa sem Quebra-Quebra',
    description: 'Realizamos o desentupimento com equipamentos modernos, testamos o fluxo de água e deixamos o ambiente limpo.',
    badge: 'Sem Quebrar Pisos',
  },
];

export const CONTAGEM_REGIONS: NeighborhoodRegion[] = [
  {
    region: 'Região Eldorado',
    neighborhoods: ['Eldorado', 'Novo Eldorado', 'Parque São João', 'Jardim Eldorado', 'Glória', 'Cidade Jardim Eldorado'],
  },
  {
    region: 'Região Industrial & Cinco',
    neighborhoods: ['Industrial', 'Distrito Industrial Cinco', 'Cincão', 'Inconfidentes', 'Jardim Industrial', 'Amazonas'],
  },
  {
    region: 'Região Sede (Centro)',
    neighborhoods: ['Centro de Contagem', 'Fonte Grande', 'Bernardo Monteiro', 'Arcádia', 'Alvorada', 'Praia', 'Nossa Senhora do Carmo'],
  },
  {
    region: 'Região Riacho & Darcy Ribeiro',
    neighborhoods: ['Riacho das Pedras', 'Jardim Riacho das Pedras', 'Darcy Ribeiro', 'Monte Castelo', 'Vera Cruz'],
  },
  {
    region: 'Região Ressaca & Cabral',
    neighborhoods: ['Cabral', 'Arpoador', 'São Joaquim', 'Morada Nova', 'Jardim Laguna', 'Braúnas', 'Oitis'],
  },
  {
    region: 'Região Nacional & Petrolândia',
    neighborhoods: ['Nacional', 'Bom Jesus', 'Petrolândia', 'Nova Contagem', 'Retiro', 'Chácaras Cotia', 'Vargem das Flores'],
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Posso agendar um horário para o atendimento no meu imóvel?',
    answer: 'Sim! Você pode tanto solicitar atendimento rápido para o mesmo dia quanto agendar previamente a data e o turno mais conveniente para você (manhã ou tarde), facilitando sua rotina em casa ou no trabalho.',
  },
  {
    question: 'Quanto tempo a equipe costuma demorar para chegar em Contagem?',
    answer: 'Possuímos localização de fácil acesso a todas as regiões de Contagem (próximas ao Eldorado, Industrial, Centro e Ressaca), garantindo agilidade no deslocamento até o seu endereço.',
  },
  {
    question: 'Vocês quebram pisos, azulejos ou paredes para desentupir?',
    answer: 'Não! Trabalhamos com máquinas desentupidoras rotativas com cabos espirais flexíveis e hidrojateamento que atuam internamente pelos próprios canos e ralos, sem necessidade de reformas ou quebra-quebra.',
  },
  {
    question: 'Como faço para solicitar atendimento ou tirar dúvidas?',
    answer: 'Basta clicar em qualquer botão de WhatsApp nesta página. Nosso canal direto no WhatsApp atende prontamente para entender seu caso e definir o horário ideal.',
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos PIX, cartões de crédito (com possibilidade de parcelamento), cartões de débito e dinheiro. Para condomínios e empresas, oferecemos faturamento mediante cadastro.',
  },
];
