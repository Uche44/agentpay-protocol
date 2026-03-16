import styles from './UseCases.module.css'

const cases = [
  {
    icon: '📄',
    title: 'Text Summarization',
    body: 'Research agents purchase article and document summarization services on demand, per-request.',
  },
  {
    icon: '🗄️',
    title: 'Dataset Access',
    body: 'Data-hungry agents pay for access to curated datasets without manual subscription setups.',
  },
  {
    icon: '⚡',
    title: 'Compute Resources',
    body: 'Agents can dynamically acquire GPU compute for inference, training runs, or heavy processing.',
  },
  {
    icon: '📈',
    title: 'Financial Data Feeds',
    body: 'Trading and analysis agents pay for real-time market data feeds on a per-request basis.',
  },
  {
    icon: '🤖',
    title: 'AI Model Inference',
    body: 'Agents outsource specialized inference tasks to provider nodes with optimal models.',
  },
  {
    icon: '🌐',
    title: 'Language Translation',
    body: 'Multilingual agents request translation services at runtime without pre-configured credentials.',
  },
]

export default function UseCases() {
  return (
    <section id="usecases" className={styles.section}>
      <div className="container">
        <div className={styles.topRow}>
          <div>
            <span className="section-label">Use Cases</span>
            <h2 className={styles.title}>
              Any Service. Any Agent.<br />Any Time.
            </h2>
          </div>
          <p className={styles.desc}>
            AgentPay is designed to support an open marketplace of AI services.
            As the protocol matures, any provider can register any service,
            and any agent can discover and pay for it programmatically.
          </p>
        </div>

        <div className={styles.grid}>
          {cases.map((c) => (
            <div key={c.title} className={styles.card}>
              <span className={styles.icon}>{c.icon}</span>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardBody}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
