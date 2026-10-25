import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.brand}>Salzabilla</p>
        <div className={styles.notes}>
          <p className={styles.note}>&copy; {year} Salzabilla</p>
          <p className={styles.note}>Designed &amp; built with care.</p>
        </div>
      </div>
    </footer>
  )
}
