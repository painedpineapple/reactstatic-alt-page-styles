module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  plugins: ['babel', 'react'],
  globals: {
    Raven: true,
    exports: true,
    process: true,
  },
  rules: {
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'max-len': 0,
  },
}
