import { ArrowRight, BadgeCheck, Wrench, Repeat } from 'lucide-react'
import { whatsappLink } from '../data/site'
import { ImageSlot, XSlash } from './ui'

// Fotos de produto (fundo claro) — imagens ilustrativas por categoria
const PRODUTOS = [
  { img: 'teknobrax/03-equipamentos/camera-bullet.webp', label: 'Câmera bullet', cls: 'col-span-2 row-span-2' },
  { img: 'teknobrax/03-equipamentos/camera-dome.webp', label: 'Câmera dome' },
  { img: 'teknobrax/03-equipamentos/terminal-facial.webp', label: 'Terminal facial' },
  { img: 'teknobrax/03-equipamentos/kit-alarme.webp', label: 'Kit de alarme' },
  { img: 'teknobrax/03-equipamentos/videoporteiro.webp', label: 'Videoporteiro' },
]

const SELOS = [
  { icon: BadgeCheck, texto: 'Marcas de referência' },
  { icon: Repeat, texto: 'Locação de equipamentos' },
  { icon: Wrench, texto: 'Manutenção inclusa' },
]

/** Bloco laranja forte — o "momento" de cor da página, igual aos posts */
export default function Equipamentos() {
  return (
    <section className="container-site pb-24 lg:pb-32">
      <div data-reveal="zoom" className="relative overflow-hidden rounded-[36px] bg-brand-500">
        <XSlash data-parallax="0.12" className="absolute -top-10 -left-24 h-[130%] text-white/10" />
        <XSlash data-parallax="-0.1" className="absolute -right-16 -bottom-24 h-[90%] rotate-180 text-black/10" />

        <div className="relative grid items-center gap-12 px-8 py-14 sm:px-14 lg:grid-cols-[1fr_1.1fr] lg:py-20">
          <div data-stagger="up" data-stagger-start="350" data-stagger-step="120" className="text-white">
            <p className="text-xs font-bold tracking-[0.25em] text-white/80 uppercase">Locação e manutenção</p>
            <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold text-white uppercase sm:text-5xl">
              Trabalhamos com
              <br />
              os melhores
              <br />
              equipamentos.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-white/85">
              Tecnologia de ponta contra intrusos — com instalação, treinamento e manutenção feitos
              pela nossa própria equipe técnica.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {SELOS.map(({ icon: Icon, texto }) => (
                <li key={texto} className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur">
                  <Icon className="size-4" /> {texto}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink('Olá! Quero um orçamento sem compromisso de equipamentos.')}
              target="_blank"
              rel="noreferrer"
              className="btn mt-10 bg-white text-brand-600 shadow-xl hover:-translate-y-0.5"
            >
              Orçamento sem compromisso <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Vitrine de produtos sobre cartão branco */}
          <div data-stagger="pop" data-stagger-start="600" data-stagger-step="140" className="grid grid-cols-4 grid-rows-2 gap-3 rounded-[28px] bg-white p-3 shadow-2xl shadow-black/20 sm:gap-4 sm:p-4">
            {PRODUTOS.map((p) => (
              <ImageSlot
                key={p.img}
                src={p.img}
                alt={p.label}
                className={`aspect-square rounded-2xl bg-[#efebe6] ${p.cls || ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
