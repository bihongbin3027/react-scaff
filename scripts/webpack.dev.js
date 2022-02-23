const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  // 如何生成source map
  devtool: "eval-source-map",
  devServer: {
    // 默认打开localhost:8080
    open: true,
    port: 8080,
  },
  optimization: {
    // webpack选择模块id时使用的算法，'named'对调试更友好的可读id
    chunkIds: "named",
  },
};

module.exports = merge(commonConfig, devConfig);
