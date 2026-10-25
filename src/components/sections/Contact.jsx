import { CONTACT_EMAIL, SOCIAL_LINKS } from '../../data/contact.js'
import { SocialIcon } from '../ui/SocialIcon.jsx'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <p className={styles.label}>Get in Touch</p>
      <h2 id="contact-heading" className={styles.heading}>
        Let&rsquo;s connect.
      </h2>
      <p className={styles.description}>
        Have an opportunity or a project in mind? Feel free to reach out.
        I&rsquo;d love to connect and learn something new.
      </p>

      <a className={styles.primary} href={`mailto:${CONTACT_EMAIL}`}>
        Get in Touch
      </a>

      <ul className={styles.socials}>
        {SOCIAL_LINKS.map((link) => (
          <li key={link.id}>
            <a
              className={styles.social}
              href={link.href}
              aria-label={link.label}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <SocialIcon name={link.id} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
