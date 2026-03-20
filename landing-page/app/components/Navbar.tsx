'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMono}>STELLAR AGENT</span>
          <span className={styles.logoBold}>PAY</span>
        </Link>

        <div className={styles.links}>
          <a href="#problem" className={styles.link}>Problem</a>
          <a href="#how-it-works" className={styles.link}>How It Works</a>
          <a href="#architecture" className={styles.link}>Architecture</a>
          <a href="#usecases" className={styles.link}>Use Cases</a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.ctaBtn}`}
          >
            View Docs →
          </a>
        </div>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={open ? styles.burgerTopOpen : styles.burgerTop} />
          <span className={open ? styles.burgerBotOpen : styles.burgerBot} />
        </button>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          <a href="#problem" className={styles.mobileLink} onClick={() => setOpen(false)}>Problem</a>
          <a href="#how-it-works" className={styles.mobileLink} onClick={() => setOpen(false)}>How It Works</a>
          <a href="#architecture" className={styles.mobileLink} onClick={() => setOpen(false)}>Architecture</a>
          <a href="#usecases" className={styles.mobileLink} onClick={() => setOpen(false)}>Use Cases</a>
          <a href="#" className={`btn btn-primary`} style={{ margin: '1rem' }}>View Docs →</a>
        </div>
      )}
    </nav>
  )
}
