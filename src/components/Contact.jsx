import { personal } from "../data/data";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className="section-label">05 — Contact</p>
            <h2 className={styles.heading}>
              Let&apos;s build<br />something<br />
              <span className={styles.accent}>intelligent.</span>
            </h2>
            <p className={styles.sub}>
              I&apos;m actively looking for AI/ML, Data Science, or Python Development roles. 
              Feel free to reach out — I&apos;d love to connect.
            </p>
          </div>

          <div className={styles.right}>
            <a href={`mailto:${personal.email}`} className={styles.emailLink}>
              <span className={styles.emailLabel}>Email me at</span>
              <span className={styles.emailAddress}>{personal.email}</span>
              <svg className={styles.arrow} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            <div className={styles.divider} />

            <div className={styles.contactGrid}>
              <a href={`tel:${personal.phone}`} className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className={styles.contactType}>Phone</span>
                  <span className={styles.contactValue}>{personal.phone}</span>
                </div>
              </a>

              <a href={personal.portfolioUrl} className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </div>
                <div>
                  <span className={styles.contactType}>Portfolio</span>
                  <span className={styles.contactValue}>View my work</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
