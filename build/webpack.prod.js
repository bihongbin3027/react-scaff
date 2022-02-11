const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
// 提取css单独一个文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 优化和压缩css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 优化减少js
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// 复制文件到构建目录
const CopyWebpackPlugin = require("copy-webpack-plugin");

const prodConfig = {
  mode: "production",
  output: {
    filename: "js/[name].[chunkhash:8].js",
    // 在生成文件之前清空output目录
    clean: true,
  },
  optimization: {
    //  在编译时每当有错误时，就会发送静态资源
    emitOnErrors: true,
    // 分离chunks
    splitChunks: {
      // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
      chunks: "all",
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          // 只打包初始时依赖的第三方
          chunks: "initial",
        },
      },
    },
    // 是否压缩
    minimize: false,
    minimizer: [
      // 优化减少js
      new UglifyJsPlugin(),
      // 优化和压缩css
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    // 提取css单独一个文件
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
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
  ],
};

module.exports = merge(commonConfig, prodConfig);
