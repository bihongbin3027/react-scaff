module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  // plugins: [
  //   "react",
  //   "react-hooks",
  //   "@typescript-eslint/eslint-plugin",
  //   "prettier",
  // ],
  rules: {
    "prettier/prettier": "error",
    // // 检查 Hook 的规则
    // "react-hooks/rules-of-hooks": "error",
    // // 检查 effect 的依赖
    // "react-hooks/exhaustive-deps": "warn",
    // 如果您使用的是 react17， 忽略文件中缺少导入 import React from 'react' 引起的eslint报错
    "react/react-in-jsx-scope": "off",
  },
};
