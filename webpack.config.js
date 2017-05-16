const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/index.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, loader: [ 'awesome-typescript-loader' ] }
    ]
  }
};
