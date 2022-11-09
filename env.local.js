/**
 * Class Env
 * @module env.js
 */

const configs = {
  url: 'localhost',
  name: 'jump2digital-back',
  port: 5000,
  node_env: 'local',
  timeout: 120000,
  limit_request: ['15*60*1000', 10000, 'Repetitive requests not allowed...'],
  headers_credentials: 'true',
  headers_allow_methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  headers_allow_headers: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'Access-Control-Allow-Credentials', 'Access-Control-Request-Headers', 'x-access-token'],
  db_uri: '',
};

class Env {
  environment() {
    for (let key of Object.keys(configs)) {
      const env = key.toUpperCase();
      console.log(`> ENV ${key} --> ${env} = ${configs[key]}`);
      process.env[env] = configs[key];
    }
  }
}

module.exports = new Env();
