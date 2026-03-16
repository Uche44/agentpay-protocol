import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgentPay Protocol — Autonomous Payments for AI Agents',
  description:
    'AgentPay is an open protocol enabling autonomous AI agents to discover services, request work, and settle payments on-chain — without any human intervention. Built on Stellar / Soroban.',
  keywords: ['AgentPay', 'AI agents', 'autonomous payments', 'Stellar', 'Soroban', 'smart contracts', 'machine economy', 'decentralized'],
  openGraph: {
    title: 'AgentPay Protocol',
    description: 'An open protocol for machine-to-machine commerce. AI agents pay for services autonomously, on-chain.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
