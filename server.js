const express = require('express');
const app = express();

const http = require('http');
const helmet = require('helmet');
const chalk = require('chalk');
const cors = require('cors');
const listEndpoints = require('express-list-endpoints');
const rateLimit = require('express-rate-limit');
const timeout = require('connect-timeout');

process.env.NODE_ENV = 'local';

const { environment } = require(`./env.${process.env.NODE_ENV}`);

(async () => {
  // config environment
  await environment();
  // stander protocol
  app.use(helmet());
  app.disable('x-powered-by');
  // petitions limit
  const limit = process.env.LIMIT_REQUEST.split(',');
  let [a, b, c] = limit[0].split('*').map((r) => {
    return parseInt(r);
  });
  const limiter = rateLimit({
    windowMs: a * b * c,
    max: parseInt(limit[1]),
    message: limit[2],
  });
  app.use(limiter);
  // body parser
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));
  app.use(express.json({ extended: true, limit: '50mb' }));
  // cors
  app.use(cors({ origin: true, credentials: true }));
  app.use((req, res, next) => {
    try {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', process.env.HEADERS_ALLOW_HEADERS);
      res.header('Access-Control-Allow-Methods', process.env.HEADERS_ALLOW_METHODS);
      res.header('Allow', process.env.HEADERS_ALLOW_METHODS);
      next();
    } catch (error) {
      return _res.send({ message: 500 });
    }
  });
  // config db
  const database = require('./src/components/database');
  await database.connect();
  // config routes
   const routes = require('./src/configs/routes');
   app.use('', routes);
   const package = require('./package.json');
   app.use('', (req,res)=>{
    res.send({
      version: package.version,
      name: package.name,
      author:package.author,
      description: package.description,
    })
   })
  /**
   * Listen API
   */

   http.createServer(app).listen(process.env.PORT, () => {
    console.log('listen localhost ' + process.env.PORT);
  });

  /**
   * TimeOut
   */
  app.use(timeout(process.env.TIMEOUT, { respond: true }));

  // list Endpoints
  console.log(chalk.blue('API RULES!: LISTS DE ENDPOINTS'));
  listEndpoints(app).forEach((path) => {
    console.log(chalk.yellow('http://localhost:' + process.env.PORT + path.path.trim(), chalk.blue(path.methods)));
  });
})();
