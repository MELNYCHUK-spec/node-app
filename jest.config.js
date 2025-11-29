module.exports = {
  testEnvironment: "node",
  testTimeout: 10000,
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["index.js", "!node_modules/**", "!coverage/**"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  testResultsProcessor: undefined,
};
