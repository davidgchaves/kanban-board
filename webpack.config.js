var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack           = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(ROOT_PATH, 'app/main'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(ROOT_PATH, 'app')
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 4000,
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ title: 'Kanban Board' })
  ]
}
