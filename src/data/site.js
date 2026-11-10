// ============================================================
// CONTEÚDO DO SITE — edite textos, contatos e imagens aqui.
// Todas as imagens ficam em /public/images (troque pelo arquivo
// com o MESMO nome e ele aparece no lugar do placeholder).
// ============================================================
import {
  Cctv, Siren, ScanFace, Phone, Zap, DoorOpen, Wrench, Headset,
  Building2, House, Factory, Store, LogIn, UserPlus, KeyRound, Video, Smartphone, LayoutGrid,
} from 'lucide-react'

export const CONTATO = {
  // TODO: confirmar qual número é o WhatsApp oficial
  whatsapp: '5585987486702',
  whatsappMsg: 'Olá! Vim pelo site da Teknobrax e gostaria de um orçamento.',
  telefones: ['(85) 3253-7676', '(85) 98748-6702', '(85) 98435-4526'],
  email: 'contato@teknobrax.com.br', // TODO: confirmar e-mail
  endereco: ['R. Antônio Alexandrino dos Réis, Nº 333', 'Passaré, Fortaleza – CE'],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=R.+Ant%C3%B4nio+Alexandrino+dos+R%C3%A9is,+333,+Passar%C3%A9,+Fortaleza+-+CE',
  instagram: 'https://www.instagram.com/teknobrax/',
  facebook: '#', // TODO: link do Facebook
}

export const whatsappLink = (msg = CONTATO.whatsappMsg) =>
  `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(msg)}`

export const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'App', href: '#app' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Para quem', href: '#segmentos' },
  { label: 'Contato', href: '#contato' },
]

export const DESTAQUES = [
  { icon: Cctv, titulo: 'Câmeras', texto: 'CFTV com acesso remoto' },
  { icon: Siren, titulo: 'Alarmes', texto: 'Monitorados e inteligentes' },
  { icon: ScanFace, titulo: 'Reconhecimento facial', texto: 'Acesso só para quem é' },
]

export const SOLUCOES = [
  {
    icon: Cctv,
    titulo: 'Sistema de câmeras (CFTV)',
    texto: 'Projeto, instalação e acesso remoto às imagens em tempo real, de qualquer lugar.',
    img: 'teknobrax/02-servicos/cftv-cameras.webp', pos: '65% 50%',
  },
  {
    icon: Siren,
    titulo: 'Sistema de alarme',
    texto: 'Sensores e centrais que avisam na hora qualquer tentativa de invasão.',
    img: 'teknobrax/02-servicos/alarmes-sensores.webp',
  },
  {
    icon: ScanFace,
    titulo: 'Reconhecimento facial',
    texto: 'Leitores faciais em portões e guaritas, integrados ao cadastro de moradores.',
    img: 'teknobrax/02-servicos/reconhecimento-facial.webp', pos: '75% 50%',
  },
  {
    icon: Phone,
    titulo: 'Interfone',
    texto: 'Comunicação clara entre portaria, unidades e visitantes.',
    img: 'teknobrax/02-servicos/interfonia.webp', pos: '65% 50%',
  },
  {
    icon: Zap,
    titulo: 'Cerca elétrica',
    texto: 'Proteção perimetral com instalação dentro das normas de segurança.',
    img: 'teknobrax/02-servicos/cerca-eletrica.webp',
  },
  {
    icon: DoorOpen,
    titulo: 'Controle de acesso',
    texto: 'Abertura de portões pelo app, com autorização para visitantes e prestadores.',
    img: 'teknobrax/02-servicos/controle-acesso.webp', pos: '40% 50%',
  },
]

export const PASSOS_APP = [
  {
    n: '01', tag: 'Acesso', icon: LogIn,
    titulo: 'Entre na sua conta.',
    texto: 'Login com e-mail, telefone ou CPF. Em segundos você está na tela inicial do condomínio.',
    img: 'app-01-acesso.png',
  },
  {
    n: '02', tag: 'Unidade', icon: UserPlus,
    titulo: 'Cadastre os moradores.',
    texto: 'Moradores, veículos e foto de perfil — a foto já fica vinculada aos leitores faciais dos portões e da guarita.',
    img: 'app-02-moradores.png',
  },
  {
    n: '03', tag: 'Autorizações', icon: KeyRound,
    titulo: 'Libere a entrada.',
    texto: 'Autorize visitantes e prestadores de serviço com data e horário, e receba aviso quando chegarem.',
    img: 'app-03-autorizacoes.png',
  },
  {
    n: '04', tag: 'Câmeras', icon: Video,
    titulo: 'Veja tudo ao vivo.',
    texto: 'Escolha a câmera, alterne entre elas e monitore de onde estiver.',
    img: 'app-04-cameras.png',
  },
  {
    n: '05', tag: 'Portões', icon: Smartphone,
    titulo: 'Abra pelo celular.',
    texto: 'Deslize para abrir, confira a câmera na hora e conte com sensor de presença e fechamento automático.',
    img: 'app-05-portoes.png',
  },
  {
    n: '06', tag: 'E tem mais', icon: LayoutGrid,
    titulo: 'Explore o aplicativo.',
    texto: 'Reservas de espaços, documentos, mensagens, ocorrências e muito mais na palma da mão.',
    img: 'app-06-explore.png',
  },
]

export const SEGMENTOS = [
  { icon: Building2, titulo: 'Condomínios', texto: 'Residenciais e comerciais', img: 'teknobrax/05-segmentos/condominios.webp' },
  { icon: House, titulo: 'Residências', texto: 'Sua casa protegida 24h', img: 'teknobrax/05-segmentos/residencias.webp' },
  { icon: Store, titulo: 'Comércio', texto: 'Lojas e escritórios', img: 'teknobrax/05-segmentos/empresas.webp', pos: '65% 45%' },
  { icon: Factory, titulo: 'Indústrias e fábricas', texto: 'Projetos de grande porte', img: 'teknobrax/04-sobre/central-monitoramento.webp' },
]

export const DIFERENCIAIS = [
  'Análise de riscos',
  'Projeto sob medida',
  'Instalação e locação',
  'Treinamento da equipe',
  'Suporte técnico permanente',
  'Manutenção preventiva',
]

export const SERVICOS_EXTRA = [
  { icon: Wrench, titulo: 'Manutenção', texto: 'Preventiva e corretiva' },
  { icon: Headset, titulo: 'Suporte técnico', texto: 'Equipe especializada' },
]

// Logos de clientes — coloque os arquivos em /public/images/clientes/
export const CLIENTES = [
  'cliente-01.svg', 'cliente-02.svg', 'cliente-03.svg',
  'cliente-04.svg', 'cliente-05.svg', 'cliente-06.svg',
]
