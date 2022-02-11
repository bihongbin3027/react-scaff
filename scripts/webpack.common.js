const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 编译进度条
const WebpackBarPlugin = require("webpackbar");

module.exports = {
  entry: {
    bundle: "./src/index",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // 引入文件可以不写后缀
    extensions: [".ts", ".tsx", ".js"],
    // 别名
    alias: {
      "@": path.resolve("src"),
    },
  },
  plugins: [
    // index.html
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    // 编译进度条
    new WebpackBarPlugin(),
  ],
};
