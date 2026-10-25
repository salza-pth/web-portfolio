import { useEffect, useId, useRef, useState } from 'react'
import styles from './ImagePreview.module.css'

export function ImagePreview({ open, src, alt, title, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const titleId = useId()
  const [imageFailed, setImageFailed] = useState(false)

  useEffect(() => {
    setImageFailed(false)
  }, [src, open])

  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      }
    }
  }, [open, onClose])

  if (!open) return null

  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={handleBackdrop}
    >
      <div className={styles.dialog} ref={dialogRef}>
        <div className={styles.bar}>
          <p id={titleId} className={styles.title}>
            {title}
          </p>
          <button
            type="button"
            ref={closeRef}
            className={styles.close}
            onClick={onClose}
            aria-label="Close preview"
          >
            <span aria-hidden="true" className={styles.closeMark}>
              <span />
              <span />
            </span>
          </button>
        </div>
        <div className={styles.imageWrap}>
          {imageFailed ? (
            <p className={styles.fallback}>
              This image hasn&rsquo;t been added yet. Please check back soon.
            </p>
          ) : (
            <img
              className={styles.image}
              src={src}
              alt={alt}
              onError={() => setImageFailed(true)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
