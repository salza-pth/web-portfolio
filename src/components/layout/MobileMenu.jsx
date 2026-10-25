import { useEffect, useId, useRef, useState } from 'react'
import styles from './MobileMenu.module.css'

export function MobileMenu({ items, activeId, onNavigate }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const buttonRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (open) {
      const first = panelRef.current?.querySelector('a')
      first?.focus()
    }
  }, [open])

  const handleItemClick = (event, id) => {
    onNavigate(event, id)
    setOpen(false)
    buttonRef.current?.focus()
  }

  return (
    <div className={styles.wrap}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={styles.icon}
          data-open={open ? 'true' : undefined}
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </span>
      </button>

      <ul
        id={panelId}
        ref={panelRef}
        className={styles.panel}
        data-open={open ? 'true' : undefined}
        hidden={!open}
      >
        {items.map((item) => {
          const isActive = activeId === item.id
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={styles.link}
                aria-current={isActive ? 'true' : undefined}
                data-active={isActive ? 'true' : undefined}
                onClick={(e) => handleItemClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
