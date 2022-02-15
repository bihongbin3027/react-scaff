const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

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
    port: 8080,
  },
  cache: {
    // 持久化缓存，改善构建速度
    type: "filesystem",
  },
};

module.exports = merge(commonConfig, devConfig);
