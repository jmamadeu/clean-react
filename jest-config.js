module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
  ],
  "testEnvironment": "node",
  transform: {
    '.+\\.ts$': 'test-jest'
  }
}