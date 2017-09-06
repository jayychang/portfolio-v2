/*
    ./webpack.config.js
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './source/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './source/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.less$/, loader: [ 'style-loader', 'css-loader', 'less-loader' ] },
      { test: /\.(png|otf)$/, loader: 'url-loader' },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
}
