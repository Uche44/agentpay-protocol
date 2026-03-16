import styles from './HowItWorks.module.css'

const steps = [
  {
    n: '01',
    title: 'Agent Funding',
    desc: 'Agents deposit tokens into the protocol smart contract, ensuring funds are available to pay for services.',
    tag: 'On-chain deposit',
  },
  {
    n: '02',
    title: 'Service Registration',
    desc: 'Providers register services specifying their address, description, and price per request.',
    tag: 'Provider action',
  },
  {
    n: '03',
    title: 'Service Discovery',
    desc: 'Agents query the indexer API to find available services, evaluating by price, type, and reputation.',
    tag: 'Agent queries indexer',
  },
  {
    n: '04',
    title: 'Service Request',
    desc: 'The agent submits a request to the smart contract. The contract validates balance and parameters before recording.',
    tag: 'Smart contract validates',
  },
  {
    n: '05',
    title: 'Request Fulfillment',
    desc: 'The provider node monitors events, processes the request, and submits completion to the contract.',
    tag: 'Provider responds',
  },
  {
    n: '06',
    title: 'Payment Settlement',
    desc: 'The smart contract releases payment from the agent\'s balance to the provider and emits a payment event.',
    tag: 'Auto settlement',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">How It Works</span>
          <h2 className={styles.title}>
            Six Steps. Zero Manual Steps.
          </h2>
          <p className={styles.subtitle}>
            The AgentPay protocol follows a structured workflow where every step is
            executed programmatically, on-chain, without human intervention.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((s) => (
            <div key={s.n} className={styles.step}>
              <div className={styles.stepHead}>
                <span className={styles.num}>{s.n}</span>
                <span className={styles.tag}>{s.tag}</span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
