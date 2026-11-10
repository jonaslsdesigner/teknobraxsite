import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { NAV, whatsappLink } from '../data/site'
import { Logo } from './ui'

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)
  const [ativo, setAtivo] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => {
      setRolou(window.scrollY > 12)
      const atual = NAV.filter((n) => {
        const el = document.querySelector(n.href)
        return el && el.getBoundingClientRect().top <= 120
      }).pop()
      if (atual) setAtivo(atual.href)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-reveal="down"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou ? 'bg-white/85 shadow-[0_1px_0_rgba(28,19,16,0.06)] backdrop-blur-xl' : 'bg-white'
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <a href="#inicio" className="shrink-0" aria-label="Teknobrax — início">
          <Logo variant="horizontal" className="h-12" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                ativo === item.href ? 'text-brand-600' : 'text-ink-700 hover:text-ink-900'
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500 transition-transform duration-300 ${
                  ativo === item.href ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contato" className="btn-ghost py-3">Fale conosco</a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary py-3">
            <MessageCircle className="size-4" /> Orçamento
          </a>
        </div>

        <button
          onClick={() => setAberto(!aberto)}
          className="grid size-11 place-items-center rounded-full border border-ink-900/10 text-ink-900 lg:hidden"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-ink-900/5 bg-white transition-[max-height] duration-300 lg:hidden ${
          aberto ? 'max-h-[520px]' : 'max-h-0 border-transparent'
        }`}
      >
        <nav className="container-site flex flex-col gap-1 py-5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setAberto(false)}
              className="rounded-2xl px-4 py-3 font-medium text-ink-900 hover:bg-brand-50"
            >
              {item.label}
            </a>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary mt-3">
            <MessageCircle className="size-4" /> Pedir orçamento no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
