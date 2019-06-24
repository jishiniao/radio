const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('./config/webpack.common.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.listen(3002, function() {
  console.log('radio app listening on port 3002!\n')
})

// "clean": "rm -rf ./lib/*",
// "cp": "cp -r ./src/imgs ./lib/.",
// "prepare": "babel src -d lib"
