import { useCallback } from 'react'
import { NAV_ITEMS } from '../../data/nav.js'
import { useActiveSection } from '../../hooks/useActiveSection.js'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import { useSmoothScrollTo } from '../../hooks/useSmoothScrollTo.js'
import { MobileMenu } from './MobileMenu.jsx'
import styles from './Navbar.module.css'

const NAV_IDS = NAV_ITEMS.map((item) => item.id)

export function Navbar() {
  const reducedMotion = usePrefersReducedMotion()
  const activeId = useActiveSection(NAV_IDS, { rootMargin: '-72px 0px -55% 0px' })
  const scrollToSection = useSmoothScrollTo()

  const handleNavigate = useCallback(
    (event, id) => {
      scrollToSection(event, id)
    },
    [scrollToSection]
  )

  const handleBrand = useCallback(
    (event) => {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
    },
    [reducedMotion]
  )

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <a href="#top" className={styles.brand} onClick={handleBrand}>
          Salzabilla
        </a>

        <ul className={styles.links}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={styles.link}
                  aria-current={isActive ? 'true' : undefined}
                  data-active={isActive ? 'true' : undefined}
                  onClick={(e) => handleNavigate(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <MobileMenu
          items={NAV_ITEMS}
          activeId={activeId}
          onNavigate={handleNavigate}
        />
      </nav>
    </header>
  )
}
