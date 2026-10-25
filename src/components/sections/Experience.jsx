import { EXPERIENCES } from '../../data/experience.js'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section
      id="experience"
      className={styles.experience}
      aria-labelledby="experience-heading"
    >
      <div className={styles.intro}>
        <p className={styles.label}>Experience</p>
        <h2 id="experience-heading" className={styles.heading}>
          Where I&rsquo;ve Been Involved
        </h2>
      </div>

      <ol className={styles.timeline}>
        {EXPERIENCES.map((item) => (
          <li key={`${item.role}-${item.organization}`} className={styles.entry}>
            <p className={styles.period}>{item.period}</p>
            <div className={styles.detail}>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.organization}>{item.organization}</p>
              <ul className={styles.points}>
                {item.points.map((point) => (
                  <li key={point} className={styles.point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
