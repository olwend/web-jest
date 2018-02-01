module.exports = {
  globalSetup:  './jest_config/setup.js',
  globalTeardown: './jest_config/teardown.js',
  testEnvironment: './jest_config/puppeteer_environment.js',
  testResultsProcessor: "./node_modules/jest-html-reporter",
  verbose: true,
}
