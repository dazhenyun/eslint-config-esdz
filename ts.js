/**
 * selling ESLint 规则
 */


const typescriptRule = require("./rules/ts-common.js");

module.exports = {
  parserOptions: {
    "ecmaVersion": 6,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  rules: Object.assign({}, typescriptRule)
}