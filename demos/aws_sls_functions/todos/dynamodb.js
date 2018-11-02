'use strict';

const AWS = require('aws-sdk');

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  AWS.config.update({ // Dummy tokens
    region: 'us-west-1',
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    endpoint: new AWS.Endpoint('http://localhost:8080'),
  });
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8080',
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

module.exports = client;