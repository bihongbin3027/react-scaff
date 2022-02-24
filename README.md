# 基于 webpack5 搭建的 react 开发脚手架

## 安装

```bash
yarn install 或者 npm install
```

## 使用

### 本地服务

```bash
npm run dev 或者 yarn dev
```

默认打开端口是: `localhost:8080`

### 生产打包

```bash
npm run build 或者 yarn build
```

## 开发依赖

### Webpack

- [`webpack`](https://github.com/webpack/webpack) - 模块和资源打包
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - webpack 的官方 cli
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - 基于 webpack 的开发服务器
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - 简化 dev 和 prod 的配置

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - babel 转换核心
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - 支持 class 上添加属性
- [`@babel/plugin-proposal-object-rest-spread`](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread) - 支持 Object rest spread
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - babel 默认配置

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader) - 加载器处理 js
- [`postcss-loader`](https://github.com/webpack-contrib/postcss-loader) - 加载器处理 css
- [`style-loader`](https://github.com/webpack-contrib/style-loader) - 加载器将 css 插入 DOM
- [`css-loader`](https://github.com/webpack-contrib/css-loader) - 加载器解析 import 和 url

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - build 时清理原有文件夹
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - 复制文件到指定目录
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - 从模板生成 HTML 文件
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - 提取 css 到单独文件
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin) - 优化和最小化 css
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - 优化和最小化 js
- [`friendly-errors-webpack-plugin`](https://github.com/geowarin/friendly-errors-webpack-plugin) - 编译时命令行显示日志优化

### Linters

- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - 添加 prettier 规则

### Css

- [`tailwindcss`](https://tailwindcss.com/) - 一款优秀的 CSS 框架

## Author

- [BiHongBin](https://www.zuotiangood.top)
