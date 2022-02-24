const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  // 如何生成source map
  devtool: "eval-source-map",
  // 编译时的模块统计信息：只在发生错误或新的编译开始时输出
  stats: "minimal",
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
