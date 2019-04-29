const { resolve } = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: resolve('src/index.jsx'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HTMLWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    })
  ],

  resolve: {
    alias: {
      Actions: resolve('src/actions/'),
      Components: resolve('src/components/'),
      Constants: resolve('src/constants/'),
      Containers: resolve('src/containers/'),
      Reducers: resolve('src/reducers'),
      Routes: resolve('src/routes/'),
      Store: resolve('src/store/'),
      Utils: resolve('src/utils/')
    },
    extensions: ['.js', '.jsx']
  }
};
