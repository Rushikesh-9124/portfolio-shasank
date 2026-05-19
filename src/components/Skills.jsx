import { skills } from "../data/data";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" style={{borderTop: "1px solid var(--border)"}}>
      <div className="container">
        <p className="section-label">04 — Skills</p>
        <h2 className="section-title">Technical Expertise</h2>

        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.skillCard}>
              <div className={styles.categoryHeader}>
                <span className={styles.dot} />
                <h3 className={styles.categoryName}>{category}</h3>
              </div>
              <div className={styles.tags}>
                {items.map((item) => (
                  <span key={item} className={styles.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
