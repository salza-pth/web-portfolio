import { useState } from 'react'
import { ACHIEVEMENTS } from '../../data/achievements.js'
import { ImagePreview } from '../ui/ImagePreview.jsx'
import styles from './Achievements.module.css'

function AchievementCard({ item, onPreview }) {
  return (
    <article className={styles.card}>
      <p className={styles.category}>{item.category}</p>
      <h3 className={styles.title}>{item.title}</h3>

      <ul className={styles.meta}>
        <li className={styles.metaItem}>{item.year}</li>
        {item.meta.map((entry) => (
          <li key={entry} className={styles.metaItem}>
            {entry}
          </li>
        ))}
      </ul>

      <p className={styles.description}>{item.description}</p>

      <button
        type="button"
        className={styles.action}
        onClick={() => onPreview(item)}
      >
        View Award
      </button>
    </article>
  )
}

export function Achievements() {
  const [preview, setPreview] = useState(null)

  return (
    <section
      id="achievements"
      className={styles.achievements}
      aria-labelledby="achievements-heading"
    >
      <div className={styles.intro}>
        <p className={styles.label}>Achievements &amp; Certifications</p>
        <h2 id="achievements-heading" className={styles.heading}>
          Milestones &amp; Recognition
        </h2>
        <p className={styles.supporting}>
          A collection of achievements and learning experiences that reflect my
          growth in technology and data.
        </p>
      </div>

      <div className={styles.grid}>
        {ACHIEVEMENTS.map((item) => (
          <AchievementCard key={item.id} item={item} onPreview={setPreview} />
        ))}
      </div>

      <ImagePreview
        open={Boolean(preview)}
        src={preview?.image}
        alt={preview?.imageAlt}
        title={preview?.title}
        onClose={() => setPreview(null)}
      />
    </section>
  )
}
