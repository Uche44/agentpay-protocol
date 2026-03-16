import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className="section-label">Get Involved</span>
            <h2 className={styles.title}>
              Build the Machine Economy.
            </h2>
            <p className={styles.body}>
              AgentPay is an early-stage open protocol. Whether you&apos;re building AI agents, 
              running service providers, or just interested in the future of autonomous commerce—
              we want to hear from you.
            </p>
            <div className={styles.actions}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on GitHub →
              </a>
              <a href="#architecture" className="btn btn-outline">
                Read the Protocol Docs
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className="mono">agent.py</span>
              </div>
              <pre className={styles.code}>{`# Deposit tokens into the protocol
agent.deposit(amount=100)

# Discover available services
services = protocol.discover()

# Select a service
svc = services.find(type="summarize")

# Submit a request
req = agent.request(
    service=svc,
    input={"text": article}
)

# Result & payment handled on-chain
result = req.await_result()
# → Payment settled automatically ✓`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
