import { skills } from "../data/data";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">

        <p className="section-label animate-fade-up delay-1">
          Skills
        </p>

        <h2 className="section-title animate-fade-up delay-2">
          Technical Expertise
        </h2>

        <div className={styles.grid}>
          {Object.entries(skills).map(
            ([category, items], index) => (
              <div
                key={category}
                className={`${styles.skillCard} animate-fade-up delay-${(index % 4) + 2}`}
              >
                
                {/* GLOW */}
                <div className={styles.cardGlow}></div>

                {/* HEADER */}
                <div className={styles.categoryHeader}>
                  <span className={styles.dot}></span>

                  <h3 className={styles.categoryName}>
                    {category}
                  </h3>
                </div>

                {/* TAGS */}
                <div className={styles.tags}>
                  {items.map((item) => (
                    <span
                      key={item}
                      className={styles.tag}
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}
