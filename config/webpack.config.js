const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const hotMiddlewareScript = 'webpack-hot-middleware/client'

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../examples/index.js'), hotMiddlewareScript]
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: path.resolve(__dirname, '../build')
  // },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'radio component',
      // template: require('html-webpack-template'),
      template: path.resolve(__dirname, '../examples/index.ejs')
    }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
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
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       attrs: [':data-src']
      //     }
      //   }
      // }
    ]
  }
}
