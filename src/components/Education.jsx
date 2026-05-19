import { education } from "../data/data";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" style={{borderTop: "1px solid var(--border)"}}>
      <div className="container">
        <p className="section-label">02 — Education</p>
        <h2 className="section-title">Academic Background</h2>
        <div className={styles.timeline}>
          {education.map((edu, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineDot}>
                <span className={styles.dotIcon}>{edu.icon}</span>
              </div>
              <div className={`card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <div>
                    <p className={styles.period}>{edu.year}</p>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution} — {edu.location}</p>
                  </div>
                  <div className={styles.gpaBox}>
                    <span className={styles.gpaValue}>{edu.gpa.split(" ")[0]}</span>
                    <span className={styles.gpaLabel}>GPA</span>
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
