"use client";

import { useState, useEffect } from "react";
import { navLinks, personal } from "../data/data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* LOGO */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoGlass}>SR</span>
        </a>

        {/* LINKS */}
        <ul
          className={`${styles.links} ${menuOpen ? styles.open : ""}`}
          suppressHydrationWarning
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.link}
                onClick={() => setMenuOpen(false)}
              >
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

        {/* BURGER */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
