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
  devtool: 'source-map',
  entry: {
    index: './src/index/Index.tsx',
    cv: './src/cv/CV.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        include: [SOURCE],
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        include: [SOURCE],
        test: /\.js$/,
        loader: 'source-map-loader'
      },
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
