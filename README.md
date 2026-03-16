# AgentPay Protocol

Autonomous payments for AI agents on Stellar.

AgentPay is an open protocol that enables **AI agents to autonomously pay for services, APIs, data, and computation** using smart contracts.

The project is built on the Stellar network using Soroban smart contracts and provides infrastructure for **machine-to-machine commerce**.

---

# Motivation

AI agents increasingly rely on external services such as:

* APIs
* datasets
* compute resources
* model inference endpoints

Today these services are accessed through centralized billing systems such as:

* API keys
* subscriptions
* manual payments

These models are not suitable for autonomous agents.

AgentPay introduces a decentralized payment layer that allows agents to **pay per request without human intervention**.

---

# Vision

AgentPay enables a new economic model called the **Agent Economy**, where software agents can:

* discover services
* purchase resources
* collaborate economically
* transact autonomously

Example workflow:

AI agent → requests summarization
Provider → generates summary
Smart contract → releases payment

---

# Architecture

The system consists of five main components.

## Smart Contract

The core protocol runs on Soroban smart contracts deployed on Stellar.

Responsibilities:

* manage agent balances
* register services
* record service requests
* release payments to providers

Location:

```
contracts/agentpay/
```

---

## Backend Indexer

The backend indexer tracks contract events and provides an API for querying protocol data.

Stack:

* Python
* FastAPI
* PostgreSQL

Responsibilities:

* index services
* index requests
* track payments
* expose REST APIs

Location:

```
backend/indexer/
```

Example API endpoints:

```
GET /services
GET /services/{id}
GET /requests
GET /agents/{address}
```

---

## Provider Node

Providers run a node that listens for service requests and fulfills them.

Responsibilities:

* watch blockchain events
* process requests
* submit results
* claim payment

Example services:

* text summarization
* translation
* weather data
* search APIs

Location:

```
provider/provider-node/
```

---

## Agent SDK

The SDK simplifies interaction with the protocol.

Developers can use it to build AI agents that purchase services.

Location:

```
sdk/agentpay-sdk/
```

Example usage:

```
const agent = new AgentPayClient(wallet)

await agent.deposit(100)

await agent.requestService({
  serviceId: 1,
  input: "Summarize this article"
})
```

---

## Example Agents

Example agents demonstrate how the protocol can be used.

Examples include:

* research agent
* content generation agent
* trading assistant

Location:

```
examples/
```

---

# Project Structure

```
agentpay-protocol/

contracts/
   agentpay/

backend/
   indexer/

provider/
   provider-node/

sdk/
   agentpay-sdk/

examples/

docs/

README.md
CONTRIBUTING.md
```

---

# MVP Features

AgentPay MVP includes:

* agent wallet deposits
* service registration
* service requests
* payment settlement
* backend indexing
* provider nodes
* SDK for developers

---

# Quick Start

## Clone Repository

```
git clone https://github.com/yourname/agentpay-protocol
cd agentpay-protocol
```

---

## Build Smart Contract

```
stellar contract build
```

---

## Run Backend Indexer

```
cd backend/indexer
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## Run Provider Node

```
cd provider/provider-node
python provider.py
```

---

## Run Example Agent

```
cd examples/research-agent
python agent.py
```

---

# Roadmap

### v0.1 — MVP

* smart contract protocol
* Python indexer
* provider node
* example agents

### v0.2 — Marketplace

* service discovery
* provider metadata
* categories

### v0.3 — Trust & Reputation

* provider reputation
* request verification
* dispute resolution

### v1.0 — Agent Economy

* autonomous service discovery
* agent-to-agent payments
* decentralized service marketplace

---

# Contributing

We welcome contributions from developers interested in:

* blockchain development
* AI agents
* distributed systems
* backend infrastructure

See `CONTRIBUTING.md` for guidelines.

---

# License

MIT License
