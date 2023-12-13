module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['node_modules/', 'dist/', 'output/'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'], // 允许使用any
    'vue/multi-word-component-names': ['off'] // 允许组件命名用单个词
  }
}
