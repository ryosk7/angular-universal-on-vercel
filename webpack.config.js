const path = require('path')

module.exports = {
  mode: 'production',
  entry: { serverless: path.join(__dirname, './api/serverless.js') },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'api'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.mjs', '.js'],
    modules: [path.resolve(__dirname, './node_modules')]
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/(node_modules|main\..*\.js)/]
}
