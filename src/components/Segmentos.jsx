import { CLIENTES, SEGMENTOS } from '../data/site'
import { Eyebrow, ImageSlot } from './ui'

export default function Segmentos() {
  return (
    <section id="segmentos" className="py-24 lg:py-32">
      <div className="container-site">
        <div data-stagger="up" className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Para quem</Eyebrow>
          <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-5xl">
            Do portão de casa
            <br />
            ao condomínio inteiro.
          </h2>
        </div>

        <div data-stagger="up" data-stagger-step="150" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SEGMENTOS.map(({ icon: Icon, titulo, texto, img, pos }) => (
            <div key={titulo} data-tilt="8" className="group overflow-hidden rounded-[28px] bg-brand-50 ring-1 ring-brand-200/50">
              <ImageSlot
                src={img}
                alt={titulo}
                pos={pos}
                className="aspect-[4/3] w-full"
                imgClassName="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex items-center gap-4 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand-500 ring-1 ring-brand-200">
                  <Icon className="size-5" strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="text-base font-bold tracking-tight">{titulo}</h3>
                  <p className="text-sm text-ink-500">{texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clientes */}
        <div className="mt-24">
          <p className="text-center text-xs font-bold tracking-[0.25em] text-ink-300 uppercase">
            Quem confia na Teknobrax
          </p>
          <div data-stagger="zoom" data-stagger-step="100" className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {CLIENTES.map((c) => (
              <ImageSlot
                key={c}
                src={`clientes/${c}`}
                label="Logo cliente"
                className="h-24 rounded-2xl"
                imgClassName="!object-contain p-5 grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
