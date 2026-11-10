import { useEffect } from 'react'
import { WhatsAppIcon } from './components/ui'
import { iniciarReveal } from './reveal'
import { iniciarMotion } from './motion'
import Header from './components/Header'
import Hero from './components/Hero'
import AppDestaque from './components/AppDestaque'
import Faixa from './components/Faixa'
import Solucoes from './components/Solucoes'
import Equipamentos from './components/Equipamentos'
import ComoFunciona from './components/ComoFunciona'
import Sobre from './components/Sobre'
import Segmentos from './components/Segmentos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import { whatsappLink } from './data/site'

export default function App() {
  useEffect(() => iniciarReveal(), [])
  useEffect(() => iniciarMotion(), [])

  return (
    <>
      {/* Barra de progresso da rolagem */}
      <div
        id="scroll-progress"
        aria-hidden="true"
        style={{ transform: 'scaleX(0)' }}
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-500 via-brand-400 to-gold-400"
      />
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <AppDestaque />
        <Faixa />
        <Solucoes />
        <ComoFunciona />
        <Equipamentos />
        <Sobre />
        <Segmentos />
        <Contato />
      </main>
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        data-reveal="pop"
        data-magnetic
        style={{ '--d': '1600ms' }}
        className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#1FAF55] text-white shadow-[0_14px_30px_-8px_rgba(31,175,85,0.7)] transition hover:scale-105 hover:bg-[#1A9A4A] sm:right-8 sm:bottom-8"
      >
        <span className="absolute inset-0 animate-ping-slow rounded-full bg-[#1FAF55]" />
        <WhatsAppIcon className="relative size-7" />
      </a>
    </>
  )
}
