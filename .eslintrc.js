const path = require('path');
module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["react","react-native","@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:react/recommended","standard","plugin:@typescript-eslint/recommended",],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "no-debugger": 0,
    "no-tabs": 2,
    "quotes": [2, "single", { "allowTemplateLiterals": true }],
    "jsx-quotes": [0, "prefer-single"],
    "eqeqeq": 2,
    "no-undef": 0,
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": 'off',
    "react/jsx-no-target-blank": "off",
    "no-console": 1,
    "@typescript-eslint/no-var-requires": 0
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  }
}