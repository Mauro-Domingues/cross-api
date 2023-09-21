export class CreateFakeDataSource {
  public execute(): string {
    return `import { DataSource } ${'from'} 'typeorm';
import 'dotenv/config';
import 'reflect-metadata';

export const FakeMysqlDataSource = {
  isInitialized: true,
  createQueryRunner: () => ({
    isTransactionActive: true,
    connect: async () => Promise.resolve(),
    startTransaction: async () => Promise.resolve(),
    commitTransaction: async () => Promise.resolve(),
    rollbackTransaction: async () => Promise.resolve(),
    release: async () => Promise.resolve(),
  }),
} as DataSource;
`;
  }
}
