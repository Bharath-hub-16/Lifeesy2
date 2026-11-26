import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import './product-overview.css'

type ProductOverviewPlayerProps = { onExit: () => void }

export default function ProductOverviewPlayer({ onExit }: ProductOverviewPlayerProps) {
  const playerRef = useRef<HTMLElement>(null)
  const exitButtonRef = useRef<HTMLButtonElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const scrollY = window.scrollY
    const body = document.body
    const root = document.documentElement
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    const previousScrollBehavior = root.style.scrollBehavior
    const originalStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    }

    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth + (Number.parseFloat(originalStyles.paddingRight) || 0)}px`

    const focusFrame = window.requestAnimationFrame(() => exitButtonRef.current?.focus())
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onExit()
        return
      }
      if (event.key !== 'Tab' || !playerRef.current) return
      const focusable = Array.from(playerRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])',
      ))
      if (!focusable.length) {
        event.preventDefault()
        playerRef.current.focus()
        return
      }
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!playerRef.current.contains(document.activeElement)) {
        event.preventDefault()
        first.focus()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    void videoRef.current?.play().catch(() => {
      // Autoplay may be blocked by browser settings; the native controls remain available.
    })

    return () => {
      window.cancelAnimationFrame(focusFrame)
      window.removeEventListener('keydown', handleKeyDown)
      body.style.position = originalStyles.position
      body.style.top = originalStyles.top
      body.style.left = originalStyles.left
      body.style.right = originalStyles.right
      body.style.width = originalStyles.width
      body.style.overflow = originalStyles.overflow
      body.style.paddingRight = originalStyles.paddingRight
      root.style.scrollBehavior = 'auto'
      window.scrollTo(0, scrollY)
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [onExit])

  return (
    <motion.div
      className="product-overview-backdrop"
      role="presentation"
      initial={reducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0.01 : 0.2, ease: 'easeOut' }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onExit()
      }}
    >
      <motion.section
        ref={playerRef}
        className="product-overview-player"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-overview-title"
        tabIndex={-1}
        initial={reducedMotion ? false : { opacity: 0, y: 16, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.99 }}
        transition={{ duration: reducedMotion ? 0.01 : 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="product-overview-header">
          <h2 id="product-overview-title">Products overview</h2>
          <button ref={exitButtonRef} className="product-overview-exit" type="button" onClick={onExit} aria-label="Exit video and return to the website">
            <span>Exit</span><X size={18} aria-hidden="true" />
          </button>
        </header>
        <video
          ref={videoRef}
          className="product-overview-video"
          src="/videos/lifessy_showcase_web.mp4"
          controls
          autoPlay
          playsInline
          preload="metadata"
          aria-label="Lifessy Corp product showcase video"
        />
      </motion.section>
    </motion.div>
  )
}
