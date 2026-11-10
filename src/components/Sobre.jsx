import { ArrowRight, Check, Quote } from 'lucide-react'
import { DIFERENCIAIS } from '../data/site'
import { Eyebrow, ImageSlot } from './ui'

export default function Sobre() {
  return (
    <section id="sobre" className="bg-brand-50/60 py-24 lg:py-32">
      <div className="container-site grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Imagens */}
        <div data-stagger="left" data-stagger-step="250" className="flex flex-col gap-5">
          <ImageSlot
            src="teknobrax/04-sobre/tecnico-instalacao.webp"
            alt="Técnico instalando uma câmera de segurança"
            pos="50% 35%"
            className="aspect-[4/5] w-full rounded-[32px]"
          />
          <div className="flex items-stretch gap-5">
            <ImageSlot
              src="teknobrax/06-extras/manutencao-equipamentos.webp"
              alt="Manutenção de câmera e equipamentos de rede"
              className="hidden aspect-square w-44 shrink-0 rounded-3xl sm:block"
            />
            <div className="flex flex-1 flex-col justify-center rounded-3xl bg-white p-6 shadow-[0_24px_50px_-20px_rgba(91,39,20,0.35)]">
              <Quote className="size-6 fill-brand-500 text-brand-500" />
              <p className="mt-2 font-display text-xl leading-tight font-bold text-ink-900">
                Mais de 10 anos protegendo Fortaleza.
              </p>
              <span className="mt-3 block h-1 w-10 rounded-full bg-brand-500" />
            </div>
          </div>
        </div>

        {/* Texto */}
        <div data-stagger="up" data-stagger-start="150" data-stagger-step="120">
          <Eyebrow>Sobre a Teknobrax</Eyebrow>
          <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-5xl">
            Segurança pensada
            <br />
            para cada cliente.
          </h2>
          <p className="mt-6 leading-relaxed text-ink-500">
            A Teknobrax é especializada em segurança eletrônica. Nossos projetos para comércio, fábricas,
            residências, condomínios e indústrias nascem de uma análise de riscos e seguem com
            planejamento, implantação e execução com alto padrão de qualidade.
          </p>
          <p className="mt-4 leading-relaxed text-ink-500">
            A Teknobrax Divisão Digital atua com locação e instalação de equipamentos de CFTV, acesso remoto e
            visualização em tempo real — e atende grandes condomínios comerciais e residenciais de Fortaleza.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {DIFERENCIAIS.map((d) => (
              <li key={d} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 text-sm font-medium text-ink-900 ring-1 ring-ink-900/5">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {d}
              </li>
            ))}
          </ul>

          <a href="#contato" className="mt-9 inline-flex items-center gap-2 font-semibold text-brand-600 hover:gap-3 transition-all">
            Fale com um especialista <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
