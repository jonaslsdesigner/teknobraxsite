import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

/**
 * ImageSlot — mostra a imagem de /public/images/<src>.
 * Se o arquivo ainda não existir, aparece um placeholder com o nome
 * do arquivo esperado. Basta salvar a imagem com esse nome.
 */
export function ImageSlot({ src, label, className = '', imgClassName = '', alt, dark = false, pos, eager = false }) {
  const [estado, setEstado] = useState('carregando') // carregando | ok | erro
  const path = `./images/${src}`

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {estado !== 'ok' && <Placeholder src={src} label={label} alt={alt} dark={dark} />}
      {src && estado !== 'erro' && (
        <img
          src={path}
          alt={alt || label || ''}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          style={pos ? { objectPosition: pos } : undefined}
          onLoad={() => setEstado('ok')}
          onError={() => setEstado('erro')}
          className={`relative size-full object-cover ${estado === 'ok' ? '' : 'opacity-0'} ${imgClassName}`}
        />
      )}
    </div>
  )
}

function Placeholder({ src, label, alt, dark }) {
  return (
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 overflow-hidden p-4 text-center ${
          dark ? 'bg-cocoa-700 text-brand-200' : 'bg-brand-100 text-cocoa-500'
        }`}
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, transparent 0 14px, ${
            dark ? 'rgba(255,255,255,0.04)' : 'rgba(255,89,3,0.07)'
          } 14px 28px)`,
        }}
        role="img"
        aria-label={alt || label}
      >
        <ImageIcon className="size-7 opacity-70" strokeWidth={1.6} />
        {label && <span className="max-w-[24ch] text-xs font-semibold">{label}</span>}
        <code className={`rounded-md px-2 py-0.5 text-[10px] ${dark ? 'bg-black/20' : 'bg-white/70'}`}>
          images/{src}
        </code>
      </div>
  )
}

/** WhatsAppIcon — logo oficial do WhatsApp (herda a cor via currentColor) */
export function WhatsAppIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

/** InstagramIcon — glifo oficial (herda a cor via currentColor) */
export function InstagramIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

/** FacebookIcon — "f" oficial (herda a cor via currentColor) */
export function FacebookIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  )
}

/** Eyebrow — "— 01 / ACESSO", como nos títulos do vídeo */
export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-500 uppercase ${className}`}>
      <span className="h-0.5 w-7 rounded-full bg-brand-500" />
      {children}
    </p>
  )
}

/** Callout — pílula branca com ícone laranja (mesmo estilo dos balões do tutorial) */
export function Callout({ icon: Icon, titulo, texto, className = '' }) {
  return (
    <div className={`callout ${className}`}>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-500 text-white shadow-md shadow-brand-500/30">
        <Icon className="size-[18px]" strokeWidth={2.2} />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-bold whitespace-nowrap text-ink-900">{titulo}</span>
        {texto && <span className="block text-xs whitespace-nowrap text-ink-500">{texto}</span>}
      </span>
    </div>
  )
}

/** Rings — arcos concêntricos de "radar", o grafismo de fundo do vídeo */
export function Rings({ className = '', ...rest }) {
  return (
    <svg viewBox="0 0 600 600" fill="none" aria-hidden="true" className={`pointer-events-none ${className}`} {...rest}>
      {[290, 240, 190, 140, 90].map((r, i) => (
        <circle key={r} cx="300" cy="300" r={r} stroke="currentColor" strokeWidth={i % 2 ? 26 : 2} opacity={i % 2 ? 0.07 : 0.18} />
      ))}
    </svg>
  )
}

/**
 * XSlash — faixas diagonais em laranja, inspiradas no "X" do TEKNOBRAX
 * e nos cortes diagonais dos posts da marca.
 */
export function XSlash({ className = '', color = 'currentColor', ...rest }) {
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" className={`pointer-events-none ${className}`} {...rest}>
      <path d="M40 0h120L360 400H240z" fill={color} />
      <path d="M300 0h100v60L330 200 260 60z" fill={color} opacity="0.35" />
    </svg>
  )
}

/**
 * Logo — sempre o PNG oficial, sem remontar.
 * variant="horizontal" → versão "Sistema de Câmeras" (sem asas), ideal pro menu
 * variant="completo"   → versão com asas "Sistema Digital"
 * Ordem de tentativa: arquivo oficial → versão temporária tirada do vídeo → texto.
 */
const LOGOS = {
  completo: ['logo-teknobrax.png', 'logo-teknobrax-TEMP.png'],
  horizontal: ['logo-teknobrax-horizontal.png', 'logo-teknobrax.png', 'logo-teknobrax-TEMP.png'],
}
export function Logo({ className = '', variant = 'completo' }) {
  const lista = LOGOS[variant]
  const [i, setI] = useState(0)
  if (i >= lista.length) {
    return <span className={`font-display text-xl font-extrabold text-brand-500 ${className}`}>TEKNOBRAX</span>
  }
  return (
    <img
      src={`./images/${lista[i]}`}
      alt="Teknobrax — Câmeras, Alarmes, Reconhecimento Facial"
      className={`w-auto object-contain ${className}`}
      onError={() => setI(i + 1)}
    />
  )
}
