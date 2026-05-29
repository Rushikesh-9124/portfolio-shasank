import { personal } from "../data/data";
import styles from "./Hero.module.css";

export default function Hero() {
  const firstName = personal.name.split(" ").slice(0, 2).join(" ");
  const lastName = personal.name.split(" ").slice(2).join(" ");

  const stats = [
    { value: "4+", label: "Years Exp" },
    { value: "3.9", label: "GPA" },
    { value: "M.Sc", label: "Degree" },
    { value: "AI/ML", label: "Focus" },
  ];

  const technologies = [
    "Python",
    "FastAPI",
    "TensorFlow",
    "RAG",
    "LLMs",
    "Docker",
    "Qdrant",
    "PyTorch",
  ];

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <div className={`${styles.badge} animate-fade-up delay-1`}>
            <span className={styles.pulse}></span>
            Available for opportunities
          </div>

          <h1 className={`${styles.name} animate-fade-up delay-2`}>
            {firstName}
            <span className={styles.surname}>{lastName}</span>
          </h1>

          <p className={`${styles.tagline} animate-fade-up delay-3`}>
            {personal.tagline}
          </p>

          <p className={`${styles.about} animate-fade-up delay-4`}>
            {personal.about}
          </p>

          <div className={`${styles.actions} animate-fade-up delay-5`}>
            <a href="#projects" className={styles.btnPrimary}>
              View Projects

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7H17V17" />
              </svg>
            </a>

            <a
              href={`mailto:${personal.email}`}
              className={styles.btnSecondary}
            >
              Get in Touch
            </a>
          </div>

          <div className={`${styles.contacts} animate-fade-up delay-5`}>
            <a
              href={`mailto:${personal.email}`}
              className={styles.contactItem}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>

              {personal.email}
            </a>

            <span className={styles.separator}>•</span>

            <a
              href={`tel:${personal.phone}`}
              className={styles.contactItem}
            >
              {personal.phone}
            </a>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className={`${styles.visual} animate-fade-up delay-4`}>
          <div className={styles.glowCard}>
            
            <div className={styles.cardTop}>
              <span className={styles.cardIcon}>🧠</span>

              <div>
                <h3 className={styles.cardLabel}>
                  AI & ML Engineer
                </h3>
              </div>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statValue}>
                    {stat.value}
                  </span>

                  <span className={styles.statLabel}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.techPills}>
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollLine}></span>
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
