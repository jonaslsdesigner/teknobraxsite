import { ArrowRight, ChevronDown, ScanFace, Video, ShieldCheck, Smartphone } from 'lucide-react'
import { DESTAQUES, whatsappLink } from '../data/site'
import { Callout, Eyebrow, ImageSlot, XSlash } from './ui'

/** Linha do título que sobe de trás de uma máscara */
function Linha({ children, d, className = '' }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <span data-reveal="mask" style={{ '--d': d }} className={`block ${className}`}>{children}</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-20">
      {/* Imagem à direita, sangrando até a borda (desktop) */}
      <div className="absolute inset-y-0 right-0 hidden w-[56%] pt-20 lg:block">
        <div data-reveal="soft" style={{ '--d': '150ms' }} className="relative h-full overflow-hidden rounded-bl-[56px]">
          <ImageSlot
            src="teknobrax/01-hero/hero-seguranca-integrada.webp"
            alt="Câmeras, leitor facial e central de alarme em uma entrada de condomínio"
            className="size-full"
            eager
          />
          {/* Fade para o branco, igual ao site de referência */}
          <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 to-transparent" />
          {/* Corte diagonal laranja — o "X" da marca */}
          <XSlash data-parallax="0.12" className="absolute -right-24 -bottom-28 h-[340px] text-brand-500" />
        </div>

        <div data-reveal="pop" data-mouse="26" style={{ '--d': '1300ms' }} className="absolute top-[30%] left-[16%]">
          <Callout icon={ScanFace} titulo="Acesso liberado" texto="Reconhecimento facial" className="animate-float" />
        </div>
        <div data-reveal="pop" data-mouse="-18" style={{ '--d': '1550ms' }} className="absolute right-10 bottom-[22%]">
          <Callout icon={Video} titulo="Câmeras ao vivo" texto="De onde você estiver" className="animate-float [animation-delay:-3s]" />
        </div>
      </div>

      {/* Banner horizontal no mobile — logo abaixo do menu */}
      <div className="relative lg:hidden">
        <div data-reveal="soft" style={{ '--d': '100ms' }} className="relative overflow-hidden rounded-b-[32px]">
          <ImageSlot
            src="teknobrax/01-hero/hero-seguranca-integrada.webp"
            alt="Câmeras, leitor facial e central de alarme em uma entrada de condomínio"
            className="aspect-[16/11] w-full sm:aspect-[16/9]"
            eager
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent" />
          <XSlash className="absolute -right-10 -bottom-16 h-[180px] text-brand-500" />
        </div>
        <div data-reveal="pop" style={{ '--d': '900ms' }} className="absolute -bottom-6 left-5 sm:left-8">
          <Callout icon={ScanFace} titulo="Acesso liberado" texto="Reconhecimento facial" />
        </div>
      </div>

      <div className="container-site relative">
        <div className="flex max-w-xl flex-col justify-center pt-14 pb-12 lg:min-h-[640px] lg:py-24">
          <div data-reveal="left" style={{ '--d': '150ms' }}>
            <Eyebrow>Sistema digital · Fortaleza</Eyebrow>
          </div>

          <h1 className="mt-6 text-[2.9rem] leading-[0.98] font-extrabold sm:text-6xl lg:text-[4.4rem]">
            <Linha d="300ms">Segurança</Linha>
            <Linha d="450ms" className="text-brand-500">na palma</Linha>
            <Linha d="600ms" className="text-brand-500">da mão.</Linha>
          </h1>

          <p data-reveal style={{ '--d': '800ms' }} className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-500">
            Câmeras, alarmes e reconhecimento facial para condomínios, empresas e residências —
            com tudo controlado pelo aplicativo Teknobrax. Há mais de 10 anos protegendo Fortaleza.
          </p>

          <div data-stagger="up" data-stagger-start="950" className="mt-9 flex flex-wrap items-center gap-3">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary">
              Pedir orçamento <ArrowRight className="size-4" />
            </a>
            <a href="#app" className="btn text-ink-900 hover:text-brand-600">
              <Smartphone className="size-4" /> Conheça o app
            </a>
          </div>

          <div data-reveal style={{ '--d': '1200ms' }} className="mt-10 flex items-center gap-4">
            <span className="grid size-11 place-items-center rounded-full bg-brand-100 text-brand-600">
              <ShieldCheck className="size-5" />
            </span>
            <p className="text-sm leading-snug text-ink-500">
              <strong className="block font-semibold text-ink-900">+10 anos de experiência</strong>
              Projeto, instalação, treinamento e suporte
            </p>
          </div>

          <a data-reveal="fade" style={{ '--d': '1400ms' }} href="#solucoes" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-brand-600">
            <ChevronDown className="size-4 animate-bounce" /> Descubra nossas soluções
          </a>
        </div>
      </div>

      {/* Faixa de destaques */}
      <div className="container-site relative">
        <div data-stagger="up" data-stagger-start="300" data-stagger-step="160" className="grid gap-6 border-t border-ink-900/8 py-8 sm:grid-cols-3">
          {DESTAQUES.map(({ icon: Icon, titulo, texto }) => (
            <div key={titulo} className="flex items-start gap-4 sm:justify-center">
              <Icon className="mt-0.5 size-6 shrink-0 text-brand-500" strokeWidth={1.8} />
              <div>
                <p className="font-semibold text-ink-900">{titulo}</p>
                <p className="text-sm text-ink-500">{texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
