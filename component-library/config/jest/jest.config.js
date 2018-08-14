module.exports = {
  rootDir: '../../',
  verbose: true,
  testURL: 'http://localhost/',
  collectCoverageFrom: ['src/**/*.js', '!**/*.stories.js', '!**/*index.js'],
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
    '@jonnypickardjs(.*)$': '<rootDir>/src/components/$1'
  },
  moduleDirectories: ['node_modules', '<rootDir>', '<rootDir>/src'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.js$']
};
