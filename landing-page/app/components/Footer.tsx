import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMono}>AGENT</span>
              <span className={styles.logoBold}>PAY</span>
            </div>
            <p className={styles.tagline}>
              An open protocol for autonomous payments between AI agents and service providers.
            </p>
            <p className={styles.chain}>Built on Stellar · Soroban Smart Contracts</p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colHead}>Protocol</h4>
            <a href="#how-it-works" className={styles.colLink}>How It Works</a>
            <a href="#architecture" className={styles.colLink}>Architecture</a>
            <a href="#usecases" className={styles.colLink}>Use Cases</a>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colHead}>Documentation</h4>
            <a href="#" className={styles.colLink}>Overview</a>
            <a href="#" className={styles.colLink}>Smart Contract</a>
            <a href="#" className={styles.colLink}>Backend Indexer</a>
            <a href="#" className={styles.colLink}>Provider Nodes</a>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colHead}>Community</h4>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.colLink}>GitHub</a>
            <a href="#" className={styles.colLink}>Discord</a>
            <a href="#" className={styles.colLink}>Twitter / X</a>
          </div>
        </div>

        <hr className="divider" />

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © 2024 AgentPay Protocol. Open source. MIT License.
          </span>
          <span className={styles.note}>
            An early step toward the machine economy.
          </span>
        </div>
      </div>
    </footer>
  )
}
