import { education } from "../data/data";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className="container">
        
        <p className="section-label animate-fade-up delay-1">
          Education
        </p>

        <h2 className="section-title animate-fade-up delay-2">
          Academic Background
        </h2>

        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} animate-fade-up delay-${index + 2}`}
            >
              
              {/* TIMELINE DOT */}
              <div className={styles.timelineDot}>
                <span className={styles.dotIcon}>
                  {edu.icon}
                </span>
              </div>

              {/* CARD */}
              <div className={styles.card}>
                <div className={styles.cardGlow}></div>

                <div className={styles.cardHeader}>
                  
                  <div className={styles.left}>
                    <span className={styles.period}>
                      {edu.year}
                    </span>

                    <h3 className={styles.degree}>
                      {edu.degree}
                    </h3>

                    <p className={styles.institution}>
                      {edu.institution}
                    </p>

                    <span className={styles.location}>
                      {edu.location}
                    </span>
                  </div>

                  <div className={styles.gpaBox}>
                    <span className={styles.gpaValue}>
                      {edu.gpa.split(" ")[0]}
                    </span>

                    <span className={styles.gpaLabel}>
                      GPA
                    </span>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
