const path = require("path");

module.exports = {
  entry: "./dev/script.js",
  
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg)$/i,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "assets/images",
          },
        },
      },
    ],
  },
};
