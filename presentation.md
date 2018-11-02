background-image: url(https://image.ibb.co/gD48RV/serverlessallthethings.png)
---
# Serverless
- BaaS
- FaaS
---
# BaaS
- Cloud accessible DBs (Firebase)
- Auth Services (Auth0, AWS Cognito) 
---
# FaaS
- Small code
- Stateless container
- Event triggered
- Managed by 3rd party
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
## Serverless
![scp.svg](https://martinfowler.com/articles/serverless/scp.svg)
---
class: center, middle
# Lambda Functions
---
class: center, middle
# WTF that even means?
---
class: center, middle
# After this, there is no turning back.
---
![2lfvkz.jpg](https://i.imgflip.com/2lfvkz.jpg)
---
# Lambda
- Comes from Lambda calculus (1930s)
- Formal system in mathematical logic for expressing computation based on function abstraction and application using variable binding and substitution.
---
# Lambda
- Functions: 1 -> 1
- and nothing else
- (λx.λy.(λz.(λx.z x) (λy.z y)) (x y))
---
# What?
- x - variable
- M - lambda term
- (λx.M) - function definition
- (M N) - apply a function to an argument
---
# Where are all the stuff?
- TRUE
- FALSE
- IF-ELSE 
- FOR LOOP
- BINARY OPERATORS
- NUMBERS???
---
# Where are all the stuff?
- TRUE := λx.λy.x
- FALSE := λx.λy.y
- AND := λp.λq.p q p
- OR := λp.λq.p p q
- NOT := λp.p FALSE TRUE
- IFTHENELSE := λp.λa.λb.p a b
---
class: center, middle
# Numbers?
---
# Church numerals
- 0 := λf.λx.x
- 1 := λf.λx.f x
- 2 := λf.λx.f (f x)
- 3 := λf.λx.f (f (f x))
---
class: center, middle
# Nah, this is all just academic nonsense right?
---
class: center, middle
# Let me show you some JS
---
# What is lambda today?
- `() => {}`
- AWS FaaS is called Lambda
---
# Function State
- Not stateless
- External state (AWS S3, DB)
---
# Startup Latency
- Can be from ms to s
- Cold
  - Create new container
  - (Run JIT)
- Warm
  - Reusing instance
---
# API Gateways
![ag.svg](https://martinfowler.com/articles/serverless/ag.svg)
- Routing requests
- Authentication
- Input validation
- Response code mapping
---
class: center, middle
# GCloud Demo
---
# PaaS and Serverless
- If your PaaS can efficiently start instances in 20ms that run for half a second, then call it serverless. 
---
# Scaling FaaS
- Automatically managed
- Transparent
- Fine grained
---
class: center, middle
# Time to Recover -> Time to Start
---
# #NoOps
- There is always Ops, you just outsource it
---
# Costs
- Economy of Scale effect
- Reduced development cost
- Scaling costs
---
# AWS Pricing
- $0.0000002 per 100ms @ 128MB
- $0.20 per 1 million requests
- First 1M per month are free
---
# Optimalization
1. You can clearly see which function is slow
2. Optimize 1s to 200ms
3. Imidiately pay 80% less
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
  - Lambda: #requests, time, memory
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
# Cognito and IOT GW
- State in Cognito
- IOT GW does not care about size
---
# Let clients connect to "back-end" resources
- And use 1000s of CPUs for free
---
# Nice Right?
- Rainbows
- Unicorns
- All things shiny so far
--

- About to get slapped around the face by the wet fish of reality
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
# Security concerns
- Using BaaS database from client
- IAM policies
- Identity-Based Policies
---
# DoS yourself
1. AWS lambda instances limit is per AWS account (1000 by default)
2. Same account for production and test
3. Run load test on test env
4. DoS production
---
# Execution duration
- Limited to ~5 minutes
- No signs of changing it
---
# Startup latency
- Cold starts
- Significant concern for JVM
---
# Memmory vs CPU
- Need 50MB
- So let's configure 128MB right?
- Wrong 
---
# GCloud
![Screenshot-2018-11-01-at-23-08-18.png](https://image.ibb.co/j93U8L/Screenshot-2018-11-01-at-23-08-18.png)
---
# AWS
- No CPU guaranties
- Experience similar to GCloud
---
# Testing
- Unit testing is easy
- Integration testing is hard
- Cloud-based testing not local
- Should we switch to cloud IDE?
---
# Over-ambitious API gateways
1. You pay per request not CPU time
2. You put a lot of logic to API gateway
3. Yaml hell
4. Hard to maintain
---
# It's all still kinda new
- Not many patterns
- Not many best practicies
- Incomplete tooling
---
class: center, middle
# Serverless FW Demo
???
- `yarn global add serverless`
- `serverless create --template aws-nodejs --path aws_sls_functions`
- `cd aws_sls_functions`
- `yarn init -y`
- `yarn add --dev serverless-offline serverless-dynamodb-local`
