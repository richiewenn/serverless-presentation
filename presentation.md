class: center, middle
# Serverless Applications
by Richard Vašek
---
# BaaS
--

Backend as a Service
--

- Cloud accessible DBs (Firebase)
- Auth Services (Auth0, AWS Cognito)
???
- High available
- Barely any configuration 
- Can scale almost infinitely 
---
# FaaS
--

Function as a Service
--

- Small code
- Stateless container
- Event triggered
- Managed by 3rd party
---
# Serverless
--

- BaaS
- FaaS
???
Kombinace BaaS a FaaS
---
# 3 Tier Example
![ps.svg](https://martinfowler.com/articles/serverless/ps.svg)
???
- Auth, search, transactions, page navigation implemented on server
---
# Serverless Example
![sps.svg](https://martinfowler.com/articles/serverless/sps.svg)
???
- 3rd party BaaS Auth service
- BaaS DB, allow client access directly
- Some logic moved to client
- Search moved to function, using same db as client
- Purchase moved to function
---
# Message-driven App
## Classic
![cp.svg](https://martinfowler.com/articles/serverless/cp.svg)
--

## Serverless
![scp.svg](https://martinfowler.com/articles/serverless/scp.svg)
---
# API Gateways
![ag.svg](https://martinfowler.com/articles/serverless/ag.svg)
- Routing requests
- Authorization
- Input validation
- Response code mapping
---
# Scaling FaaS
- Automatically managed
- Transparent
- Fine grained
---
# Costs
- Economy of Scale effect
- Reduced development cost
- Scaling costs
- Never pay for idle
---
# AWS Pricing
- $0.0000002 per 100ms @ 128MB
- $0.20 per 1 million requests
- First 1M per month are free
---
# Optimization
1. You can clearly see which function is slow
2. Optimize 1s to 200ms
3. Immediately pay 80% less
---
# Fine graded scaling
- Occasional requests
  - You don't pay when no requests
- Inconsistent traffic
  - Scale what's needed for time it's needed
---
# Inconsistent traffic
![inconsistent-traffic-pattern.png](https://martinfowler.com/articles/serverless/inconsistent-traffic-pattern.png)
---
# Cheap experiments
- Pay for usage
- Replicate production for 0 cost
- Run multiple versions of code in production
---
# Design around services
- Play arbitrage with different charging models
  - Lambda: #requests, time, memory, transfer
  - API GW: #requests, transfer
  - S3: transfer
  - Cognito: #users
  - IOT GW: #messages
---
# e.g. Client file upload
  1. Lambda returns secure S3 url
  2. User uploads to S3 directly
  3. You don't pay CPU time for S3, just transfer
---
# Nice Right?
- Rainbows
- Unicorns
- All things shiny so far
---
class: center, middle
# But
---
# Vendor control
- System downtime
- Unexpected limits
- Cost changes
- Loss of functionality
- Forced API upgrades
---
# Vendor lock-in
- Hard to migrate to different vendor
- Multi-cloud is expensive
---
# Startup Latency
- Can be from ms to s
- Cold
  - Create new container
  - (Run JIT)
- Warm
  - Reusing running instance
---
# Security concerns
- Using BaaS database from client
- IAM policies
---
# DoS yourself
1. AWS lambda instances limit is per AWS account (1000 by default)
2. Same account for production and test
3. Run load test on test env
4. DoS production
---
# Memory vs CPU
- Need 50MB RAM
--

- So let's configure 128MB right?
--

- Wrong 
---
# GCloud
![Screenshot-2018-11-01-at-23-08-18.png](https://image.ibb.co/j93U8L/Screenshot-2018-11-01-at-23-08-18.png)
---
# Testing
- Unit testing is easy
- Integration testing is hard
- Cloud-based testing not local
---
# It's all still kinda new
- Not many patterns
- Not many best practices
- Incomplete tooling
---
class: center, middle
# Demo Time