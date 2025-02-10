export class CreateOrmConfig {
  public execute(): string {
    return `import { DataSourceOptions } ${'from'} 'typeorm';
import { appConfig } ${'from'} './app';

interface IOrmConfigDTO {
  readonly config: {
    readonly setDatabase: (database: string) => string;
    readonly default: {
      readonly synchronize: boolean;
      readonly entities: Array<string>;
      readonly migrations: Array<string>;
    };
    readonly mysql: DataSourceOptions & { readonly type: 'mysql' };
  };
}

export const ormConfig = Object.freeze<IOrmConfigDTO>({
  config: {
    setDatabase: (database: string): string =>
      appConfig.config.apiMode === 'test' ? 'database_test' : database,
    default: {
      synchronize: appConfig.config.apiMode === 'development',
      entities: [\`\${__dirname}/../modules/**/entities/*.{js,ts}\`],
      migrations: [\`\${__dirname}/../shared/typeorm/migrations/*.{js,ts}\`],
    },
    mysql: {
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
  },
});
`;
  }
}
