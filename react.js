/**
 * selling ESLint 规则
 */

const react = require("./rules/react-common.js");
const reactHooks = require("./rules/react-hooks-common.js");

module.exports = {
  extends: ["./base.js", "./ts.js"],
  parserOptions: {
    "ecmaVersion": 6,
  },
  plugins: [
    "react",
    "react-hooks"
  ],
  rules: Object.assign({}, react, reactHooks)
}
