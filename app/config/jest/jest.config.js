module.exports = {
  rootDir: '../../',
  verbose: true,
  testURL: 'http://localhost/',
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  setupFiles: ['<rootDir>/config/jest/test-setup.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js',
    '<rootDir>/src/**/.test.js'
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^.+\\.scss$': 'identity-obj-proxy',
    '^.+\\.(svg|png)$': '<rootDir>/config/jest/fileMock.js'
  },
  moduleDirectories: ['node_modules', '<rootDir>', '<rootDir>/src'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.js$']
};
