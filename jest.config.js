/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  collectCoverageFrom: ['<rootDir/src/**/*.js'],
  testEnvironment: 'node',
  coverageDirectory: "coverage",
  coverageProvider: "v8",
}
