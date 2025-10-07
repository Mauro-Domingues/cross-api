export class CreateMysqlDataSource {
  public execute(): string {
    return `import { ormConfig } fr\om '@config/orm';
import { DataSource } fr\om 'typeorm';

const dataSources = new Map<string, DataSource>();

export const MysqlDataSource = (database: string): DataSource => {
  if (!dataSources.has(database)) {
    const dataSource = new DataSource({
      ...ormConfig.config.default,
      ...ormConfig.config.mysql,
      database: ormConfig.config.setDatabase(database),
    });

    dataSources.set(database, dataSource);
  }

  return dataSources.get(database)!;
};
`;
  }
}
