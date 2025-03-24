export class CreateFakeDataSource {
  public execute(): string {
    return `import { DataSource } ${'from'} 'typeorm';

const dataSources = new Map<string, DataSource>();

export const FakeDataSource = (database: string): DataSource => {
  if (!dataSources.has(database)) {
    const dataSource = {
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

    dataSources.set(database, dataSource);
  }

  return dataSources.get(database)!;
};
`;
  }
}
