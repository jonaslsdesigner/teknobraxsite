import { useEffect, useState } from 'react'
import { PASSOS_APP } from '../data/site'
import { Callout, Eyebrow, Rings } from './ui'
import { Phone } from './AppDestaque'

const TEMPO = 6000

/** Os 6 passos do tutorial do app, com troca automática */
export default function ComoFunciona() {
  const [atual, setAtual] = useState(0)
  const [pausado, setPausado] = useState(false)

  useEffect(() => {
    if (pausado) return
    const t = setTimeout(() => setAtual((a) => (a + 1) % PASSOS_APP.length), TEMPO)
    return () => clearTimeout(t)
  }, [atual, pausado])

  const passo = PASSOS_APP[atual]

  return (
    <section id="app" className="relative overflow-hidden py-24 lg:py-32">
      <Rings data-parallax="0.18" className="absolute -top-64 -right-64 hidden lg:block size-[760px] text-brand-500" />

      <div className="container-site relative">
        <div data-stagger="up" className="max-w-2xl">
          <Eyebrow>Tutorial do aplicativo</Eyebrow>
          <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-5xl lg:text-[3.6rem]">
            Conheça o app
            <br />
            <span className="text-brand-500">em 6 passos.</span>
          </h2>
        </div>

        <div
          className="mt-14 grid items-center gap-14 lg:grid-cols-[1fr_auto_0.9fr]"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
        >
          {/* Lista de passos */}
          <ol data-stagger="left" data-stagger-step="110" className="flex flex-col gap-2">
            {PASSOS_APP.map((p, i) => {
              const ativo = i === atual
              return (
                <li key={p.n}>
                  <button
                    onClick={() => setAtual(i)}
                    className={`relative flex w-full items-center gap-5 overflow-hidden rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                      ativo ? 'bg-brand-50 ring-1 ring-brand-200' : 'hover:bg-brand-50/60'
                    }`}
                  >
                    <span className={`font-display text-sm font-bold tabular-nums ${ativo ? 'text-brand-500' : 'text-ink-300'}`}>
                      {p.n}
                    </span>
                    <span className="flex-1">
                      <span className={`block text-[11px] font-bold tracking-[0.2em] uppercase ${ativo ? 'text-brand-500' : 'text-ink-300'}`}>
                        {p.tag}
                      </span>
                      <span className={`block font-display text-lg font-bold tracking-tight ${ativo ? 'text-ink-900' : 'text-ink-500'}`}>
                        {p.titulo}
                      </span>
                    </span>
                    {ativo && (
                      <span
                        key={`${atual}-${pausado}`}
                        className="absolute bottom-0 left-0 h-0.5 bg-brand-500"
                        style={{ animation: pausado ? 'none' : `progresso ${TEMPO}ms linear forwards`, width: pausado ? '100%' : 0 }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ol>

          {/* Celular */}
          <div data-reveal="zoom" data-mouse="12" style={{ '--d': '250ms' }} className="relative mx-auto">
            <Phone key={passo.img} src={passo.img} label={`Print — ${passo.tag}`} className="w-[260px] sm:w-[290px]" />
            <Callout icon={passo.icon} titulo={passo.tag} texto={`Passo ${passo.n} de 06`} className="absolute -top-7 -left-4 sm:top-6 sm:-left-24" />
          </div>

          {/* Texto do passo */}
          <div data-reveal="right" style={{ '--d': '450ms' }} className="lg:pl-4">
            <p className="font-display text-sm font-bold tracking-[0.2em] text-brand-500">
              {passo.n} <span className="text-ink-300">/ 06</span>
            </p>
            <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">{passo.titulo}</h3>
            <span className="mt-5 block h-1 w-12 rounded-full bg-brand-500" />
            <p className="mt-5 max-w-sm leading-relaxed text-ink-500">{passo.texto}</p>
          </div>
        </div>
      </div>

      <style>{`@keyframes progresso { from { width: 0 } to { width: 100% } }`}</style>
    </section>
  )
}
