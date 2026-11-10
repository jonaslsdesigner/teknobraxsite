import { ArrowRight, Play, CheckCircle2, BellRing } from 'lucide-react'
import { Callout, Eyebrow, ImageSlot, Rings } from './ui'

/** Moldura de celular — recebe o print real da tela do app (images/app-*.webp) */
export function Phone({ src, label, className = '' }) {
  return (
    <div className={`relative rounded-[44px] bg-ink-900 p-[10px] shadow-[0_40px_80px_-30px_rgba(91,39,20,0.55)] ${className}`}>
      <div className="relative overflow-hidden rounded-[34px] bg-white">
        <ImageSlot src={src} label={label} className="aspect-[9/19.5] w-full" />
      </div>
    </div>
  )
}

export default function AppDestaque() {
  return (
    <section className="container-site py-20 lg:py-28">
      <div data-reveal="up" className="grid overflow-hidden rounded-[32px] border border-brand-200/70 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Lado do celular */}
        <div className="relative flex items-end justify-center overflow-hidden bg-white px-8 pt-14">
          <Rings data-parallax="0.1" className="absolute top-1/2 left-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 text-brand-500" />
          <div data-reveal="up" data-mouse="10" style={{ '--d': '300ms', '--dur': '1400ms' }} className="relative translate-y-10">
            <Phone
              src="app-destaque.webp"
              label="Print da tela inicial do app"
              className="w-[250px] sm:w-[270px]"
            />
          </div>
          <div data-reveal="pop" data-mouse="24" style={{ '--d': '900ms' }} className="absolute top-14 right-6 sm:right-12">
            <Callout icon={CheckCircle2} titulo="Portão aberto!" texto="Na hora" className="animate-float" />
          </div>
          <div data-reveal="pop" data-mouse="-20" style={{ '--d': '1100ms' }} className="absolute bottom-16 left-4 sm:left-10">
            <Callout icon={BellRing} titulo="Aviso de chegada" texto="Saiba na hora" className="animate-float [animation-delay:-2.5s]" />
          </div>
        </div>

        {/* Lado do texto */}
        <div data-stagger="up" data-stagger-start="300" data-stagger-step="130" className="flex flex-col justify-center bg-brand-50 px-8 py-14 sm:px-14 lg:py-20">
          <Eyebrow>Novidade · App Teknobrax</Eyebrow>
          <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-5xl">
            Seu condomínio inteiro
            <br />
            no celular.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ink-500">
            Abra portões, libere visitantes, cadastre moradores e acompanhe as câmeras ao vivo —
            tudo em um só aplicativo, integrado aos equipamentos instalados pela Teknobrax.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#app" className="btn-primary">
              Ver como funciona <ArrowRight className="size-4" />
            </a>
            {/* TODO: linkar o vídeo tutorial (YouTube/Instagram) */}
            <a href="#app" className="btn-ghost">
              <Play className="size-4 fill-current" /> Assistir tutorial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
