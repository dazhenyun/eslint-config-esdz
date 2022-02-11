/**
 * selling ESLint 规则
 */

const vueRules = require("./rules/vue-common.js");

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/typescript/recommended',
    "./base.js", 
    "./ts.js"
  ],
  parserOptions: {
    ecmaVersion: 2019,
  },
  plugins: ['vue'],
  rules: Object.assign({}, vueRules)
};