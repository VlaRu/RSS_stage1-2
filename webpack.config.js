const path = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  entry: "./nonograms/src/script.js", // your entry file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // name of the bundled file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // match JavaScript files
        exclude: /node_modules/, // exclude node_modules
        use: {
          loader: "babel-loader", // use babel-loader for JavaScript files
          options: {
            presets: ["@babel/preset-env"], // use preset-env for modern JavaScript
          },
        },
      },
      {
        test: /\.(scss|css)$/, // match Sass files
        use: [
          "style-loader", // inject CSS into the DOM
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./nonograms/index.html"), // шаблон
      filename: "index.html", // название выходного файла
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
  ],
};
