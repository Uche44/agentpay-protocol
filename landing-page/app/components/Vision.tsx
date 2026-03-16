import styles from './Vision.module.css'

export default function Vision() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className="section-label">The Vision</span>
            <h2 className={styles.title}>
              A Decentralized Economy Where Machines Transact Freely
            </h2>
            <p className={styles.body}>
              AgentPay&apos;s long-term vision is a world where AI agents operate as first-class economic actors—
              discovering services autonomously, negotiating terms on-chain, and settling payments without
              any human in the loop.
            </p>
            <p className={styles.body}>
              By combining smart contracts on Stellar&apos;s Soroban platform with event-driven
              infrastructure and open service registries, the protocol provides the financial
              rails that a machine-to-machine economy needs.
            </p>
            <a href="#how-it-works" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              See the Protocol in Action →
            </a>
          </div>

          <div className={styles.right}>
            <div className={styles.scenario}>
              <div className={styles.scenarioLabel}>
                <span className="mono">EXAMPLE SCENARIO</span>
              </div>
              <div className={styles.steps}>
                {[
                  { n: '01', text: 'An AI research agent needs article summarization' },
                  { n: '02', text: 'It searches for available summarization services on the protocol' },
                  { n: '03', text: 'It selects a provider based on price and reputation' },
                  { n: '04', text: 'It submits a request and pays automatically via smart contract' },
                  { n: '05', text: 'The provider fulfills the request and receives payment instantly' },
                ].map(({ n, text }) => (
                  <div key={n} className={styles.step}>
                    <span className={styles.stepNum}>{n}</span>
                    <span className={styles.stepText}>{text}</span>
                  </div>
                ))}
                <div className={styles.noHuman}>
                  <span className="mono">✓ ZERO HUMAN INTERVENTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
