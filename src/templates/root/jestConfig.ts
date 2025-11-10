export class CreateJestConfig {
  public execute(): string {
    return `import { pathsToModuleNameMapper, type JestConfigWithTsJest } fr\om 'ts-jest';
import { compilerOptions } fr\om './tsconfig.json';

export default {
  testTimeout: 20000,
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  verbose: true,
  collectCoverageFrom: ['<rootDir>/src/modules/**/services/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
  preset: 'ts-jest',
  setupFiles: ['dotenv/config', 'reflect-metadata'],
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
} as JestConfigWithTsJest;
`;
  }
}
