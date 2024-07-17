export class CreateFakeDataSource {
  public execute(): string {
    return `import { DataSource } ${'from'} 'typeorm';
import 'dotenv/config';
import 'reflect-metadata';

export const FakeDataSource = {
  isInitialized: true,
  createQueryRunner() {
    const self = {
      rollbackTransaction: async (): Promise<void> => {
        self.isTransactionActive = false;
      },
      commitTransaction: async (): Promise<void> => {
        self.isTransactionActive = false;
      },
      startTransaction: async (): Promise<void> => {
        self.isTransactionActive = true;
      },
      release: async (): Promise<void> => {
        self.isReleased = true;
      },
      isTransactionActive: false,
      isReleased: false,
    };
    return self;
  },
} as DataSource;
`;
  }
}
