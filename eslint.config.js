const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["prac1cicd/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: globals.browser,
    },
    rules: js.configs.recommended.rules,
  },
];