module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'prettier',
    'prettier/react',
  ],
  settings: {
    react: {
      sourceType: 'module',
      version: 'detect',
    },
  },
  plugins: ['import', 'react-hooks'],

  rules: {
    // JS rules
    eqeqeq: ['error', 'always'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

