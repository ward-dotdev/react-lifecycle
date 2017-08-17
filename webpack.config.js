const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV || 'development'
const TITLE = require('./package.json').name
  .replace(/-/g, ' ')
  .replace(/\w\S*/g, str => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase())

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './index'
  ],
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.TITLE': JSON.stringify(TITLE)
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.ejs',
      title: TITLE
    })
  ].concat(NODE_ENV === 'development' && new webpack.NamedModulesPlugin())
}
