const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    __dirname + '/src/script.js',
    __dirname + '/src/style.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.min.js',
    publicPath: 'http://localhost:8080'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'style.min.css'}
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 9001,
    hot: false,
    devMiddleware: {
      writeToDisk: true
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: path.resolve(__dirname, 'public/index.html'),
      inject: false,
    })
  ]
};
