import { personal } from "../data/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">

        <div className={styles.topLine}></div>

        <div className={styles.inner}>
          
          {/* LEFT */}
          <div className={styles.left}>
            <h3 className={styles.name}>
              {personal.name}
            </h3>

            <p className={styles.role}>
              AI / ML Engineer
            </p>
          </div>

          {/* CENTER */}
          <div className={styles.center}>
            <p className={styles.copy}>
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <p className={styles.built}>
              Built with Next.js
            </p>

            <div className={styles.status}>
              <span className={styles.dot}></span>
              Available for opportunities
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
