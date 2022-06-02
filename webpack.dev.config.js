const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './dist',
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'public/index.html',
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  devtool: 'eval-source-map',
}
