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
};

module.exports = merge(commonConfig, devConfig);
