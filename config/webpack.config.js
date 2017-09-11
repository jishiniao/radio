const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'jishiniao react component : radio'
    })
  ],
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
