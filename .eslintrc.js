module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    "require-await": 0,
    "no-undef": 0,
    "semi": [1, "always"],
    "no-console": 1,
    "indent": "off",
    "indent-legacy": ["error", 2],
    "space-before-function-paren": ["error", "never"],
    "comma-dangle": 0,
    "no-unused-vars": 0,
  }
};
