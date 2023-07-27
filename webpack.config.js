const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  stats: {
    children: true,
},
    module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.jsx?$/,
          exclude: /node_modules/
        }]
      },
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json'],
        symlinks: false,
        cacheWithContext: false,
      },
      mode: 'development',
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "public", "index.html"),
        }),
      ],

};