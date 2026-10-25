import { useEffect, useId, useRef, useState } from 'react'
import { techLogo } from '../../data/techLogos.js'
import { ProjectLinkIcon, TechNeutralIcon } from './ProjectLinkIcon.jsx'
import styles from './ProjectModal.module.css'

function TechItem({ name }) {
  const logo = techLogo(name)
  const [showLogo, setShowLogo] = useState(Boolean(logo))

  return (
    <li className={styles.techItem}>
      <span className={styles.techMark}>
        {showLogo ? (
          <img
            className={styles.techLogo}
            src={logo}
            alt=""
            onError={() => setShowLogo(false)}
          />
        ) : (
          <span className={styles.techNeutral}>
            <TechNeutralIcon />
          </span>
        )}
      </span>
      <span className={styles.techName}>{name}</span>
    </li>
  )
}

function ModalImage({ project }) {
  const [available, setAvailable] = useState(true)

  if (!available) {
    return (
      <div className={styles.placeholder} aria-hidden="true">
        <span className={styles.placeholderTitle}>{project.title}</span>
      </div>
    )
  }

  return (
    <img
      className={styles.image}
      src={project.image}
      alt={`${project.title} preview`}
      onError={() => setAvailable(false)}
    />
  )
}

export function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  const titleId = useId()

  useEffect(() => {
    if (!project) return

    const previouslyFocused = document.activeElement
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
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
  }, [project, onClose])

  if (!project) return null

  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={handleBackdrop}
    >
      <div className={styles.dialog}>
        <button
          type="button"
          ref={closeRef}
          className={styles.close}
          onClick={onClose}
          aria-label="Close project details"
        >
          <span aria-hidden="true" className={styles.closeMark}>
            <span />
            <span />
          </span>
        </button>

        <div className={styles.media}>
          <ModalImage project={project} />
          <span className={styles.mediaLabel}>My Contribution</span>
        </div>

        <div className={styles.body}>
          <ul className={styles.chips}>
            <li className={styles.chip}>{project.category}</li>
            <li className={styles.chip}>{project.year}</li>
          </ul>
          <h2 id={titleId} className={styles.title}>
            {project.title}
          </h2>

          <p className={styles.overview}>{project.description}</p>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>My Contribution</h3>
            <ul className={styles.contribution}>
              {project.contribution.map((point) => (
                <li key={point} className={styles.contributionItem}>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Tools &amp; Technologies</h3>
            <ul className={styles.tech}>
              {project.technologies.map((name) => (
                <TechItem key={name} name={name} />
              ))}
            </ul>
          </div>

          {project.links.length > 0 && (
            <div className={styles.linksBlock}>
              <h3 className={styles.blockTitle}>Explore This Project</h3>
              <ul className={styles.links}>
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      className={styles.link}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ProjectLinkIcon type={link.type} />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
