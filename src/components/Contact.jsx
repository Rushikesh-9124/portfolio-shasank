import { personal } from "../data/data";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          
          {/* LEFT SIDE */}
          <div className={styles.left}>
            <p className="section-label animate-fade-up delay-1">
              Contact
            </p>

            <h2 className={`${styles.heading} animate-fade-up delay-2`}>
              Let’s create
              <br />
              something impactful
              <br />
              together.
            </h2>

            <p className={`${styles.sub} animate-fade-up delay-3`}>
              I’m actively looking for opportunities in AI/ML,
              Generative AI, Backend Engineering, and Data Science.
              Whether it’s building scalable systems, intelligent
              products, or collaborating on modern AI workflows —
              I’d love to connect.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className={`${styles.right} animate-fade-up delay-4`}>
            
            {/* MAIN EMAIL CARD */}
            <a
              href={`mailto:${personal.email}`}
              className={styles.emailCard}
            >
              <div className={styles.emailGlow}></div>

              <span className={styles.emailLabel}>
                Send an email
              </span>

              <h3 className={styles.emailAddress}>
                {personal.email}
              </h3>

              <div className={styles.arrowWrapper}>
                <svg
                  className={styles.arrow}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7H17V17" />
                </svg>
              </div>
            </a>

            {/* CONTACT GRID */}
            <div className={styles.contactGrid}>
              
              <a
                href={`tel:${personal.phone}`}
                className={styles.contactCard}
              >
                <div className={styles.contactIcon}>
                  📞
                </div>

                <div>
                  <span className={styles.contactType}>
                    Phone
                  </span>

                  <span className={styles.contactValue}>
                    {personal.phone}
                  </span>
                </div>
              </a>

              <a
                href={personal.portfolioUrl}
                className={styles.contactCard}
              >
                <div className={styles.contactIcon}>
                  🌐
                </div>

                <div>
                  <span className={styles.contactType}>
                    Portfolio
                  </span>

                  <span className={styles.contactValue}>
                    View Projects
                  </span>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
