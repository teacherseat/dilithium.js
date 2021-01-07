const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const coffee = {
  test: /\.coffee$/, loader: 'coffee-loader'
};

module.exports = {
  mode: 'production',
  target: 'web',
  entry: {
    'index.js': path.resolve(__dirname, 'src/index.coffee')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]'
  },
  resolve: {
    extensions: ['.coffee', '.js', 'json'],
    modules: ['node_modules/'],
    alias: {
      command   : path.resolve(__dirname, 'src/command/'),
      operations: path.resolve(__dirname, 'src/operations/'),
      sciences  : path.resolve(__dirname, 'src/sciences/')
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  node: { __dirname: false },
  module: { rules: [coffee] }
};