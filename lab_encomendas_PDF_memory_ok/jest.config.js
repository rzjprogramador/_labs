module.exports = {
  roots: ['<rootDir>'],
  collectCoverageFrom: [
      '<rootDir>/src/**/*.ts'
      // com exclamacao ignorar do jest
    //   '!<rootDir>/node_modules/',
    //   '!<rootDir>/zz--ARRUMAR/'
    ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }

}
