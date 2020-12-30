const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "script.dev.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
  },
});
