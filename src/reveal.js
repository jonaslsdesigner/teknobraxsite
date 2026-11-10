/**
 * Animações de entrada.
 * - Elementos com [data-reveal] aparecem quando entram na tela (o hero já entra no load).
 * - Pais com [data-stagger="tipo"] aplicam o reveal em cada filho, em sequência.
 *   Opcional: data-stagger-step (ms entre filhos, padrão 130) e data-stagger-start (ms).
 * Ao terminar, o atributo é removido para não interferir em hovers/animações próprias.
 */
// Fator de velocidade dos atrasos (0.9 = 10% mais rápido). As durações ficam no index.css.
const VEL = 0.9

export function iniciarReveal() {
  document.querySelectorAll('[data-stagger]').forEach((pai) => {
    const tipo = pai.dataset.stagger || 'up'
    const passo = Number(pai.dataset.staggerStep || 130)
    const inicio = Number(pai.dataset.staggerStart || 0)
    ;[...pai.children].forEach((filho, i) => {
      if (!filho.hasAttribute('data-reveal')) filho.setAttribute('data-reveal', tipo)
      filho.style.setProperty('--d', `${inicio + i * passo}ms`)
    })
  })

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    const d = parseFloat(el.style.getPropertyValue('--d'))
    if (d) el.style.setProperty('--d', `${Math.round(d * VEL)}ms`)
    const dur = parseFloat(el.style.getPropertyValue('--dur'))
    if (dur) el.style.setProperty('--dur', `${Math.round(dur * VEL)}ms`)
  })

  const finalizar = (el) => {
    const limpar = (e) => {
      if (e && e.target !== el) return
      el.removeEventListener('transitionend', limpar)
      el.removeAttribute('data-reveal')
      el.classList.remove('is-visible')
      el.style.removeProperty('--d')
    }
    el.addEventListener('transitionend', limpar)
    // segurança caso o transitionend não dispare
    const total = parseFloat(getComputedStyle(el).getPropertyValue('--d')) + 1800
    setTimeout(limpar, total || 2500)
  }

  const mostrar = (el) => {
    el.classList.add('is-visible')
    finalizar(el)
  }

  const els = document.querySelectorAll('[data-reveal]')
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach((el) => el.removeAttribute('data-reveal'))
    return () => {}
  }

  // mask começa recortado (invisível pro observer) → observa o pai
  const alvoDe = new Map()
  const io = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return
        io.unobserve(e.target)
        ;(alvoDe.get(e.target) || [e.target]).forEach(mostrar)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  )

  els.forEach((el) => {
    const tipo = el.dataset.reveal
    const obs = tipo === 'mask' ? el.parentElement : el
    if (!alvoDe.has(obs)) alvoDe.set(obs, [])
    alvoDe.get(obs).push(el)
  })

  // dois frames: garante que o estado inicial (invisível) foi pintado antes de animar
  requestAnimationFrame(() => requestAnimationFrame(() => alvoDe.forEach((_, obs) => io.observe(obs))))
  return () => io.disconnect()
}
