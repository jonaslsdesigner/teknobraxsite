import { useState } from 'react'
import { Play } from 'lucide-react'
import { CONTATO, NAV, SOLUCOES, whatsappLink } from '../data/site'
import { FacebookIcon, InstagramIcon, Logo, WhatsAppIcon } from './ui'

function Coluna({ titulo, children, className = '' }) {
  return (
    <div className={className}>
      <p className="font-display text-lg font-bold text-ink-900">{titulo}</p>
      <div className="mt-6">{children}</div>
    </div>
  )
}

function ListaBolinha({ itens }) {
  return (
    <ul className="space-y-3 text-sm font-medium text-ink-700">
      {itens.map(({ label, href }) => (
        <li key={label} className="flex items-start gap-3">
          <span className="mt-[0.5em] size-1.5 shrink-0 rounded-full bg-ink-300" />
          <a href={href} className="hover:text-brand-600">{label}</a>
        </li>
      ))}
    </ul>
  )
}

const REDES = [
  {
    label: 'Instagram',
    href: CONTATO.instagram,
    Icone: InstagramIcon,
    cls: 'bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] hover:brightness-110',
  },
  { label: 'Facebook', href: CONTATO.facebook, Icone: FacebookIcon, cls: 'bg-[#1877F2] hover:bg-[#1465d6]', grande: true },
]

export default function Footer() {
  const [msg, setMsg] = useState('')

  const enviar = (e) => {
    e.preventDefault()
    window.open(whatsappLink(msg.trim() || undefined), '_blank', 'noreferrer')
  }

  return (
    <footer className="border-t border-brand-200/70 bg-brand-100/60">
      <div data-stagger="up" data-stagger-step="120" className="container-site grid grid-cols-2 gap-x-6 gap-y-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] lg:gap-10">
        {/* Marca + Sobre */}
        <div className="col-span-2 lg:col-span-1">
          <Logo className="h-16" />
          <p className="mt-3 font-semibold text-brand-500">Segurança na palma da mão</p>

          <p className="mt-10 font-display text-lg font-bold text-ink-900">Sobre nós</p>
          <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-ink-500">
            Segurança eletrônica para condomínios, empresas e residências. Há mais de 10 anos protegendo Fortaleza.
          </p>
        </div>

        <Coluna titulo="Soluções">
          <ListaBolinha itens={SOLUCOES.map((s) => ({ label: s.titulo, href: '#solucoes' }))} />
        </Coluna>

        <Coluna titulo="Navegação">
          <ListaBolinha itens={NAV} />
        </Coluna>

        <Coluna titulo="Contato" className="col-span-2 sm:col-span-1">
          <div className="space-y-5 text-sm">
            <div>
              <p className="font-bold text-ink-900">Telefone:</p>
              {CONTATO.telefones.map((t) => (
                <a key={t} href={`tel:+55${t.replace(/\D/g, '')}`} className="block text-ink-700 hover:text-brand-600">{t}</a>
              ))}
            </div>
            <div>
              <p className="font-bold text-ink-900">E-mail:</p>
              <a href={`mailto:${CONTATO.email}`} className="text-ink-700 hover:text-brand-600">{CONTATO.email}</a>
            </div>
            <div>
              <p className="font-bold text-ink-900">Endereço:</p>
              <a href={CONTATO.mapsUrl} target="_blank" rel="noreferrer" className="text-ink-700 hover:text-brand-600">
                {CONTATO.endereco[0]}<br />{CONTATO.endereco[1]}
              </a>
            </div>
            <span className="block h-2 w-8 bg-brand-500" />
          </div>
        </Coluna>

        {/* Mensagem rápida + redes */}
        <div className="col-span-2 flex flex-col sm:col-span-1">
          <form onSubmit={enviar} className="flex rounded-md bg-white p-1 ring-1 ring-ink-900/5">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Escreva sua mensagem"
              aria-label="Mensagem para o WhatsApp"
              className="min-w-0 flex-1 bg-transparent px-3 text-sm text-ink-900 outline-none placeholder:text-ink-300"
            />
            <button type="submit" aria-label="Enviar pelo WhatsApp" className="grid size-8 shrink-0 place-items-center rounded bg-brand-500 text-white hover:bg-brand-600">
              <Play className="size-3.5 fill-current" />
            </button>
          </form>

          <div className="mt-10 flex gap-3 lg:mt-auto">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full bg-[#1FAF55] text-white hover:bg-[#1A9A4A]">
              <WhatsAppIcon className="size-[18px]" />
            </a>
            {/* TODO: links das redes sociais em data/site.js */}
            {REDES.map(({ label, href, Icone, cls, grande }) => (
              <a key={label} href={href} aria-label={label} {...(href !== '#' && { target: '_blank', rel: 'noreferrer' })} className={`grid size-10 place-items-center rounded-full text-white transition ${cls}`}>
                <Icone className={grande ? 'size-5' : 'size-[18px]'} />
              </a>
            ))}
          </div>
          <p className="mt-4 font-display text-lg font-bold text-ink-900">Siga a gente</p>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-cocoa-900">
        <div className="container-site flex flex-col items-center justify-between gap-4 pt-5 pb-24 text-sm text-white/80 sm:pb-5 sm:flex-row">
          <nav className="flex items-center gap-5">
            {[
              { label: 'Sobre', href: '#sobre' },
              { label: 'Soluções', href: '#solucoes' },
              { label: 'Contato', href: '#contato' },
            ].map((l, i) => (
              <span key={l.href} className="flex items-center gap-5">
                {i > 0 && <span className="h-3 w-px bg-brand-500" />}
                <a href={l.href} className="hover:text-white">{l.label}</a>
              </span>
            ))}
          </nav>
          <p className="text-center">© {new Date().getFullYear()} Teknobrax — Sistema Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
