import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import type { ProductDetails } from './product-details'
import './product-details.css'

type ProductDetailsModalProps = {
  product: { id: string; name: string; image: string; details: ProductDetails; number: number }
  onClose: () => void
}

export default function ProductDetailsModal({ product, onClose }: ProductDetailsModalProps) {
  const modalRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const scrollY = window.scrollY
    const body = document.body
    const root = document.documentElement
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    const previousScrollBehavior = root.style.scrollBehavior
    const previousStyles = {
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
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth + (Number.parseFloat(previousStyles.paddingRight) || 0)}px`
    }

    const focusFrame = window.requestAnimationFrame(() => {
      if (modalRef.current) modalRef.current.scrollTop = 0
      closeButtonRef.current?.focus()
    })

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.cancelAnimationFrame(focusFrame)
      window.removeEventListener('keydown', handleEscape)
      body.style.position = previousStyles.position
      body.style.top = previousStyles.top
      body.style.left = previousStyles.left
      body.style.right = previousStyles.right
      body.style.width = previousStyles.width
      body.style.overflow = previousStyles.overflow
      body.style.paddingRight = previousStyles.paddingRight
      root.style.scrollBehavior = 'auto'
      window.scrollTo(0, scrollY)
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [onClose])

  const trapFocus = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Tab' || !modalRef.current) return
    const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ))
    if (!focusable.length) {
      event.preventDefault()
      modalRef.current.focus()
      return
    }
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const activeElement = document.activeElement
    if (!modalRef.current.contains(activeElement)) {
      event.preventDefault()
      first.focus()
    } else if (event.shiftKey && activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
      <motion.div
        className="product-details-backdrop"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reducedMotion ? 0.01 : 0.2, ease: 'easeOut' }}
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose()
        }}
      >
        <motion.section
          ref={modalRef}
          className="product-details-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-details-title"
          tabIndex={-1}
          initial={reducedMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.99 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.22, ease: [0.22, 1, 0.36, 1] }}
          onKeyDown={trapFocus}
        >
          <header className="product-details-topbar">
            <span className="product-details-number">PRODUCT {String(product.number).padStart(2, '0')} / 14</span>
            <button ref={closeButtonRef} className="product-details-close" type="button" onClick={onClose} aria-label={`Close details for ${product.name}`}>
              <X size={21} aria-hidden="true" />
            </button>
          </header>
          <div className="product-details-layout">
            <div className="product-details-image-wrap">
              <img className="product-details-image" src={product.image} alt={`${product.name} product`} />
            </div>
            <div className="product-details-copy">
              <span className="product-details-eyebrow">LIFESSY PRODUCT RANGE</span>
              <h2 id="product-details-title">{product.name}</h2>
              <h3 className="product-details-benefits-heading">Product Benefits</h3>
              {product.details.benefitLabel && <h4 className="product-details-list-label">{product.details.benefitLabel}</h4>}
              {product.details.groups?.length ? (
                <div className="product-details-groups">
                  {product.details.groups.map((group) => (
                    <section className="product-details-group" key={group.title}>
                      <h4>{group.title}</h4>
                      <ul>
                        {group.benefits.map((benefit) => <li key={benefit}><Check size={16} aria-hidden="true"/><span>{benefit}</span></li>)}
                      </ul>
                    </section>
                  ))}
                </div>
              ) : (
                <ul className="product-details-list">
                  {(product.details.benefits ?? []).map((benefit) => <li key={benefit}><Check size={16} aria-hidden="true"/><span>{benefit}</span></li>)}
                </ul>
              )}
              {product.details.disclaimer && <p className="product-details-disclaimer">{product.details.disclaimer}</p>}
            </div>
          </div>
        </motion.section>
      </motion.div>
  )
}
