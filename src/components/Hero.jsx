import { personal } from "../data/data";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={`${styles.badge} animate-fade-up delay-1`}>
            <span className={styles.pulse} />
            Available for opportunities
          </div>

          <h1 className={`${styles.name} animate-fade-up delay-2`}>
            {personal.name.split(" ").slice(0, 2).join(" ")}
            <span className={styles.surname}>{personal.name.split(" ").slice(2).join(" ")}</span>
          </h1>

          <p className={`${styles.tagline} animate-fade-up delay-3`}>{personal.tagline}</p>

          <p className={`${styles.about} animate-fade-up delay-4`}>{personal.about}</p>

          <div className={`${styles.actions} animate-fade-up delay-5`}>
            <a href="#projects" className={styles.btnPrimary}>
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a href={`mailto:${personal.email}`} className={styles.btnSecondary}>Get in Touch</a>
          </div>

          <div className={`${styles.contacts} animate-fade-up delay-5`}>
            <a href={`mailto:${personal.email}`} className={styles.contactItem}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {personal.email}
            </a>
            <span className={styles.separator}>·</span>
            <a href={`tel:${personal.phone}`} className={styles.contactItem}>
              {personal.phone}
            </a>
          </div>
        </div>

        <div className={`${styles.visual} animate-fade-up delay-3`}>
          <div className={styles.glowCard}>
            <div className={styles.cardTop}>
              <span className={styles.cardIcon}>🧠</span>
              <span className={styles.cardLabel}>AI & ML Portfolio</span>
            </div>
            <div className={styles.statsGrid}>
              {[
                { value: "3", label: "Projects" },
                { value: "3.9", label: "GPA" },
                { value: "M.Sc", label: "Degree" },
                { value: "AI", label: "Focus" },
              ].map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.techPills}>
              {["Python", "TensorFlow", "NLP", "CNN", "SHAP", "React"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
