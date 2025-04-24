export default {
  globals: {
    describe: true,
    before: true,
    it: true,
  },
  env: {
    commonjs: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'function'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['class', 'interface', 'typeAlias', 'typeParameter'],
        format: ['PascalCase'],
      },
      {
        selector: ['variable', 'enum'],
        modifiers: ['const'],
        format: ['UPPER_CASE'],
      },
      {
        selector: ['method'],
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: ['property'],
        format: ['snake_case'],
      },
    ],
    'arrow-parens': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
        allowUnboundThis: false,
      },
    ],
    'array-element-newline': [
      'error',
      {
        ArrayExpression: 'consistent',
        ArrayPattern: {
          minItems: 50,
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-useless-return': 'error',
    'prefer-template': 'error',
    'no-template-curly-in-string': 'error',
    curly: ['error', 'multi'],
    'function-call-argument-newline': ['error', 'consistent'],
    'func-call-spacing': ['error', 'never'],
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};