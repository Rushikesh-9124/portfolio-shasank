import { personal } from "../data/data";
import styles from "./About.module.css";

export default function About() {
  const highlights = [
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      desc: "Building scalable intelligent systems using modern ML pipelines",
    },
    {
      icon: "🧠",
      title: "LLMs & RAG Systems",
      desc: "Optimizing generative AI workflows with vector databases",
    },
    {
      icon: "⚡",
      title: "Backend Engineering",
      desc: "FastAPI microservices, ETL pipelines, and workflow automation",
    },
    {
      icon: "📊",
      title: "Data & Analytics",
      desc: "EDA, feature engineering, distributed processing, and inference optimization",
    },
  ];

  const info = [
    { label: "Degree", value: "M.Sc Computer Science" },
    { label: "University", value: "SE Missouri State" },
    { label: "GPA", value: "3.9 / 4.0" },
    { label: "Graduation", value: "2026" },
    { label: "Focus", value: "AI / ML / NLP" },
    { label: "Status", value: "Open to Work" },
  ];

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <p className="section-label animate-fade-up delay-1">
          About Me
        </p>

        <h2 className="section-title animate-fade-up delay-2">
          Engineering intelligent
          <br />
          systems with modern AI.
        </h2>

        <div className={styles.grid}>
          
          {/* LEFT */}
          <div className={styles.text}>
            <p className={`${styles.lead} animate-fade-up delay-3`}>
              {personal.about}
            </p>

            <div className={styles.highlights}>
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`${styles.highlightItem} animate-fade-up delay-${index + 2}`}
                >
                  <div className={styles.highlightIcon}>
                    {item.icon}
                  </div>

                  <div>
                    <h3 className={styles.highlightTitle}>
                      {item.title}
                    </h3>

                    <p className={styles.highlightDesc}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className={`${styles.side} animate-fade-up delay-4`}>
            <div className={styles.infoCard}>
              <div className={styles.cardGlow}></div>

              <h3 className={styles.infoTitle}>
                Quick Info
              </h3>

              <ul className={styles.infoList}>
                {info.map((item) => (
                  <li
                    key={item.label}
                    className={styles.infoItem}
                  >
                    <span className={styles.infoLabel}>
                      {item.label}
                    </span>

                    <span className={styles.infoValue}>
                      {item.value}
                    </span>
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
