module.exports = {
  roots: ['<rootDir>/test', '<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/test/**/*.ts',
    '<rootDir>/src/**/*.ts',
    '!**/index.*',
    '!<rootDir>/src/**/server.ts',
    '!<rootDir>/src/**/EnvironmentConfiguration.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
