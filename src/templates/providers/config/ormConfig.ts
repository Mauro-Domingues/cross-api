export class CreateOrmConfig {
  public execute(): string {
    return `import { Joi } fr\om 'celebrate';
import type { DataSourceOptions } fr\om 'typeorm';
import { appConfig } fr\om './app';

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

const dataSourceValidator = Joi.object<DataSourceOptions>({
  host: Joi.string().hostname().required(),
  port: Joi.number().integer().positive().min(1).max(65535).required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  database: Joi.string().required(),
});

const ormValidator = Joi.object<IOrmConfigDTO>({
  config: Joi.object<IOrmConfigDTO['config']>({
    setDatabase: Joi.function().arity(1).required(),
    default: Joi.object<IOrmConfigDTO['config']['default']>({
      synchronize: Joi.boolean().required(),
      entities: Joi.array().items(Joi.string().min(1)).min(1).required(),
      migrations: Joi.array().items(Joi.string().min(1)).min(1).required(),
    }).required(),
    mysql: dataSourceValidator
      .keys({
        type: Joi.string().valid('mysql').required(),
      })
      .required(),
  }).required(),
});

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
      database: process.env.MYSQL_DATABASE,
    },
  },
});

ormValidator.validateAsync(ormConfig);
`;
  }
}
