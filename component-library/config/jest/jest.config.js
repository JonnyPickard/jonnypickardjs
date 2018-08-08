module.exports = {
  rootDir: '../../',
  collectCoverageFrom: ['src/**/*.js'],
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
    '^.+\\.scss$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.js$']
};
