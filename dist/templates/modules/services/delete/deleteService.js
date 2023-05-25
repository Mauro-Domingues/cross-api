import { Messages } from '../../../../tools/messages.js';
import { Console } from '../../../../tools/console.js';
export class DeleteService {
    messages;
    console;
    names;
    constructor(names) {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.names = names;
    }
    execute() {
        if (!this.names) {
            this.console.one([
                this.messages.moduleNotFound,
                'red',
                true,
                false,
                false,
            ]);
            throw new Error();
        }
        return `import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ICacheProviderDTO } from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import { I${this.names.pluralUpperModuleName}RepositoryDTO } from '@modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository';
import { IResponseDTO } from '@dtos/IResponseDTO';
import { FindOptionsWhere } from 'typeorm';
import { ${this.names.upperModuleName} } from '@modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}';
import { AppDataSource } from '@shared/typeorm/dataSource';

@injectable()
export class Delete${this.names.upperModuleName}Service {
  constructor(
    @inject('${this.names.pluralUpperModuleName}Repository')
    private ${this.names.pluralLowerModuleName}Repository: I${this.names.pluralUpperModuleName}RepositoryDTO,

    @inject('CacheProvider')
    private cacheProvider: ICacheProviderDTO,
  ) {}

  public async execute(
    ${this.names.lowerModuleName}Param: FindOptionsWhere<${this.names.upperModuleName}>,
  ): Promise<IResponseDTO<null>> {
    const trx = AppDataSource.createQueryRunner();

    await trx.startTransaction();
    try {
      const ${this.names.lowerModuleName} = await this.${this.names.pluralLowerModuleName}Repository.findBy(trx, ${this.names.lowerModuleName}Param);

      if (!${this.names.lowerModuleName}) {
        throw new AppError('${this.names.upperModuleName} not found', 404);
      }

      await this.${this.names.pluralLowerModuleName}Repository.delete(trx, { id: ${this.names.lowerModuleName}.id });

      await this.cacheProvider.invalidatePrefix('${this.names.pluralLowerModuleName}');
      await trx.commitTransaction();

      return {
        code: 204,
        message_code: 'NO_CONTENT',
        message: 'successfully deleted ${this.names.lowerModuleName}',
        data: null,
      };
    } catch (error: unknown) {
      await trx.rollbackTransaction();
      throw error;
    } finally {
      await trx.release();
    }
  }
}
`;
    }
}
