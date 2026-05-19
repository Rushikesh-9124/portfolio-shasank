import { personal } from "../data/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.ornamentRow}>✦</div>
        <div className={styles.inner}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} {personal.name}
          </p>
          <p className={styles.built}>
            Built with <span className={styles.gold}>♥</span> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
