const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 补全类型检查功能
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// 提取css单独一个文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 编译进度条
const WebpackBarPlugin = require("webpackbar");

module.exports = {
  entry: {
    bundle: "./src/index",
  },
  output: {
    filename: "js/[name].[chunkhash:8].js",
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
  cache: {
    // 持久化缓存，改善构建速度，将境编译结果写入硬盘缓存（node_modules/.cache/webpack）
    type: "filesystem",
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
    // 提取css单独一个文件
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
    }),
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
    // 编译进度条
    new WebpackBarPlugin(),
  ],
};
