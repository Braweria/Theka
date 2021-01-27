const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./dev/post.html",
      filename: "post.html",
    }),
    new HtmlWebpackPlugin({
      template: "./dev/archive-book.html",
      filename: "archive-book.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    inline: true,
    hot: true,
    compress: true,
    port: 8080,
  },
  output: {
    filename: "script.dev.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
  },
});
