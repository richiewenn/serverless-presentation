## Setup
Free ports: 3000, 8080
```
yarn global add serverless
yarn install
sls dynamodb install
sls offline start
sls dynamodb migrate
```

## Usage
### Create a Todo
```bash
curl -X POST -H "Content-Type:application/json" http://localhost:3000/todos --data '{ "text": "Learn Serverless" }'
```
### List all Todos
```bash
curl -H "Content-Type:application/json" http://localhost:3000/todos
```
### Get one Todo
```bash
# Replace the <id> part with a real id from your todos table
curl -H "Content-Type:application/json" http://localhost:3000/todos/<id>
```
### Update a Todo
```bash
# Replace the <id> part with a real id from your todos table
curl -X PUT -H "Content-Type:application/json" http://localhost:3000/todos/<id> --data '{ "text": "Learn Serverless", "checked": true }'
```
### Delete a Todo
```bash
# Replace the <id> part with a real id from your todos table
curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/todos/<id>
```
