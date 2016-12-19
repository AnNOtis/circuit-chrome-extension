const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HOST = 'localhost'
const PORT = '3000'

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    host: HOST,
    port: PORT,
    contentBase: path.join(__dirname, '../dev'),
    stats: {
      colors: true
    },
    noInfo: false
  },
  entry: {
    background: [path.join(__dirname, '../chrome/extensions/background')],
    main: [path.join(__dirname, '../chrome/extensions/main')],
    inPage: [path.join(__dirname, '../chrome/extensions/in-page')],
    tachyons: 'tachyons/css/tachyons.css'
  },
  output: {
    path: path.join(__dirname, '../dev/js'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new ExtractTextPlugin('[name].css', {allChunks: true})
  ],
  resolve: {
    extensions: ['', '.js'],
    root: [
      path.join(__dirname, '../app'),
      path.join(__dirname, '../chrome')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  }
}
