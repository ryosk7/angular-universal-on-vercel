import { environment } from './../src/environments/environment';

if (environment.production) {
  const server = require('../ng-universal-on-vercel/server/main');
} else {
  const server = require('../dist/ng-universal-on-vercel/server/main');
}

module.exports = server.app();