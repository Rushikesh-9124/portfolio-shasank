"use client";
import { useState, useEffect } from "react";
import { navLinks, personal } from "../data/data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          SR<span className={styles.dot}>.</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${personal.email}`} className={styles.cta}>
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
