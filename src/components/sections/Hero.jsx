import { useState } from 'react'
import { useSmoothScrollTo } from '../../hooks/useSmoothScrollTo.js'
import styles from './Hero.module.css'

const PROFILE_IMAGE_SRC = '/images/profile.jpg'
const CV_URL = '/files/cv.pdf'
const CV_READY = true

export function Hero() {
  const scrollToSection = useSmoothScrollTo()
  const [imageAvailable, setImageAvailable] = useState(true)
  const hasCv = CV_READY && CV_URL.trim().length > 0

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.text}>
        <p className={styles.eyebrow}>Computer Science student</p>

        <h1 id="hero-heading" className={styles.name}>
          Salzabilla Putri Hambali
        </h1>

        <p className={styles.intro}>
          A fifth-semester Computer Science student at BINUS University
          interested in web development, database systems, data engineering,
          and data analytics.
        </p>

        <p className={styles.availability}>
          Currently exploring how technology and data can be used to solve
          practical problems.
        </p>

        <div className={styles.actions}>
          {hasCv ? (
            <a
              href={CV_URL}
              className={styles.primaryCta}
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          ) : (
            <button
              type="button"
              className={styles.primaryCta}
              disabled
              aria-disabled="true"
              aria-describedby="cv-status"
            >
              View CV
              <span id="cv-status" className="sr-only">
                available soon
              </span>
            </button>
          )}
          <a
            href="#projects"
            className={styles.secondaryCta}
            onClick={(event) => scrollToSection(event, 'projects')}
          >
            My Journey
          </a>
        </div>
      </div>

      <div className={styles.portrait}>
        {imageAvailable ? (
          <img
            className={styles.portraitImage}
            src={PROFILE_IMAGE_SRC}
            alt="Portrait of Salzabilla Putri Hambali"
            width="480"
            height="600"
            loading="eager"
            onError={() => setImageAvailable(false)}
          />
        ) : (
          <div className={styles.portraitFallback} role="img" aria-label="Portrait of Salzabilla Putri Hambali">
            <span aria-hidden="true">SPH</span>
          </div>
        )}
      </div>
    </section>
  )
}
