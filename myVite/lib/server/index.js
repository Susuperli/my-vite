const http = require('http');

const connect = require('connect');

const serveStaticMiddleware = require('./middlewares/static');
const resolveConfig = require('../config');

async function createServer() {
  const config = await resolveConfig();
  const app = connect();

  app.use(serveStaticMiddleware(config));

  const server = {
    async listen(port, callback) {
      http.createServer(app).listen(port, callback);
    },
  };

  return server;
}

exports.createServer = createServer;
