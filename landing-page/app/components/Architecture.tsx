import styles from './Architecture.module.css'

const components = [
  {
    num: 'A',
    title: 'Smart Contract Layer',
    subtitle: 'Rust · Soroban SDK',
    desc: 'The trust foundation of the protocol. Stores balances, manages service registrations, records requests, and executes payment settlement. All logic is on-chain.',
    bullets: ['Agent balance management', 'Service registration', 'Payment settlement', 'Event emission'],
  },
  {
    num: 'B',
    title: 'Backend Indexer',
    subtitle: 'Python · FastAPI · PostgreSQL',
    desc: 'Listens to blockchain events and stores them in a relational database for efficient querying. Exposes a REST API for agents and developers.',
    bullets: ['Indexes registered services', 'Tracks requests & payments', 'REST API for querying', 'Provider earnings tracking'],
  },
  {
    num: 'C',
    title: 'Provider Nodes',
    subtitle: 'Independent Operators',
    desc: 'Service providers run nodes that monitor the protocol for new requests. When a request appears for a registered service, the provider executes and confirms on-chain.',
    bullets: ['Monitor contract events', 'Execute requested tasks', 'Submit on-chain confirmation', 'Receive automatic payment'],
  },
  {
    num: 'D',
    title: 'Agent Clients',
    subtitle: 'SDK · Direct Contract Calls',
    desc: 'Autonomous software agents interact via an SDK or direct contract calls to deposit funds, discover services, submit requests and receive results.',
    bullets: ['Token deposits', 'Service discovery', 'Request submission', 'Result reception'],
  },
]

export default function Architecture() {
  return (
    <section id="architecture" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Architecture</span>
          <h2 className={styles.title}>
            Four Components.<br />One Cohesive Protocol.
          </h2>
        </div>

        <div className={styles.grid}>
          {components.map((c) => (
            <div key={c.num} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.letter}>{c.num}</span>
                <div>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <span className={styles.cardSub}>{c.subtitle}</span>
                </div>
              </div>
              <p className={styles.cardDesc}>{c.desc}</p>
              <ul className={styles.list}>
                {c.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.security}>
          <div className={styles.secHead}>
            <span className="section-label" style={{ margin: 0 }}>Security Design</span>
          </div>
          <div className={styles.secGrid}>
            <div className={styles.secItem}>
              <h4>Authorization</h4>
              <p>Only authorized actors may perform specific actions. Only providers can register services, only request owners can cancel, only providers can claim payment.</p>
            </div>
            <div className={styles.secItem}>
              <h4>Balance Verification</h4>
              <p>All requests require sufficient agent balances before being recorded. This prevents providers from fulfilling requests that cannot be paid.</p>
            </div>
            <div className={styles.secItem}>
              <h4>Immutable Payment Logic</h4>
              <p>Payment settlement is executed entirely within the smart contract to prevent any off-chain manipulation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
