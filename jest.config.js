module.exports = {
  verbose: true,
  projects: [
    '<rootDir>'
  ],
  testMatch: [
    "**/steps/**/*.[t]s?(x)"
  ],
  testPathIgnorePatterns: [
    '/(?:production_)?node_modules/',
    '.d.ts$',
    '<rootDir>/test/fixtures',
    '<rootDir>/test/helpers',
    '__mocks__'
  ],
  transform: {
    '^.+\\.[t]sx?$': 'ts-jest',
  },
};
