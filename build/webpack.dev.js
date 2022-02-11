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
  devServer: {
    // 默认打开localhost:8080
    open: true,
  },
  cache: {
    // 持久化缓存，改善构建速度
    type: "filesystem",
  },
  plugins: [
    // 更好的显示开发报错信息
    new FriendlyErrorsWebpackPlugin(),
  ],
};

module.exports = merge(commonConfig, devConfig);
