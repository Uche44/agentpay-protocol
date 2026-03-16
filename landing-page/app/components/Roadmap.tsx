import styles from './Roadmap.module.css'

const items = [
  { status: 'done', label: 'Smart Contract Core', desc: 'Agent balances, service registration, request workflow, payment settlement.' },
  { status: 'done', label: 'Backend Indexer', desc: 'Event indexing with FastAPI + PostgreSQL. REST API for querying.' },
  { status: 'done', label: 'Provider Node Framework', desc: 'Provider node architecture for monitoring and fulfilling requests.' },
  { status: 'in-progress', label: 'Agent SDK', desc: 'Developer SDK for easy agent integration with the protocol.' },
  { status: 'planned', label: 'Service Reputation System', desc: 'On-chain reputation scores for providers to help agents choose wisely.' },
  { status: 'planned', label: 'Provider Discovery', desc: 'Decentralized mechanism for agents to discover providers automatically.' },
  { status: 'planned', label: 'Dispute Resolution', desc: 'On-chain dispute resolution for contested or incomplete requests.' },
  { status: 'planned', label: 'Decentralized Marketplace', desc: 'An open marketplace for AI services built on top of the protocol.' },
]

export default function Roadmap() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Roadmap</span>
          <h2 className={styles.title}>
            An Early Step Toward<br />
            a Larger Machine Economy
          </h2>
        </div>

        <div className={styles.list}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.marker}>
                <div className={`${styles.dot} ${styles[item.status]}`} />
              </div>
              <div className={styles.content}>
                <div className={styles.itemHead}>
                  <h3 className={styles.itemTitle}>{item.label}</h3>
                  <span className={`${styles.badge} ${styles[`badge_${item.status}`]}`}>
                    {item.status === 'done' ? 'Shipped' : item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </span>
                </div>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
