import { useState } from 'react'
import { ArrowRight, MapPin, Phone, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { CONTATO, whatsappLink } from '../data/site'
import { Eyebrow, Rings, WhatsAppIcon } from './ui'

function Campo({ label, ...props }) {
  const Tag = props.as === 'textarea' ? 'textarea' : 'input'
  const { as, ...rest } = props
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold tracking-wide text-ink-700">{label}</span>
      <Tag
        {...rest}
        className="w-full rounded-2xl border border-ink-900/10 bg-white px-4 py-3.5 text-[0.95rem] text-ink-900 transition outline-none placeholder:text-ink-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
      />
    </label>
  )
}

export default function Contato() {
  const [status, setStatus] = useState('idle') // idle | enviando | ok | erro

  async function enviar(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('enviando')
    try {
      // contato.php fica em /public e vai junto no build para a Hostinger
      const res = await fetch('./contato.php', { method: 'POST', body: new FormData(form) })
      if (!res.ok) throw new Error()
      setStatus('ok')
      form.reset()
    } catch {
      setStatus('erro')
    }
  }

  return (
    <section id="contato" className="pb-24 lg:pb-32">
      {/* Faixa de chamada */}
      <div className="container-site">
        <div data-reveal="zoom" className="relative overflow-hidden rounded-[36px] bg-brand-500 px-8 py-14 text-white sm:px-14 lg:py-16">
          <Rings data-parallax="0.15" className="absolute -top-40 -right-24 size-[560px] text-white" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-4xl leading-[1.02] font-extrabold text-white sm:text-5xl">
                Proteja o que importa.
              </h2>
              <p className="mt-4 max-w-lg text-white/85">
                Fale com a nossa equipe e receba um projeto sob medida para o seu condomínio, empresa ou casa.
              </p>
            </div>
            <a data-reveal="pop" style={{ '--d': '450ms' }} href={whatsappLink()} target="_blank" rel="noreferrer" className="btn shrink-0 bg-[#1FAF55] text-white shadow-xl shadow-black/15 hover:-translate-y-0.5 hover:bg-[#1A9A4A]">
              <WhatsAppIcon className="size-5" /> Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-site mt-24 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div data-reveal="left">
          <Eyebrow>Entre em contato</Eyebrow>
          <h2 className="mt-5 text-4xl leading-[1.02] font-extrabold sm:text-5xl">
            Vamos conversar
            <br />
            sobre sua segurança.
          </h2>

          <ul data-stagger="up" data-stagger-start="300" className="mt-10 space-y-6">
            <li className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-100 text-brand-600"><MapPin className="size-5" /></span>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-ink-300 uppercase">Endereço</p>
                <a href={CONTATO.mapsUrl} target="_blank" rel="noreferrer" className="mt-1 block font-medium text-ink-900 hover:text-brand-600">
                  {CONTATO.endereco[0]}<br />{CONTATO.endereco[1]}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-100 text-brand-600"><Phone className="size-5" /></span>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-ink-300 uppercase">Telefones</p>
                <div className="mt-1 flex flex-col font-medium text-ink-900">
                  {CONTATO.telefones.map((t) => (
                    <a key={t} href={`tel:+55${t.replace(/\D/g, '')}`} className="hover:text-brand-600">{t}</a>
                  ))}
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-100 text-brand-600"><Mail className="size-5" /></span>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-ink-300 uppercase">E-mail</p>
                <a href={`mailto:${CONTATO.email}`} className="mt-1 block font-medium text-ink-900 hover:text-brand-600">{CONTATO.email}</a>
              </div>
            </li>
          </ul>
        </div>

        <form data-reveal="right" style={{ '--d': '200ms' }} onSubmit={enviar} className="rounded-[32px] bg-brand-50 p-7 ring-1 ring-brand-200/60 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <Campo label="Nome" name="nome" placeholder="Seu nome" required />
            <Campo label="Telefone / WhatsApp" name="telefone" type="tel" placeholder="(85) 90000-0000" required />
            <div className="sm:col-span-2">
              <Campo label="E-mail" name="email" type="email" placeholder="voce@email.com" required />
            </div>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-xs font-semibold tracking-wide text-ink-700">Interesse</span>
              <select
                name="interesse"
                className="w-full appearance-none rounded-2xl border border-ink-900/10 bg-white px-4 py-3.5 text-[0.95rem] text-ink-900 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
              >
                <option>Câmeras (CFTV)</option>
                <option>Alarme</option>
                <option>Reconhecimento facial</option>
                <option>Interfone</option>
                <option>Cerca elétrica</option>
                <option>App para condomínio</option>
                <option>Outro</option>
              </select>
            </label>
            <div className="sm:col-span-2">
              <Campo label="Mensagem" name="mensagem" as="textarea" rows={4} placeholder="Conte um pouco sobre o local que deseja proteger" />
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status === 'enviando'} className="btn-primary disabled:opacity-60">
              {status === 'enviando' ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
              Enviar mensagem
            </button>
            {status === 'ok' && (
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                <CheckCircle2 className="size-4" /> Recebemos! Retornamos em breve.
              </p>
            )}
            {status === 'erro' && (
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-medium text-brand-700">
                Não foi possível enviar. Fale pelo WhatsApp <ArrowRight className="size-3.5" />
              </a>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
