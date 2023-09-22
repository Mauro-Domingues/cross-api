export class CreateFakeDataSource {
  public execute(): string {
    return `import { DataSource } ${'from'} 'typeorm';
import 'dotenv/config';
import 'reflect-metadata';

export const FakeMysqlDataSource = {
  isInitialized: true,
  createQueryRunner: () => ({
    rollbackTransaction: async () => Promise.resolve(),
    commitTransaction: async () => Promise.resolve(),
    startTransaction: async () => Promise.resolve(),
    connect: async () => Promise.resolve(),
    release: async () => Promise.resolve(),
    isTransactionActive: true,
    isReleased: false,
  }),
} as DataSource;
`;
  }
}
