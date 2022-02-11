const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
// 更好的显示开发报错信息
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const devConfig = {
  mode: "development",
  output: {
    filename: "js/[name].[chunkhash:8].js",
  },
  // 如何生成source map
  devtool: "eval-source-map",
  // 终端额外日志只在发生错误时输出
  stats: "errors-only",
  devServer: {
    // 默认打开localhost:8080
    open: true,
    port: 8080,
  },
  cache: {
    // 持久化缓存，改善构建速度
    type: "filesystem",
  },
  plugins: [
    // 更好的显示开发报错信息
    new FriendlyErrorsWebpackPlugin({
      // 成功的时候输出
      compilationSuccessInfo: {
        messages: ["Your application is running here: http://localhost:8080"],
      },
      // 是否每次都清空控制台
      clearConsole: true,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
