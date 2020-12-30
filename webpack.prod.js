const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "script.[contenthash].js",
    path: path.resolve(__dirname, "prod"),
    publicPath: "./",
  },
  plugins: [new CleanWebpackPlugin()],
});
