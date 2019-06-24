const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/App.js')]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'radio component',
      template: path.resolve(__dirname, '../assets/radio.html')
    }),
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
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:8192
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              limit:8192
            }
          }
        ]
      }
    ]
  }
}
