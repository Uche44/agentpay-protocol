import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.badge}>
          <span className="mono">Protocol v0.1 · Built on Stellar / Soroban</span>
        </div>

        <h1 className={styles.headline}>
          The Open Protocol<br />
          for <span className={styles.emphasis}>Machine-to-Machine</span><br />
          Commerce
        </h1>

        <p className={styles.sub}>
          AgentPay enables autonomous AI agents to discover services, request work, and settle payments—
          entirely on-chain, without human intervention.
        </p>

        <div className={styles.actions}>
          <a href="#how-it-works" className="btn btn-primary">
            See How It Works ↓
          </a>
          <a href="#architecture" className="btn btn-outline">
            Read the Docs
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>0</span>
            <span className={styles.statLabel}>Human Approvals Required</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>6</span>
            <span className={styles.statLabel}>Steps from Request to Payment</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>∞</span>
            <span className={styles.statLabel}>Services an Agent Can Access</span>
          </div>
        </div>
      </div>

      <div className={styles.ticker}>
        <div className={styles.tickerInner}>
          {[
            'AUTONOMOUS PAYMENTS',
            'SMART CONTRACTS',
            'AI AGENTS',
            'DECENTRALIZED ECONOMY',
            'SOROBAN PROTOCOL',
            'MACHINE COMMERCE',
            'TRUST-MINIMIZED',
          ].concat([
            'AUTONOMOUS PAYMENTS',
            'SMART CONTRACTS',
            'AI AGENTS',
            'DECENTRALIZED ECONOMY',
            'SOROBAN PROTOCOL',
            'MACHINE COMMERCE',
            'TRUST-MINIMIZED',
          ]).map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              {item} <span className={styles.tickerSep}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
