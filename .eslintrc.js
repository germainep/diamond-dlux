module.exports = {
  extends: ['next', 'prettier'],
  env: {
    browser: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
