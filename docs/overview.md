AgentPay Protocol Documentation
Introduction

AgentPay is an open protocol designed to enable autonomous payments between AI agents and service providers.

The protocol allows software agents to purchase services such as APIs, datasets, or computational resources without requiring human intervention. Payments are executed through smart contracts, enabling a trust-minimized system for machine-to-machine commerce.

AgentPay is built on the Stellar network using the Soroban smart contract platform and aims to provide a foundation for a decentralized agent economy, where autonomous systems can discover services, request work, and settle payments programmatically.

Problem Statement

AI agents are becoming increasingly capable of performing tasks autonomously, including:

researching information

interacting with APIs

executing workflows

orchestrating multiple services

However, these agents still rely on centralized infrastructure for payments and access control.

Most services today rely on:

API keys

subscriptions

manual billing

centralized payment gateways

These models are not designed for autonomous systems.

They introduce several limitations:

agents cannot purchase services dynamically

payments cannot occur automatically per request

service access must be pre-configured by humans

AgentPay addresses these limitations by enabling programmable payments for autonomous agents.

Vision

The long-term vision of AgentPay is to support a decentralized machine-to-machine economy.

In such an ecosystem:

AI agents can discover services automatically

agents can pay providers programmatically

providers can offer services without centralized platforms

economic coordination occurs directly between machines

Example scenario:

An AI research agent needs article summarization.

The agent searches for available summarization services.

The agent selects a provider based on price and reputation.

The agent submits a request and pays automatically.

The provider fulfills the request and receives payment.

All steps occur without manual billing or human intervention.

System Architecture

AgentPay is composed of several cooperating components.

Smart Contract Layer

The smart contract layer forms the trust foundation of the protocol.

Responsibilities include:

storing agent balances

managing service registrations

recording service requests

handling payment settlement

emitting events for external systems

The contract ensures that payments occur only when requests are completed according to protocol rules.

Backend Indexer

The backend indexer provides a queryable interface for blockchain data.

Blockchains are optimized for verification, not for complex data queries. The indexer listens to smart contract events and stores them in a database for efficient querying.

Responsibilities include:

indexing registered services

tracking service requests

tracking payments

exposing REST APIs for developers

The backend is implemented using Python with FastAPI and PostgreSQL.

Provider Nodes

Service providers operate provider nodes that listen for requests and fulfill them.

Providers can offer services such as:

text summarization

language translation

data retrieval

machine learning inference

Provider nodes monitor contract events and respond to service requests submitted by agents.

After fulfilling a request, the provider node submits confirmation to the smart contract to receive payment.

Agent Clients

Agents interact with the protocol through an SDK or direct contract calls.

Agent responsibilities include:

depositing tokens into the protocol

discovering services

submitting service requests

receiving results from providers

Agents may represent autonomous software systems performing tasks such as research, trading, or automation.

Protocol Workflow

The AgentPay protocol follows a structured workflow for service transactions.

Step 1: Agent Funding

Agents must deposit tokens into the protocol before requesting services.

This ensures that sufficient funds are available to pay providers.

Step 2: Service Registration

Providers register services on the protocol.

Service registration includes:

provider address

service description

price per request

Once registered, services become available for agents to discover and use.

Step 3: Service Discovery

Agents query available services through the indexer API.

Agents may evaluate services based on:

price

provider reputation

service type

availability

Step 4: Service Request

An agent submits a service request to the smart contract.

The contract performs validation checks:

agent has sufficient balance

service exists

request parameters are valid

If the request is valid, it is recorded in contract storage.

Step 5: Request Fulfillment

Provider nodes monitor new service requests.

When a provider receives a request for its service:

The provider processes the request.

The provider generates a result.

The provider submits completion to the smart contract.

Step 6: Payment Settlement

Upon request completion, the smart contract releases payment from the agent's balance to the provider.

The contract emits a payment event confirming the transaction.

Smart Contract Design

The smart contract is implemented in Rust using the Soroban SDK.

The contract manages several core data structures.

Agent

Agents represent participants capable of requesting services.

Each agent has an associated balance stored in the contract.

Attributes:

wallet address

token balance

Service

Services represent tasks offered by providers.

Attributes include:

provider address

service identifier

price per request

service metadata

Request

Requests represent individual service executions.

Attributes include:

agent address

service identifier

request status

completion state

Requests move through several states during their lifecycle.

Event System

The contract emits events that external systems can observe.

Events include:

service registration

service request creation

request completion

payment settlement

These events allow provider nodes and indexers to react to protocol activity in real time.

Security Considerations

Several security principles guide the design of the protocol.

Authorization

Only authorized actors may perform specific actions.

Examples include:

only providers can register services

only request owners can cancel requests

only providers can claim payment for fulfilled requests

Balance Verification

All service requests require sufficient agent balances before being recorded.

This prevents providers from fulfilling requests that cannot be paid.

Immutable Payment Logic

Payment settlement is executed entirely within the smart contract to prevent off-chain manipulation.

Backend Indexer Design

The backend indexer listens to blockchain events and stores them in a relational database.

This enables efficient queries such as:

list all services

list all requests

track provider earnings

track agent activity

The backend exposes a REST API for developers and agents.

Example endpoints include:

retrieving services

retrieving request history

retrieving provider statistics

Provider Node Operation

Provider nodes operate continuously and monitor the protocol for new requests.

When a request appears for a registered service:

The provider node retrieves the request.

The provider executes the requested operation.

The provider submits confirmation to the contract.

This architecture allows providers to run services independently without centralized coordination.

Example Use Cases

AgentPay supports several potential use cases.

Examples include:

AI agents purchasing summarization services

agents paying for dataset access

agents purchasing compute resources

agents purchasing financial data feeds

agents paying for AI model inference

These use cases illustrate how autonomous systems may transact in a decentralized environment.

Future Development

Future protocol versions may introduce additional capabilities.

Planned improvements include:

service reputation systems

provider discovery mechanisms

dispute resolution

request verification mechanisms

decentralized marketplaces for AI services

These features will enhance the reliability and scalability of the protocol.

Conclusion

AgentPay explores the concept of programmable payments for autonomous software systems.

By combining smart contracts, event-driven infrastructure, and service marketplaces, the protocol aims to support a decentralized ecosystem where AI agents can transact and collaborate economically.

The project represents an early step toward a broader machine-to-machine economy built on decentralized infrastructure.