const server = require('../dist/ng-universal-on-vercel/server/main');
const server = require(__dirname, './dist/ng-universal-on-vercel/server/main.js');

module.exports = server.app();