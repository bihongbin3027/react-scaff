const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 复制文件到构建目录
const CopyWebpackPlugin = require("copy-webpack-plugin");
// 补全类型检查功能
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// 提取css单独一个文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint
const ESLintPlugin = require("eslint-webpack-plugin");
// 编译进度条
const WebpackBarPlugin = require("webpackbar");
// 编译时命令行显示日志优化（编译成功、编译警告、编译失败）
const FriendlyErrorsPlugin = require("@soda/friendly-errors-webpack-plugin");

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
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
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
    // 处理静态文件夹 static 复制到打包的 static 文件夹
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../static"),
          to: "static",
          // 复制空文件夹不允许报错
          noErrorOnMissing: true,
        },
      ],
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
    // eslint
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
      context: path.resolve("src"),
      exclude: "/node_modules",
    }),
    // 编译进度条
    new WebpackBarPlugin(),
    // 编译时命令行显示日志优化（编译成功、编译警告、编译失败）
    new FriendlyErrorsPlugin(),
  ],
};
