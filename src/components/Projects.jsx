import { projects } from "../data/data";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <p className="section-label">03 — Projects</p>
        <h2 className="section-title">Featured<br />Work</h2>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <article key={i} className={styles.projectCard} style={{ "--accent-color": project.color }}>
              <div className={styles.cardInner}>
                {/* Header */}
                <div className={styles.header}>
                  <span className={styles.category}>{project.category}</span>
                  <span className={styles.period}>{project.period}</span>
                </div>

                {/* Number */}
                <div className={styles.number}>0{i + 1}</div>

                {/* Title */}
                <h3 className={styles.title}>{project.title}</h3>

                {/* Description */}
                <p className={styles.description}>{project.description}</p>

                {/* Tech stack */}
                <div className={styles.techStack}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Accent bar */}
              <div className={styles.accentBar} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
