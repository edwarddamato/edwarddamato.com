const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfigIndex = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
  chunks: ['index']
});
const HtmlWebpackPluginConfigCV = new HtmlWebpackPlugin({
  template: './public/cv.html',
  filename: 'cv.html',
  inject: 'body',
  chunks: ['cv']
});

const SOURCE = /src/;

module.exports = {
  entry: {
    index: './src/index/Index.tsx',
    cv: './src/cv/CV.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loaders: 'source-map-loader',
        include: [SOURCE]
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        include: [SOURCE]
      },
      { test: /\.js$/, loader: 'babel-loader', include: [SOURCE] },
      { test: /\.jsx$/, loader: 'babel-loader', include: [SOURCE] },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!sass-loader'
        })
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfigIndex,
    HtmlWebpackPluginConfigCV,
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ]
};
