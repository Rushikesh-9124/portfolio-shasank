import { personal } from "../data/data";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <p className="section-label">01 — About</p>
        <h2 className="section-title">Driven by curiosity,<br />built on data.</h2>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p className={styles.lead}>{personal.about}</p>
            <div className={styles.highlights}>
              {[
                { icon: "🤖", title: "AI & Machine Learning", desc: "Building intelligent systems from data" },
                { icon: "🔬", title: "Deep Learning", desc: "CNN, ResNet50, Transfer Learning" },
                { icon: "💬", title: "Natural Language Processing", desc: "Text classification and language understanding" },
                { icon: "📊", title: "Data Science", desc: "EDA, feature engineering, predictive modeling" },
              ].map((h) => (
                <div key={h.title} className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>{h.icon}</span>
                  <div>
                    <strong className={styles.highlightTitle}>{h.title}</strong>
                    <span className={styles.highlightDesc}>{h.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.side}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Quick Info</h3>
              <ul className={styles.infoList}>
                {[
                  { label: "Degree", value: "M.Sc Computer Science" },
                  { label: "University", value: "SE Missouri State" },
                  { label: "GPA", value: "3.9 / 4.0" },
                  { label: "Grad Year", value: "2026" },
                  { label: "Focus", value: "AI / ML / NLP" },
                  { label: "Status", value: "Open to work" },
                ].map((i) => (
                  <li key={i.label} className={styles.infoItem}>
                    <span className={styles.infoLabel}>{i.label}</span>
                    <span className={styles.infoValue}>{i.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
