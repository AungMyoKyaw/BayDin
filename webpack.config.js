var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    baydin: './src/baydin.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: '[name].min.js',
    library: 'baydin',
    libraryTarget: 'window'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};

module.exports = config;
