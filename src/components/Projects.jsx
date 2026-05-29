import { projects } from "../data/data";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">

        <p className="section-label animate-fade-up delay-1">
          Projects
        </p>

        <h2 className="section-title animate-fade-up delay-2">
          Featured Work
        </h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article
              key={index}
              className={`${styles.projectCard} animate-fade-up delay-${index + 2}`}
            >
              
              {/* GLOW */}
              <div className={styles.cardGlow}></div>

              {/* TOP */}
              <div className={styles.header}>
                <span className={styles.category}>
                  {project.category}
                </span>

                <span className={styles.period}>
                  {project.period}
                </span>
              </div>

              {/* NUMBER */}
              <span className={styles.number}>
                0{index + 1}
              </span>

              {/* TITLE */}
              <h3 className={styles.title}>
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className={styles.description}>
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className={styles.techStack}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={styles.tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
