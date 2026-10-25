import styles from './About.module.css'

const FOCUS_AREAS = [
  {
    title: 'Database Systems',
    description: 'Working with SQL, MySQL, and structured data management.',
  },
  {
    title: 'Data Engineering & Analytics',
    description: 'Exploring data processing, analysis, and visualization.',
  },
  {
    title: 'Web Development',
    description: 'Learning to build functional interfaces and web applications.',
  },
]

export function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.text}>
        <p className={styles.label}>About</p>

        <h2 id="about-heading" className={styles.heading}>
          A Little About Me
        </h2>

        <p className={styles.paragraph}>
          Hi! I&rsquo;m Salzabilla, a fifth-semester Computer Science student at
          BINUS University interested in database systems, data engineering,
          data analytics, and web development. Through coursework and projects,
          I&rsquo;ve explored database management with SQL and MySQL,
          data-related tasks using Python and R, data visualization with Power
          BI and Tableau, and data processing tools such as Hadoop, Apache
          Airflow, and Pentaho. I&rsquo;ve also worked with HTML, CSS,
          JavaScript, React, and Figma for web development and interface design.
        </p>

        <p className={styles.paragraph}>
          Beyond academics, I&rsquo;m involved in student organizations, where I
          develop my teamwork, communication, and project coordination skills. I
          enjoy learning through hands-on projects and collaboration while
          continuing to expand my technical knowledge.
        </p>
      </div>

      <aside className={styles.aside} aria-label="What I'm exploring">
        <p className={styles.asideLabel}>What I&rsquo;m Exploring</p>
        <ul className={styles.focusList}>
          {FOCUS_AREAS.map((area) => (
            <li key={area.title} className={styles.focusItem}>
              <span className={styles.focusTitle}>{area.title}</span>
              <span className={styles.focusDescription}>{area.description}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}
