module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/build/', './test/e2e/'],
  //testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$',
  collectCoverage: false,
  testTimeout: 15000,
  verbose: true,
  collectCoverageFrom: ['src/**/*.ts'],
  //setupFilesAfterEnv: ['./jest.setup.js'],
};