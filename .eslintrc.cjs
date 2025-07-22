module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'max-lines': ['warn', { max: 300, skipBlankLines: true, skipComments: true }],
  },
};
