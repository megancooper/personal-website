const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Config directories
const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, './docs');

// Any directories you will be adding code/files into, need to be
// added to this array so webpack will pick them up
const defaultInclude = [SRC_DIR];

module.exports = {
  target: 'web',
  entry : {
    javascript: `${SRC_DIR}/index.js`
    // html      : `${OUTPUT_DIR}/index.html`
  },
  mode  : 'production',
  watch : false,
  output: {
    path      : OUTPUT_DIR,
    publicPath: path.join('./'),
    filename  : 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use : [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test   : /\.js$/,
        exclude: /node_modules(?!(\/|\\)js-utils)/,
        loader : 'babel-loader'
      },
      {
        test   : /\.jsx$/,
        exclude: /node_modules(?!(\/|\\)js-utils)/,
        loader : 'babel-loader'
      },
      {
        test   : /\.(jpe?g|png|gif)$/,
        use    : [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude
      },
      {
        test   : /\.(eot|svg|ttf|woff|woff2)$/,
        use    : [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject  : 'body',
      // filename: './index.html',
      favicon : './public/static/favicon.ico'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CopyWebpackPlugin([
      { from: 'public' }
    ])
  ]
};
