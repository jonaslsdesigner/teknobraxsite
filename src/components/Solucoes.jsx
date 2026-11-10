import { ArrowUpRight } from 'lucide-react'
import { SOLUCOES, whatsappLink } from '../data/site'
import { Eyebrow, ImageSlot } from './ui'

export default function Solucoes() {
  return (
    <section id="solucoes" className="bg-peach-glow py-24 lg:py-32">
      <div className="container-site">
        <div data-stagger="up" data-stagger-step="200" className="grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow>O que fazemos</Eyebrow>
            <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-5xl lg:text-[3.6rem]">
              Proteção completa,
              <br />
              do projeto ao suporte.
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-ink-500 lg:justify-self-end">
            Cada projeto começa com uma análise de riscos e termina com sua equipe treinada.
            Equipamentos de qualidade e assistência técnica permanente.
          </p>
        </div>

        <div data-stagger="up" data-stagger-step="140" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUCOES.map(({ icon: Icon, titulo, texto, img, pos }, i) => (
            <a
              key={titulo}
              data-tilt="7"
              href={whatsappLink(`Olá! Quero saber mais sobre: ${titulo}.`)}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-ink-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(91,39,20,0.4)]"
            >
              <div className="relative">
                <ImageSlot src={img} alt={titulo} pos={pos} className="aspect-[16/10] w-full" imgClassName="transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-widest text-ink-500 backdrop-blur">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="relative flex flex-1 flex-col px-7 pt-10 pb-7">
                <span className="absolute -top-7 left-7 grid size-14 place-items-center rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-500/30 ring-4 ring-white">
                  <Icon className="size-6" strokeWidth={2} />
                </span>
                <h3 className="text-xl font-bold">{titulo}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-500">{texto}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Solicitar orçamento
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
