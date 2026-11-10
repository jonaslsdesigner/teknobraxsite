const ITENS = [
  'Câmeras',
  'Alarmes',
  'Reconhecimento facial',
  'Acesso remoto',
  'Cerca elétrica',
  'Interfone',
  'Suporte técnico',
  'Fortaleza – CE',
]

/** Faixa animada com as palavras-chave da marca */
export default function Faixa() {
  const lista = [...ITENS, ...ITENS]
  return (
    <div data-reveal="fade" className="overflow-hidden border-y border-brand-200/60 bg-brand-50 py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {lista.map((item, i) => (
          <span key={i} className="flex items-center gap-10 pr-10 text-xs font-bold tracking-[0.25em] whitespace-nowrap text-cocoa-700 uppercase">
            {item}
            <span className="size-1.5 rounded-full bg-brand-500" />
          </span>
        ))}
      </div>
    </div>
  )
}
