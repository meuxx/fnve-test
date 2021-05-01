module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', '../node_modules'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,js}'],
  coverageReporters: ['text'],
}
