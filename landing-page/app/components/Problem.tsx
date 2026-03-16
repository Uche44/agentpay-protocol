import styles from './Problem.module.css'

const problems = [
  {
    icon: '🔑',
    title: 'API Keys & Subscriptions',
    desc: 'Every service requires manual setup, onboarding, and human-configured credentials.',
  },
  {
    icon: '🧾',
    title: 'Manual Billing',
    desc: 'Invoices, billing cycles, and payment approval flows block autonomous operation.',
  },
  {
    icon: '🏛️',
    title: 'Centralized Gateways',
    desc: 'Payment rails are controlled by intermediaries, creating bottlenecks and single points of failure.',
  },
  {
    icon: '⛔',
    title: 'Pre-configured Access',
    desc: 'Agents cannot acquire new capabilities at runtime — access must be set up by humans in advance.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">The Problem</span>
          <h2 className={styles.title}>
            AI Agents Are Capable.<br />
            Payments Infrastructure Is Not.
          </h2>
          <p className={styles.desc}>
            Modern AI agents can research, orchestrate, and automate complex workflows—
            but when it comes to paying for services, they hit a wall. The financial
            infrastructure holding them back was built for humans, not machines.
          </p>
        </div>

        <div className={styles.grid}>
          {problems.map((p, i) => (
            <div key={i} className={`card ${styles.card}`}>
              <span className={styles.icon}>{p.icon}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.quote}>
          <blockquote>
            "These models are not designed for autonomous systems. Agents cannot purchase
            services dynamically, payments cannot occur automatically per request, and
            service access must be pre-configured by humans."
          </blockquote>
          <cite className="mono">— AgentPay Protocol Documentation</cite>
        </div>
      </div>
    </section>
  )
}
