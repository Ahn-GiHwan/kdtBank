const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    clean: true
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-runtime', {
                "corejs": 3
              }]
            ]
          }
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|otf)$/,
        use:'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template:'./index.html'
    }),
    new MiniCssPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './src/img', to:"img" },
        { from: './src/font'}
      ]
    })
  ]
}