/**
 * Motion interativo (mouse + scroll), suave e discreto.
 *
 * Scroll:
 *  - barra de progresso no topo (#scroll-progress)
 *  - [data-parallax="0.15"]  → desloca no eixo Y conforme a rolagem (+ = mais lento que a página)
 *
 * Mouse (só em dispositivos com mouse):
 *  - botões (.btn / .btn-primary / .btn-ghost / [data-magnetic]) → "magnéticos", puxam levemente pro cursor
 *  - [data-tilt]       → card inclina em 3D seguindo o cursor, com brilho
 *  - [data-mouse="20"] → elemento flutua conforme a posição do mouse na tela (profundidade)
 *
 * Tudo usa a propriedade `transform`, só depois que a animação de entrada do elemento terminou
 * (o reveal remove o atributo data-reveal no fim). Lerp em requestAnimationFrame = movimento fluido.
 */
const lerp = (a, b, t) => a + (b - a) * t

// Intensidade geral do motion (1 = original; 1.3 = 30% mais forte)
const FORCA = 1.3

export function iniciarMotion() {
  const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduz) return () => {}
  const temMouse = matchMedia('(hover: hover) and (pointer: fine)').matches
  const pronto = (el) => !el.hasAttribute('data-reveal')

  // ---------- estado ----------
  const estado = new Map() // el -> {x,y,tx,ty,rx,ry,trx,try}
  const st = (el) => {
    if (!estado.has(el)) estado.set(el, { x: 0, y: 0, tx: 0, ty: 0, rx: 0, ry: 0, trx: 0, try: 0, s: 1, ts: 1 })
    return estado.get(el)
  }
  let mouseX = innerWidth / 2
  let mouseY = innerHeight / 2

  // ---------- botões magnéticos ----------
  const SEL_BTN = '.btn, .btn-primary, .btn-ghost, [data-magnetic]'
  const onMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }
  const onBtnMove = (e) => {
    const el = e.target.closest(SEL_BTN)
    if (!el) return
    const r = el.getBoundingClientRect()
    const s = st(el)
    s.tx = (e.clientX - (r.left + r.width / 2)) * 0.25 * FORCA
    s.ty = (e.clientY - (r.top + r.height / 2)) * 0.35 * FORCA
  }
  const onBtnLeave = (e) => {
    const el = e.target.closest?.(SEL_BTN)
    if (el && !el.contains(e.relatedTarget)) {
      const s = st(el)
      s.tx = 0
      s.ty = 0
    }
  }

  // ---------- tilt 3D ----------
  const onTiltMove = (e) => {
    const el = e.target.closest('[data-tilt]')
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const max = Number(el.dataset.tilt || 6) * FORCA
    const s = st(el)
    s.trx = (0.5 - py) * max
    s.try = (px - 0.5) * max
    s.ts = 1 + 0.015 * FORCA
    el.style.setProperty('--gx', `${px * 100}%`)
    el.style.setProperty('--gy', `${py * 100}%`)
    el.classList.add('tilt-on')
  }
  const onTiltLeave = (e) => {
    const el = e.target.closest?.('[data-tilt]')
    if (el && !el.contains(e.relatedTarget)) {
      const s = st(el)
      s.trx = 0
      s.try = 0
      s.ts = 1
      el.classList.remove('tilt-on')
    }
  }

  if (temMouse) {
    addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mousemove', onBtnMove, { passive: true })
    document.addEventListener('mousemove', onTiltMove, { passive: true })
    document.addEventListener('mouseout', onBtnLeave, { passive: true })
    document.addEventListener('mouseout', onTiltLeave, { passive: true })
  }

  // ---------- loop ----------
  const barra = document.getElementById('scroll-progress')
  let raf
  const loop = () => {
    const vh = innerHeight
    const max = document.documentElement.scrollHeight - vh
    if (barra) barra.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`

    // parallax de scroll
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      if (!pronto(el)) return
      const r = el.getBoundingClientRect()
      if (r.bottom < -200 || r.top > vh + 200) return
      const fator = Number(el.dataset.parallax || 0.15) * FORCA
      const centro = r.top + r.height / 2 - vh / 2
      const s = st(el)
      s.ty = -centro * fator
      s.y = lerp(s.y, s.ty, 0.12)
      el.style.transform = `translate3d(0, ${s.y.toFixed(2)}px, 0)`
    })

    if (temMouse) {
      // profundidade com o mouse
      const nx = mouseX / innerWidth - 0.5
      const ny = mouseY / vh - 0.5
      document.querySelectorAll('[data-mouse]').forEach((el) => {
        if (!pronto(el)) return
        const forca = Number(el.dataset.mouse || 16) * FORCA
        const s = st(el)
        s.x = lerp(s.x, nx * forca, 0.06)
        s.y = lerp(s.y, ny * forca, 0.06)
        el.style.transform = `translate3d(${s.x.toFixed(2)}px, ${s.y.toFixed(2)}px, 0)`
      })

      estado.forEach((s, el) => {
        if (el.matches('[data-parallax], [data-mouse]') || !pronto(el)) return
        if (el.matches('[data-tilt]')) {
          s.rx = lerp(s.rx, s.trx, 0.1)
          s.ry = lerp(s.ry, s.try, 0.1)
          s.s = lerp(s.s, s.ts, 0.1)
          el.style.transform = `perspective(900px) rotateX(${s.rx.toFixed(2)}deg) rotateY(${s.ry.toFixed(2)}deg) scale(${s.s.toFixed(4)})`
        } else {
          s.x = lerp(s.x, s.tx, 0.15)
          s.y = lerp(s.y, s.ty, 0.15)
          el.style.transform = `translate3d(${s.x.toFixed(2)}px, ${s.y.toFixed(2)}px, 0)`
        }
      })
    }
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)

  return () => {
    cancelAnimationFrame(raf)
    removeEventListener('mousemove', onMove)
    document.removeEventListener('mousemove', onBtnMove)
    document.removeEventListener('mousemove', onTiltMove)
    document.removeEventListener('mouseout', onBtnLeave)
    document.removeEventListener('mouseout', onTiltLeave)
  }
}
