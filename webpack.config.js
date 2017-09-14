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
      { test: /\.(jpg|png|otf)$/, loader: 'url-loader' },
    ],
  },
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'source/public/assets'),
      Components: path.resolve(__dirname, 'source/public/ui/components'),
      Styles: path.resolve(__dirname, 'source/public/styles'),
      Templates: path.resolve(__dirname, 'source/public/templates'),
      Views: path.resolve(__dirname, 'source/public/ui/views'),
    },
  },
  plugins: [HtmlWebpackPluginConfig],
}
