const path = require("path");
// 补全类型检查功能
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
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
        use: "babel-loader",
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
    // 补全类型检查功能
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
    // index.html
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    // 编译进度条
    new WebpackBarPlugin(),
  ],
};
