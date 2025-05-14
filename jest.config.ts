// filepath: c:\Users\Kaique\Documents\GitHub\SaaSescola\jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: 'test-results', outputName: 'test-report.xml' },
    ],
  ],
};
