# AI Agent Payment Protocol

## Overview

This project is a **smart-contract protocol that enables AI agents to autonomously pay for services** such as APIs, data feeds, or computation.

It is built on **Stellar’s Soroban smart contract platform** and demonstrates how autonomous agents can participate in a **machine-to-machine economy** using programmable payments.

The protocol allows:

* Service providers to **register paid services**
* AI agents to **deposit tokens**
* Agents to **request services**
* Providers to **receive payment automatically**

This repository contains the smart contract, example agent interaction scripts, and a demonstration workflow.

---

## Problem

AI agents increasingly rely on external services such as:

* APIs
* datasets
* compute resources
* model inference endpoints

Today these services are typically accessed through:

* API keys
* subscription billing
* centralized payment systems

This makes **automated AI-to-service commerce difficult**.

AI agents cannot easily:

* pay for services autonomously
* pay per request
* interact economically with other machines

---

## Solution

This protocol enables **autonomous micropayments between AI agents and service providers**.

Instead of subscriptions, services can be priced **per request**, allowing agents to dynamically purchase only what they need.

Example flow:

1. Service provider registers a service and sets a price.
2. AI agent deposits tokens into the contract.
3. The agent requests the service.
4. The provider fulfills the request.
5. The smart contract releases payment to the provider.

This creates a **trust-minimized pay-per-use infrastructure for AI services**.

---

## Architecture

The system consists of three components:

### 1. Smart Contract

Responsible for:

* storing agent balances
* registering services
* recording service requests
* releasing payments

### 2. AI Agent (Off-Chain)

The AI agent interacts with the contract to:

* discover services
* request services
* spend tokens

### 3. Service Provider

Service providers:

* register services
* fulfill service requests
* receive payment through the contract

---

## System Flow

```
AI Agent
   │
   │ requests service
   ▼
Smart Contract
   │
   │ verifies balance and records request
   ▼
Service Provider
   │
   │ delivers service result
   ▼
Smart Contract
   │
   │ releases payment
   ▼
Provider Wallet
```

---

## Smart Contract Features

### Agent Wallet

Agents can deposit funds and use them to purchase services.

Functions:

* `deposit(agent, amount)`
* `get_balance(agent)`

---

### Service Registry

Providers can register services and define pricing.

Functions:

* `register_service(provider, price)`
* `get_service(service_id)`

Example services:

* text summarization
* weather data API
* research dataset access
* image generation

---

### Service Requests

Agents can request services by referencing a service ID.

Functions:

* `request_service(agent, service_id)`

The contract checks:

* agent balance
* service availability

If valid, the request is recorded.

---

### Payment Settlement

Once the provider fulfills the request, payment is released.

Functions:

* `complete_request(request_id)`

The contract transfers tokens from the agent’s balance to the provider.

---

### Event Logging

The contract emits events to allow off-chain systems to track activity.

Events include:

* `service_registered`
* `service_requested`
* `payment_released`

These events allow AI agents or monitoring systems to react in real time.

---

## Project Structure

```
ai-agent-payments/
│
├── contracts/
│   ├── contract.rs
│   ├── storage.rs
│   ├── services.rs
│   └── payments.rs
│
├── src/
│   └── lib.rs
│
├── tests/
│   └── contract_tests.rs
│
├── scripts/
│   └── agent_example.py
│
├── Cargo.toml
└── README.md
```

---

## Example Use Case

### AI Research Assistant

An AI agent performing research may need:

* article summarization
* dataset access
* search APIs

Instead of subscriptions:

1. The agent requests a summarization service.
2. The service costs `0.1` tokens.
3. The provider returns the summary.
4. The contract transfers `0.1` tokens to the provider.

This enables **fully automated AI workflows**.

---

## Development Setup

### Prerequisites

Install:

* Rust
* Stellar CLI
* Soroban SDK

Install Stellar CLI:

```
cargo install stellar-cli
```

Add WASM build target:

```
rustup target add wasm32-unknown-unknown
```

---

### Build the Contract

From the project root:

```
stellar contract build
```

This compiles the contract to WebAssembly.

---

### Deploy the Contract

```
stellar contract deploy \
--wasm target/wasm32-unknown-unknown/release/ai_agent_payments.wasm
```

---

### Initialize the Contract

After deployment, initialize contract parameters.

```
stellar contract invoke \
--id CONTRACT_ID \
-- init
```

---

## MVP Features

The MVP implementation includes:

* agent deposits
* service registration
* service requests
* payment settlement
* event logging

---

## Future Improvements

Planned enhancements include:

### Service Marketplace

* service discovery
* service categories
* provider metadata

### Escrow Payments

* verify service delivery before payment
* dispute resolution

### Agent Budget Controls

* daily spending limits
* maximum request price
* usage quotas

### Reputation System

* provider ratings
* service reliability tracking

### Autonomous Agent Discovery

Allow agents to automatically discover and evaluate services.

---

## Vision

This project explores the concept of an **AI-driven economic network**, where autonomous agents can:

* discover services
* purchase resources
* collaborate economically
* transact without human intervention

Such systems could enable a **machine-to-machine economy** where software agents interact financially in real time.

---

## License

MIT License
