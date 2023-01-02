/* eslint-disable prefer-destructuring */
/* eslint-disable operator-linebreak */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          // globOptions: {
          //   // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
          //   ignore: ['**/images/**'],
          // },
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
    }),
    new BundleAnalyzerPlugin(),
  ],
};
