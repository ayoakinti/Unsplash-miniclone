module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // we only want single quotes
    quotes: ['error', 'single'],
    // we use 2 spaces to indent our code
    indent: ['error', 2],
    // we want to avoid useless spaces
    'no-multi-spaces': ['error']
  }
}
