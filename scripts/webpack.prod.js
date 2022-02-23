const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
// 优化和最小化css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 优化和最小化js
const terserPlugin = require("terser-webpack-plugin");

const prodConfig = {
  mode: "production",
  output: {
    // 输出目录
    path: path.resolve(__dirname, "../dist"),
    // 在生成文件之前清空output目录
    clean: true,
  },
  optimization: {
    // webpack选择模块id时使用的算法，'deterministic'编译中不变的短数字id，有益于长期缓存
    chunkIds: "deterministic",
    // 在编译时每当有错误时，就会发送静态资源，关键错误会被发送到生成的代码中，并会在运行时报错
    emitOnErrors: true,
    // 每个入口点添加一个仅包含运行时的额外块（runtime~bundle.js），减少entry chunk体积
    runtimeChunk: true,
    // 分离chunks
    splitChunks: {
      // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
      chunks: "all",
      // 生成 chunk 的最小体积，模块要大于30kb才会进行提取
      minSize: 30000,
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
      },
    },
    // 是否压缩
    minimize: false,
    minimizer: [
      // 优化和最小化js
      new terserPlugin(),
      // 优化和最小化css
      new CssMinimizerPlugin(),
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
