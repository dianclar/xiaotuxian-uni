/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
// Node.js 环境

module.exports = {
  root: true, // 使用当前配置

  extends: [
    // 配置整体规则
    'plugin:vue/vue3-essential', //  Vue3 规则,
    'eslint:recommended', //  ESLint 规则
    'prettier', // Prettier 规则
  ],

  globals: {
    // 排除未定义变量
    uni: true,
    wx: true,
    WechatMiniprogram: true,
    getCurrentPages: true,
    getApp: true,
    UniApp: true,
    UniHelper: true,
    App: true,
    Page: true,
    Component: true,
    AnyObject: true,
  },

  parserOptions: {
    ecmaVersion: 'latest', // 使用最新es语法规则
  },

  rules: {
    // 配置具体规则
  },
}
